import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Lock, FileText } from 'lucide-react';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';

interface LeadMagnetFormProps {
  magnetTitle: string;
  magnetDescription: string;
  buttonCopy?: string;
  onSuccess?: () => void;
  theme?: 'light' | 'dark';
}

/**
 * 912 Optimized Lead Magnet Capture Form
 * Built utilizing `form-cro` skills mapping: 
 * - Progressive commitment (1 column)
 * - Trust elements (Lock icon, privacy statement)
 * - No aggressive validation while typing
 */
export function LeadMagnetForm({ 
  magnetTitle, 
  magnetDescription, 
  buttonCopy = "Download Resource",
  onSuccess,
  theme = 'light' 
}: LeadMagnetFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Inline rudimentary validation
    if (!email.includes('@')) {
      setError("Please enter a valid work email address.");
      return;
    }

    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className={cn(
        "p-8 rounded-2xl text-center shadow-lg border",
        theme === 'dark' ? "bg-brand-dark border-white/10" : "bg-white border-brand-blue/10"
      )}>
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className={cn("text-2xl font-bold font-heading mb-2", theme === 'dark' ? "text-white" : "text-brand-dark")}>
          Check your inbox!
        </h3>
        <p className={cn(theme === 'dark' ? "text-white/70" : "text-slate-600")}>
          Your '{magnetTitle}' is on its way.
        </p>
      </div>
    );
  }

  return (
    <div className={cn(
      "p-8 rounded-2xl shadow-xl border relative overflow-hidden",
      theme === 'dark' ? "bg-brand-dark border-white/10" : "bg-white border-brand-blue/10"
    )}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="mb-8">
        <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
          <FileText className="w-6 h-6 text-brand-blue" />
        </div>
        <h3 className={cn("text-2xl font-bold font-heading mb-2", theme === 'dark' ? "text-white" : "text-brand-dark")}>
          {magnetTitle}
        </h3>
        <p className={cn("text-sm", theme === 'dark' ? "text-white/70" : "text-slate-600")}>
          {magnetDescription}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* progressive rendering: Single column ensures mobile-friendliness */}
        <div className="space-y-1">
          <label htmlFor="name" className={cn("text-xs font-bold uppercase tracking-wider", theme === 'dark' ? "text-white/80" : "text-slate-700")}>
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={cn(
              "w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all",
              theme === 'dark' 
                ? "bg-white/5 border-white/20 text-white placeholder:text-white/30" 
                : "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400"
            )}
            placeholder="Jane Doe"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className={cn("text-xs font-bold uppercase tracking-wider", theme === 'dark' ? "text-white/80" : "text-slate-700")}>
            Work Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all",
              theme === 'dark' 
                ? "bg-white/5 border-white/20 text-white placeholder:text-white/30" 
                : "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400"
            )}
            placeholder="jane@company.com"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm font-medium">{error}</p>
        )}

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {buttonCopy}
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Form CRO: Trust elements */}
        <p className={cn("text-xs text-center flex items-center justify-center gap-1 mt-4", theme === 'dark' ? "text-white/50" : "text-slate-500")}>
          <Lock className="w-3 h-3" />
          We respect your privacy. Zero spam.
        </p>
      </form>
    </div>
  );
}
