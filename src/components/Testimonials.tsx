import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Stephen Peters',
      content: 'This business provides the customer service that all businesses could learn to provide. The staff at National Transmission went the extra mile to help coordinate the replacement and contacted the dealer... Thank you for excellent service.',
      rating: 5,
    },
    {
      name: 'Charlie Mullins',
      content: 'Reliable. Fast. Friendly. Good warranty. Nice waiting room.',
      rating: 5,
    },
    {
      name: 'Charanda Washington',
      content: 'I had a transmission replacement! Very quick and satisfied services! The gentlemen at the shop were very polite, patient and professional! I highly recommend their services!!!!',
      rating: 5,
    },
    {
      name: 'Nick D Music',
      content: 'I had muffler delete done on my challenger and the staff were nice and answered all of my questions promptly, the service was done super quick and seemingly really enjoyed doing the work he did. Priced reasonably. Very pleasant experience.',
      rating: 5,
    },
    {
      name: 'Kaitlynn Worsham',
      content: 'Very sweet hard working people! Will help you out and explain everything very well to you! Will use them over and over again.',
      rating: 5,
    },
    {
      name: 'Alyssa White',
      content: 'Best service in CenLa!',
      rating: 5,
    },
    {
      name: 'Jessica Richey',
      content: 'I wouldn’t trust anyone else for my auto repair needs. These guys are true professionals and you can’t beat the price.',
      rating: 5,
    },
    {
      name: 'Paige Rourke',
      content: 'Reliable service, friendly team, and excellent prices! National Transmission is the best place for your auto repair needs!',
      rating: 5,
    }
  ];

  // We want two identical halves in the scroll container so translating -50% shifts exactly one full sequence perfectly
  // We duplicate the array to ensure it's extremely wide (enough for 4K displays).
  const duplicatedSet = [...reviews, ...reviews];
  const row1 = [...duplicatedSet, ...duplicatedSet]; // 32 items

  // Scramble the second row slightly for visual variance, but keep it symmetric for infinite scroll
  const offsetReviews = [...reviews.slice(4), ...reviews.slice(0, 4)];
  const duplicatedOffsetSet = [...offsetReviews, ...offsetReviews];
  const row2 = [...duplicatedOffsetSet, ...duplicatedOffsetSet]; // 32 items

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.03),transparent)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest border border-blue-500/20 shadow-lg shadow-blue-500/10"
          >
            <ShieldCheck className="w-4 h-4" />
            Verified Google Reviews
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight">
            Institutional Trust in <br />
            <span className="text-brand-red italic">Central Louisiana.</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Real feedback from hundreds of private vehicle owners, corporate fleet commanders, and daily commuters who rely on our infrastructure.
          </p>
        </div>
      </div>

      {/* Cinematic Marquees */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

        {/* Row 1: Left to Right (Technically scrolling left, so visually right to left) */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 80 }}
          className="flex gap-6 w-max"
        >
          {row1.map((review, idx) => (
            <ReviewCard key={`row1-${idx}`} review={review} />
          ))}
        </motion.div>

        {/* Row 2: Right to Left (Technically scrolling right, so visually left to right) */}
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 90 }}
          className="flex gap-6 w-max"
        >
          {row2.map((review, idx) => (
            <ReviewCard key={`row2-${idx}`} review={review} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

interface ReviewProps {
  name: string;
  content: string;
  rating: number;
}

const ReviewCard = React.forwardRef<HTMLDivElement, { review: ReviewProps }>(({ review }, ref) => {
  return (
    <div ref={ref} className="w-[350px] md:w-[450px] shrink-0 group relative glass p-8 rounded-[2rem] border border-white/5 hover:border-brand-red/30 transition-all duration-500 hover:shadow-2xl flex flex-col h-full bg-slate-900/50">
      <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 group-hover:text-brand-red/10 transition-colors" />

      <div className="flex gap-1 mb-6">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div>

      <p className="text-slate-300 mb-8 leading-relaxed font-medium italic text-base flex-1">
        "{review.content}"
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-lg font-bold text-white border border-white/10 shrink-0">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-display font-bold text-white text-base">{review.name}</h4>
          <div className="flex items-center gap-1 mt-0.5">
            <ShieldCheck className="w-3 h-3 text-blue-400" />
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Verified Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
});
