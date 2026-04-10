import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know',
  className,
  theme = 'light',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const isDark = theme === 'dark';

  return (
    <section className={cn('w-full px-4 py-24', isDark ? 'bg-brand-dark' : 'bg-slate-50', className)}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className={cn(
              'mb-4 inline-flex rounded-full p-3',
              isDark ? 'bg-brand-orange/10' : 'bg-brand-blue/10'
            )}
            aria-hidden="true"
          >
            <HelpCircle
              className={cn('h-8 w-8', isDark ? 'text-brand-orange' : 'text-brand-blue')}
              aria-hidden="true"
            />
          </motion.div>
          <h2
            className={cn(
              'mb-4 text-3xl font-heading font-bold sm:text-4xl md:text-5xl',
              isDark ? 'text-white' : 'text-brand-dark'
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              'text-sm sm:text-base md:text-lg',
              isDark ? 'text-white/50' : 'text-slate-500'
            )}
          >
            {subtitle}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const questionId = `${baseId}-question-${index}`;
            const answerId = `${baseId}-answer-${index}`;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div
                  className={cn(
                    'overflow-hidden rounded-xl border transition-colors',
                    isDark
                      ? 'border-white/10 bg-white/5'
                      : 'border-slate-200 bg-white',
                    isOpen && (isDark ? 'border-brand-orange/30' : 'border-brand-blue/30')
                  )}
                >
                  <motion.button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={cn(
                      'flex w-full items-center justify-between p-6 text-left',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2',
                      isDark ? 'focus-visible:ring-offset-brand-dark' : 'focus-visible:ring-offset-white'
                    )}
                    whileHover={{ x: 4 }}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    id={questionId}
                  >
                    <span
                      className={cn(
                        'text-lg font-semibold pr-4',
                        isDark ? 'text-white' : 'text-brand-dark'
                      )}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      <ChevronDown
                        className={cn(
                          'h-5 w-5',
                          isDark ? 'text-white/40' : 'text-slate-400'
                        )}
                      />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        role="region"
                        id={answerId}
                        aria-labelledby={questionId}
                      >
                        <div className="px-6 pb-6">
                          <p
                            className={cn(
                              'leading-relaxed',
                              isDark ? 'text-white/60' : 'text-slate-600'
                            )}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
