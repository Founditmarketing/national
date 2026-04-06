import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone, MapPin, Clock, Send, Calendar, Car, Wrench,
  ShieldCheck, Mail, Loader2, CheckCircle, AlertCircle,
  MessageSquare
} from 'lucide-react';
import { useCallRouting } from '../hooks/useCallRouting';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type TabType = 'contact' | 'quote';

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-blue/50 focus:bg-white/10 transition-all font-medium text-white placeholder:text-slate-600 disabled:opacity-50';

const iconInputClass =
  'w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 focus:outline-none focus:border-brand-blue/50 focus:bg-white/10 transition-all font-medium text-white placeholder:text-slate-600 disabled:opacity-50';

export default function Contact() {
  const { phoneNumber, phoneHref, deskLabel } = useCallRouting();
  const [activeTab, setActiveTab] = useState<TabType>('contact');

  // --- Contact form state ---
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [contactStatus, setContactStatus] = useState<FormStatus>('idle');
  const [contactError, setContactError] = useState('');

  // --- Quote form state ---
  const [quoteData, setQuoteData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
  });
  const [quoteStatus, setQuoteStatus] = useState<FormStatus>('idle');
  const [quoteError, setQuoteError] = useState('');

  const submitToApi = async (payload: Record<string, string>) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
    return data;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');
    setContactError('');
    try {
      await submitToApi({ formType: 'contact', ...contactData });
      setContactStatus('success');
      setContactData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setContactStatus('error');
      setContactError(err.message || 'Failed to send your message. Please call us directly.');
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteStatus('loading');
    setQuoteError('');
    try {
      await submitToApi({ formType: 'quote', ...quoteData });
      setQuoteStatus('success');
      setQuoteData({ firstName: '', lastName: '', email: '', phone: '', vehicle: '', service: '' });
    } catch (err: any) {
      setQuoteStatus('error');
      setQuoteError(err.message || 'Failed to send your request. Please call us directly.');
    }
  };

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'contact', label: 'Send a Message', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'quote', label: 'Request a Quote', icon: <Wrench className="w-4 h-4" /> },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ── Left: Info Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-bold mb-8 uppercase tracking-widest border border-white/5"
            >
              <Calendar className="w-3 h-3 text-brand-blue" />
              Get In Touch
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 tracking-tight">
              Ready to <br />
              <span className="text-brand-blue">Recalibrate?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium max-w-lg">
              Have a question or need a quote? Send us a message and our team will respond promptly — or call us directly for immediate assistance.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-all">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{deskLabel}</p>
                  <a href={phoneHref} className="text-xl font-display font-bold text-white hover:text-brand-blue transition-colors">{phoneNumber}</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-all">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Operations HQ</p>
                  <p className="text-xl font-display font-bold text-white">400 Hwy 165 South, Pineville, LA</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-all">
                  <Clock className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Active Hours</p>
                  <p className="text-xl font-display font-bold text-white">Mon — Fri: 8AM - 5PM</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] border border-white/5 flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              </div>
              <p className="text-slate-400 font-bold text-sm leading-relaxed italic">
                Authorized DOT Inspection Hub — Official Certification Center for Pineville & Central Louisiana.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Tabbed Form Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-transparent rounded-[3rem] blur-2xl opacity-50" />
            <div className="relative glass p-8 md:p-10 rounded-[3.5rem] border border-white/10 shadow-2xl">

              {/* Tab Switcher */}
              <div className="flex gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'text-white'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute inset-0 bg-brand-blue rounded-xl shadow-lg shadow-brand-blue/30"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {tab.icon}
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* ── Contact Form ── */}
              <AnimatePresence mode="wait">
                {activeTab === 'contact' && (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleContactSubmit}
                  >
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">First Name</label>
                        <input
                          type="text"
                          placeholder="John"
                          value={contactData.firstName}
                          className={inputClass}
                          onChange={(e) => setContactData({ ...contactData, firstName: e.target.value })}
                          required
                          disabled={contactStatus === 'loading'}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Last Name</label>
                        <input
                          type="text"
                          placeholder="Doe"
                          value={contactData.lastName}
                          className={inputClass}
                          onChange={(e) => setContactData({ ...contactData, lastName: e.target.value })}
                          required
                          disabled={contactStatus === 'loading'}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={contactData.email}
                          className={iconInputClass}
                          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                          required
                          disabled={contactStatus === 'loading'}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="tel"
                          placeholder="(318) 555-0000"
                          value={contactData.phone}
                          className={iconInputClass}
                          onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                          required
                          disabled={contactStatus === 'loading'}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                      <textarea
                        placeholder="Tell us how we can help you..."
                        rows={4}
                        value={contactData.message}
                        className={`${inputClass} resize-none`}
                        onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                        required
                        disabled={contactStatus === 'loading'}
                      />
                    </div>

                    <StatusMessage status={contactStatus} error={contactError} />

                    <SubmitButton
                      status={contactStatus}
                      loadingLabel="Sending Message..."
                      successLabel="Message Sent"
                      idleLabel="Send Message"
                    />
                    <p className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mt-6">
                      We typically reply within 1 business day
                    </p>
                  </motion.form>
                )}

                {/* ── Quote Form ── */}
                {activeTab === 'quote' && (
                  <motion.form
                    key="quote-form"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleQuoteSubmit}
                  >
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">First Name</label>
                        <input
                          type="text"
                          placeholder="John"
                          value={quoteData.firstName}
                          className={inputClass}
                          onChange={(e) => setQuoteData({ ...quoteData, firstName: e.target.value })}
                          required
                          disabled={quoteStatus === 'loading'}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Last Name</label>
                        <input
                          type="text"
                          placeholder="Doe"
                          value={quoteData.lastName}
                          className={inputClass}
                          onChange={(e) => setQuoteData({ ...quoteData, lastName: e.target.value })}
                          required
                          disabled={quoteStatus === 'loading'}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={quoteData.email}
                          className={iconInputClass}
                          onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                          required
                          disabled={quoteStatus === 'loading'}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="tel"
                          placeholder="(318) 555-0000"
                          value={quoteData.phone}
                          className={iconInputClass}
                          onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                          required
                          disabled={quoteStatus === 'loading'}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Vehicle Details</label>
                        <div className="relative">
                          <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            placeholder="Year, Make, Model"
                            value={quoteData.vehicle}
                            className={iconInputClass}
                            onChange={(e) => setQuoteData({ ...quoteData, vehicle: e.target.value })}
                            disabled={quoteStatus === 'loading'}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Service Needed</label>
                        <select
                          className="w-full bg-slate-800 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-blue/50 appearance-none font-medium text-white cursor-pointer disabled:opacity-50"
                          value={quoteData.service}
                          onChange={(e) => setQuoteData({ ...quoteData, service: e.target.value })}
                          disabled={quoteStatus === 'loading'}
                        >
                          <option value="">Select a service...</option>
                          <option value="Multi-Service Bundle (Discounted)">Multi-Service Bundle</option>
                          <option value="Mechanical Repair / Oil Change">Mechanical Repair / Oil Change</option>
                          <option value="Tires & Alignment">Tires &amp; Alignment</option>
                          <option value="Auto Glass / Windshield">Auto Glass / Windshield</option>
                          <option value="DOT Inspection / Fleet Service">DOT Inspection / Fleet Service</option>
                        </select>
                      </div>
                    </div>

                    <StatusMessage status={quoteStatus} error={quoteError} />

                    <SubmitButton
                      status={quoteStatus}
                      loadingLabel="Sending Request..."
                      successLabel="Quote Requested"
                      idleLabel="Request Priority Quote"
                    />
                    <p className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mt-6">
                      End-to-end secure scheduling protocol active
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ── Shared sub-components ── */

function StatusMessage({ status, error }: { status: FormStatus; error: string }) {
  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6"
      >
        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
        <p className="text-emerald-400 font-bold text-sm">Sent! We'll be in touch shortly.</p>
      </motion.div>
    );
  }
  if (status === 'error') {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 mb-6"
      >
        <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
        <p className="text-red-400 font-bold text-sm">{error}</p>
      </motion.div>
    );
  }
  return null;
}

function SubmitButton({
  status,
  loadingLabel,
  successLabel,
  idleLabel,
}: {
  status: FormStatus;
  loadingLabel: string;
  successLabel: string;
  idleLabel: string;
}) {
  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

  return (
    <motion.button
      whileHover={{ scale: isLoading || isSuccess ? 1 : 1.02 }}
      whileTap={{ scale: isLoading || isSuccess ? 1 : 0.98 }}
      type="submit"
      disabled={isLoading || isSuccess}
      className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-5 rounded-[1.5rem] transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-3 text-base disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <><Loader2 className="w-5 h-5 animate-spin" />{loadingLabel}</>
      ) : isSuccess ? (
        <><CheckCircle className="w-5 h-5" />{successLabel}</>
      ) : (
        <>{idleLabel}<Send className="w-5 h-5" /></>
      )}
    </motion.button>
  );
}
