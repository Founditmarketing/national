import express from 'express';
import dotenv from 'dotenv';

// Load .env.local first, then .env
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const app = express();
app.use(express.json());

// Dynamically load and mount API route handlers
async function loadRoutes() {
  const { default: chatHandler } = await import('./api/chat.js');
  const { default: contactHandler } = await import('./api/contact.js');

  // Adapter: convert Express req/res → Web API Request → Response
  const toWebHandler = (handler: (req: Request) => Promise<Response>) => {
    return async (req: express.Request, res: express.Response) => {
      const url = `http://localhost${req.originalUrl}`;
      const webReq = new Request(url, {
        method: req.method,
        headers: req.headers as HeadersInit,
        body: ['GET', 'HEAD'].includes(req.method) ? undefined : JSON.stringify(req.body),
      });

      try {
        const webRes = await handler(webReq);
        res.status(webRes.status);
        webRes.headers.forEach((value, key) => res.setHeader(key, value));
        const text = await webRes.text();
        res.send(text);
      } catch (err) {
        console.error('Handler error:', err);
        res.status(500).json({ error: 'Internal server error' });
      }
    };
  };

  app.all('/api/chat', toWebHandler(chatHandler));
  app.all('/api/contact', toWebHandler(contactHandler));
}

loadRoutes().then(() => {
  const PORT = process.env.API_PORT || 3001;
  app.listen(PORT, () => {
    console.log(`✅ API server running on http://localhost:${PORT}`);
  });
});
