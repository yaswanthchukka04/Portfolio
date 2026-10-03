import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please provide your message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate active dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    });
  };

  return (
    <section
      id="contact"
      className={`py-16 md:py-24 border-t transition-colors ${
        isDarkMode ? 'border-slate-900 bg-slate-950/80' : 'border-slate-200 bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 block">
            Get In Touch
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Contact Chukka Yaswanth
          </h2>
          <p
            className={`text-base leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Open for internships, projects, and junior/entry-level software engineering roles in AI, Data Science, and Full Stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div
              className={`p-6 sm:p-7 rounded-2xl border ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className={`text-lg font-bold mb-5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email item */}
                <div
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                    isDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-slate-400">Email Address</div>
                      <a
                        href={`mailto:${resumeData.email}`}
                        className={`text-xs sm:text-sm font-medium hover:text-cyan-400 truncate block transition-colors ${
                          isDarkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {resumeData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(resumeData.email, 'email')}
                    title="Copy Email"
                    className="p-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors shrink-0"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                    isDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Phone (India)</div>
                      <a
                        href={`tel:+91${resumeData.phone}`}
                        className={`text-xs sm:text-sm font-medium hover:text-cyan-400 transition-colors ${
                          isDarkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        +91 {resumeData.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(resumeData.phone, 'phone')}
                    title="Copy Phone"
                    className="p-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors shrink-0"
                  >
                    {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location item */}
                <div
                  className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                    isDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Location</div>
                    <div className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {resumeData.location}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Professional Profiles */}
            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Professional Profiles
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-all duration-200 hover:border-cyan-500/50 ${
                    isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-xs font-semibold">GitHub</div>
                    <div className="text-[10px] text-slate-400">yaswanthchukka</div>
                  </div>
                </a>

                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-all duration-200 hover:border-blue-500/50 ${
                    isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="text-xs font-semibold">LinkedIn</div>
                    <div className="text-[10px] text-slate-400">yaswanth-chukka</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-2 text-cyan-400">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Send a Message</span>
              </div>
              <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Inquire or Discuss an Opportunity
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You!</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your message has been formatted. You can also reach Chukka Yaswanth directly at{' '}
                    <strong className="text-emerald-400">{resumeData.email}</strong>.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`mailto:${resumeData.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(
                        `Hi Yaswanth,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                    >
                      <span>Send Direct Email Client</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-xs font-medium mb-1.5 ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-500 ${
                          errors.name
                            ? 'border-rose-500 bg-rose-950/20 text-white'
                            : isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-white'
                            : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1 mt-1 text-[11px] text-rose-400">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-xs font-medium mb-1.5 ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-500 ${
                          errors.email
                            ? 'border-rose-500 bg-rose-950/20 text-white'
                            : isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-white'
                            : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 mt-1 text-[11px] text-rose-400">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-xs font-medium mb-1.5 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="Internship opportunity / Project collaboration"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-500 ${
                        errors.subject
                          ? 'border-rose-500 bg-rose-950/20 text-white'
                          : isDarkMode
                          ? 'bg-slate-950 border-slate-800 text-white'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                    {errors.subject && (
                      <div className="flex items-center gap-1 mt-1 text-[11px] text-rose-400">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-xs font-medium mb-1.5 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Hi Chukka Yaswanth, we reviewed your projects and would like to connect regarding an AI role..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-500 ${
                        errors.message
                          ? 'border-rose-500 bg-rose-950/20 text-white'
                          : isDarkMode
                          ? 'bg-slate-950 border-slate-800 text-white'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1 mt-1 text-[11px] text-rose-400">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-md transition-all active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
