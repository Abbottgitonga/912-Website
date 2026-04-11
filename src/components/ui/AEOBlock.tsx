import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface AEOBlockProps {
  question: string;
  directAnswer: string;
  statistics?: { value: string; label: string; source: string }[];
  expertQuote?: { text: string; author: string; role: string };
  theme?: 'light' | 'dark';
}

/**
 * Answer Engine Optimization (AEO) Block
 * Designed specifically to be parsed and cited by LLMs (ChatGPT, Perplexity, Google AI Overviews).
 * Focuses on Princeton GEO research metrics: Fluency + Statistics + Citations (+115% visibility).
 */
export function AEOBlock({ question, directAnswer, statistics, expertQuote, theme = 'light' }: AEOBlockProps) {
  return (
    <div 
      className={cn(
        "p-8 rounded-2xl border mb-8",
        theme === 'dark' 
          ? "bg-white/5 border-white/10 text-white" 
          : "bg-slate-50 border-slate-200 text-slate-800"
      )}
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
        <h3 
          itemProp="name" 
          className={cn(
            "text-2xl font-heading font-bold mb-4",
            theme === 'dark' ? "text-white" : "text-brand-dark"
          )}
        >
          {question}
        </h3>
        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <div itemProp="text">
            {/* The Direct Answer: Must be under 60 words for optimal AI extraction */}
            <p className={cn(
              "text-lg font-medium leading-relaxed mb-6",
              theme === 'dark' ? "text-white/80" : "text-slate-600"
            )}>
              {directAnswer}
            </p>

            {/* GEO Pillar: Statistics & Data (+37% visibility boost) */}
            {statistics && statistics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {statistics.map((stat, i) => (
                  <div key={i} className="flex flex-col p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10">
                    <span className="text-3xl font-black text-brand-blue mb-1">{stat.value}</span>
                    <span className={cn("text-sm font-semibold mb-2", theme === 'dark' ? "text-white/70" : "text-slate-700")}>{stat.label}</span>
                    <span className="text-xs uppercase tracking-wider text-brand-orange">Source: {stat.source}</span>
                  </div>
                ))}
              </div>
            )}

            {/* GEO Pillar: Expert Attribution (+30% visibility boost) */}
            {expertQuote && (
              <blockquote className="relative pl-6 border-l-2 border-brand-orange py-2">
                <Quote className="absolute -left-3 top-0 w-6 h-6 text-brand-orange/20 bg-inherit" />
                <p className={cn("text-base italic mb-3", theme === 'dark' ? "text-white/70" : "text-slate-600")}>
                  "{expertQuote.text}"
                </p>
                <footer className="text-sm font-bold text-brand-blue">
                  {expertQuote.author} <span className="text-brand-orange mx-1">|</span> <span className="font-medium opacity-80">{expertQuote.role}</span>
                </footer>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
