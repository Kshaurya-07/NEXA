import React, { useState } from 'react';
import { 
  Send, Mail, Phone, User, MessageSquare, CheckCircle, 
  AlertCircle, Shield, Sparkles, Terminal, ArrowRight, RefreshCw, Radio
} from 'lucide-react';
import Card3D from './shared/Card3D';

const RECIPIENT_EMAIL = "kshaurya0708@gmail.com";
const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your query or message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a little more detail (at least 10 characters).';
    }

    const hasEmail = Boolean(formData.email.trim());
    const hasPhone = Boolean(formData.phone.trim());

    if (!hasEmail && !hasPhone) {
      newErrors.contactMethod = 'Please provide either an email address or a phone number so we can reach you.';
    }

    if (hasEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (hasPhone) {
      const phoneClean = formData.phone.replace(/[\s\-\(\)\+]/g, '');
      if (phoneClean.length < 7 || phoneClean.length > 15 || !/^\d+$/.test(phoneClean)) {
        newErrors.phone = 'Please enter a valid phone number with 7 to 15 digits.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (errors.contactMethod && (name === 'email' || name === 'phone')) {
      setErrors(prev => ({ ...prev, contactMethod: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim() || 'Not provided (phone contact only)',
        phone: formData.phone.trim() || 'Not provided',
        message: formData.message.trim(),
        _subject: `NEXA Student Query from ${formData.name.trim()}`,
        _template: 'table',
        source: 'NEXA Official Website - Contact System',
        submitted_at: new Date().toLocaleString(),
      };

      const response = await fetch(FORMSUBMIT_AJAX_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success === 'true' || data.success === true || response.status === 200) {
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', message: '' });
          setErrors({});
        } else {
          throw new Error(data.message || 'Submission was not accepted by the dispatch relay.');
        }
      } else {
        throw new Error(`Server returned HTTP ${response.status}`);
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Network dispatch error. Please retry or email directly to kshaurya0708@gmail.com'
      );
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden">
      {/* Volumetric atmospheric ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            DIRECT COMMS FREQUENCY • TEAM GLITCHERS
          </div>

          <h2 className="font-['Syncopate'] text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            TALK TO <br />
            <span className="text-zinc-400 font-light text-glow">TEAM GLITCHERS</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 font-light max-w-2xl mx-auto">
            Have a question about NEXA, need support, want to collaborate, or simply want to get in touch?
          </p>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-mono">
            Drop your email or phone number and we'll get back to you.
          </p>
        </div>

        {/* Master Futuristic Split Communication Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left Column: 3D Communication Telemetry Visual */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Card3D depth={8} className="p-6 sm:p-8 bg-[#090913]/90 border-white/15 h-full flex flex-col justify-between shadow-2xl">
              <div className="space-y-6">
                {/* Visual Status Indicator */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute opacity-75" />
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 relative" />
                    </div>
                    <span className="font-mono text-xs uppercase font-bold text-white tracking-wider">
                      DISPATCH NODE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                    DIRECT RELAY
                  </span>
                </div>

                {/* 3D Holographic Communication Ring Graphic */}
                <div className="relative py-6 flex items-center justify-center">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    {/* Outer slow spinning pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-cyan-500/20 border-dashed animate-[spin_20s_linear_infinite]" />
                    {/* Middle reverse orbital ring */}
                    <div className="absolute inset-3 rounded-full border border-white/15 animate-[spin_12s_linear_infinite_reverse]" />
                    {/* Glowing Core */}
                    <div className="w-20 h-20 rounded-2xl bg-black/80 border border-white/20 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.25)] backdrop-blur-md">
                      <Radio className="w-7 h-7 text-cyan-400 animate-pulse" />
                      <span className="text-[8px] font-mono text-zinc-400 mt-1 uppercase tracking-widest">
                        NEXA LINK
                      </span>
                    </div>
                  </div>
                </div>

                {/* Comms Protocol Info */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/05 space-y-1">
                    <div className="text-[10px] text-zinc-500 uppercase">RECIPIENT INBOX</div>
                    <div className="text-white font-medium flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{RECIPIENT_EMAIL}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/05 space-y-1">
                    <div className="text-[10px] text-zinc-500 uppercase">ENCRYPTION PROTOCOL</div>
                    <div className="text-zinc-300 flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>256-Bit SSL Forwarded Dispatch</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/05 space-y-1">
                    <div className="text-[10px] text-zinc-500 uppercase">SERVICE RESPONSE SLA</div>
                    <div className="text-zinc-300 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Average Response &lt; 4 Hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="mt-6 pt-4 border-t border-white/05 text-[11px] font-mono text-zinc-500 text-left">
                Every query is directly reviewed by Team Glitchers engineers. Zero third-party marketing automation.
              </div>
            </Card3D>
          </div>

          {/* Right Column: Glassmorphic Interactive Form */}
          <div className="lg:col-span-7">
            <Card3D depth={8} className="p-6 sm:p-8 md:p-10 bg-[#0a0a14]/95 border-white/15 shadow-2xl relative">
              {/* SUCCESS STATE */}
              {status === 'success' && (
                <div className="py-12 px-4 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-['Syncopate'] text-2xl font-bold uppercase tracking-wider text-white">
                      Message Received
                    </h3>
                    <p className="text-sm text-zinc-300 font-light max-w-md mx-auto">
                      Your query has been forwarded directly to Team Glitchers at{' '}
                      <span className="text-cyan-400 font-mono">{RECIPIENT_EMAIL}</span>.
                    </p>
                    <p className="text-xs text-zinc-400 font-mono">
                      Team Glitchers will get back to you soon.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-mono font-medium text-white transition-all cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Query</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ERROR STATE BANNER (if submission failed, form remains filled for retry) */}
              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono space-y-2">
                  <div className="flex items-center gap-2 font-bold text-rose-200">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Transmission Failed</span>
                  </div>
                  <div>{errorMessage}</div>
                  <div className="pt-1 text-[11px] text-zinc-400">
                    You can also reach us directly via email at{' '}
                    <a href={`mailto:${RECIPIENT_EMAIL}`} className="text-white underline hover:text-cyan-300">
                      {RECIPIENT_EMAIL}
                    </a>
                  </div>
                </div>
              )}

              {/* ACTIVE FORM */}
              {status !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        placeholder="e.g. Arjun Patel"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? 'border-rose-500/60 focus:ring-rose-500/50'
                            : 'border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/30'
                        }`}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      />
                    </div>
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1.5 text-xs text-rose-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Contact Info Header & Notice */}
                  {errors.contactMethod && (
                    <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.contactMethod}</span>
                    </div>
                  )}

                  {/* Email & Phone Dual Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Field */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                        Email Address <span className="text-zinc-500 text-[10px]">(or Phone)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={status === 'submitting'}
                          placeholder="arjun@university.edu"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.email
                              ? 'border-rose-500/60 focus:ring-rose-500/50'
                              : 'border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/30'
                          }`}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        />
                      </div>
                      {errors.email && (
                        <p id="contact-email-error" className="mt-1.5 text-xs text-rose-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number Field */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                        Phone Number <span className="text-zinc-500 text-[10px]">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={status === 'submitting'}
                          placeholder="+91 98765 43210"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.phone
                              ? 'border-rose-500/60 focus:ring-rose-500/50'
                              : 'border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/30'
                          }`}
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                        />
                      </div>
                      {errors.phone && (
                        <p id="contact-phone-error" className="mt-1.5 text-xs text-rose-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                      Your Query or Message <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        placeholder="Tell us what you need — bug report, feedback, collaboration idea, or feature question..."
                        className={`w-full p-4 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all resize-y min-h-[110px] ${
                          errors.message
                            ? 'border-rose-500/60 focus:ring-rose-500/50'
                            : 'border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/30'
                        }`}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      />
                    </div>
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 text-xs text-rose-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Form Submission Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-['Syncopate'] text-xs uppercase font-bold tracking-widest bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-black" />
                          <span>TRANSMITTING MESSAGE...</span>
                        </>
                      ) : (
                        <>
                          <span>DISPATCH TO TEAM GLITCHERS</span>
                          <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
