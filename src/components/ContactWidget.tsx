import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Phone, ArrowRight, User } from 'lucide-react';

interface ChatStep {
    id: string;
    question: string;
    answer: string;
}

export default function ContactWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFaq, setSelectedFaq] = useState<ChatStep | null>(null);

    const faqs: ChatStep[] = [
        {
            id: 'hours',
            question: 'What are your hours?',
            answer: 'Our main facility is open Monday – Friday: 8:00 AM – 5:00 PM.'
        },
        {
            id: 'location',
            question: 'Where are you located?',
            answer: 'We are located at 1400 Hwy 165 S, Pineville, LA 71360.'
        },
        {
            id: 'mobile',
            question: 'Do you offer mobile service?',
            answer: 'Yes! We provide dedicated mobile tire service for 18-wheelers and big trucks.'
        },
        {
            id: 'dot',
            question: 'How do I book a DOT inspection?',
            answer: "We are the only authorized DOT inspection station in Pineville. Call us now or visit our HQ for rapid certification."
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-6 w-[350px] sm:w-[400px] glass rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-brand-red p-6 pb-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-white font-display font-bold text-2xl tracking-tight">How can we help?</h3>
                                    <p className="text-white/70 text-sm font-medium">National Tire & Auto Hub</p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <a
                                href="tel:3184422003"
                                className="flex items-center justify-center gap-3 w-full bg-white py-4 rounded-2xl text-brand-red font-bold shadow-xl shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                <Phone className="w-5 h-5 fill-brand-red text-brand-red" />
                                Call Now: (318) 442-2003
                            </a>
                        </div>

                        {/* Chat Content */}
                        <div className="p-6 bg-slate-900/50 flex flex-col gap-6 max-h-[400px] overflow-y-auto scrollbar-hide">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                                    <User className="w-5 h-5 text-brand-red" />
                                </div>
                                <div className="glass-light p-4 rounded-2xl rounded-tl-none border border-white/5">
                                    <p className="text-slate-300 text-sm font-medium leading-relaxed">
                                        Hello! I'm your National Auto Assistant. Select a question below or call us directly.
                                    </p>
                                </div>
                            </div>

                            {selectedFaq && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-4"
                                >
                                    <div className="flex flex-row-reverse gap-3">
                                        <div className="glass p-4 rounded-2xl rounded-tr-none border border-brand-red/20 bg-brand-red/5">
                                            <p className="text-white text-sm font-bold">{selectedFaq.question}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                                            <User className="w-5 h-5 text-brand-red" />
                                        </div>
                                        <div className="glass-light p-4 rounded-2xl rounded-tl-none border border-white/5">
                                            <p className="text-slate-300 text-sm font-medium leading-relaxed italic">
                                                {selectedFaq.answer}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setSelectedFaq(null)}
                                        className="text-brand-red text-xs font-bold uppercase tracking-widest pl-13 hover:underline"
                                    >
                                        Ask something else
                                    </button>
                                </motion.div>
                            )}

                            {!selectedFaq && (
                                <div className="space-y-3">
                                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-4">Quick Inquiries</p>
                                    {faqs.map((faq) => (
                                        <button
                                            key={faq.id}
                                            onClick={() => setSelectedFaq(faq)}
                                            className="w-full flex items-center justify-between p-4 rounded-xl glass-light border border-white/5 hover:border-brand-red/30 hover:bg-white/5 transition-all group text-left"
                                        >
                                            <span className="text-slate-300 text-sm font-bold">{faq.question}</span>
                                            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-brand-red transition-colors" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer shadow fade */}
                        <div className="h-6 bg-gradient-to-t from-slate-900 to-transparent absolute bottom-0 left-0 w-full pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-slate-800 rotate-90 border border-white/10' : 'bg-brand-red shadow-brand-red/20 border border-brand-red/20'
                    }`}
            >
                {isOpen ? (
                    <X className="w-8 h-8 text-white" />
                ) : (
                    <MessageSquare className="w-8 h-8 text-white" />
                )}
            </motion.button>
        </div>
    );
}
