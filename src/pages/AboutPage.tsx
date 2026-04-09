import React from 'react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Shield, Target, Heart, Award, Users, Globe } from 'lucide-react';

const values = [
  { title: "Innovation", description: "Pushing boundaries, always.", icon: Target },
  { title: "Service", description: "How we show up for every client.", icon: Heart },
  { title: "Timeliness", description: "Faster than anyone else.", icon: Award },
  { title: "Excellence", description: "No exceptions, ever.", icon: Shield },
  { title: "Integrity", description: "We keep our word.", icon: Users },
  { title: "Impact", description: "Transformation, not just technology.", icon: Globe }
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-slate-50 py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="right">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-dark mb-8">
              Our <span className="text-brand-blue">Story</span>
            </h1>
            <p className="text-2xl text-slate-500 max-w-3xl leading-relaxed">
              Founded in 2009, Nine One Two (912) has grown from a local IT infrastructure provider 
              to a pan-African digital transformation powerhouse.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team Collaboration" 
                  className="relative z-10"
                />
                <div className="absolute -bottom-10 -right-10 w-full h-full border-4 border-brand-orange -z-10" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-8">Built for Africa, by Africans.</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  We understand the unique challenges and opportunities of doing business on the continent. 
                  Our journey started with a simple vision: to provide world-class technology solutions 
                  with a local heartbeat.
                </p>
                <p>
                  Today, we operate in over 10 countries, including Kenya, Angola, DRC, Senegal, Mali, 
                  Burkina Faso, Tanzania, Burundi, and Rwanda. We've built a reputation for being 
                  the "fastest response & delivery" partner on the continent.
                </p>
                <p>
                  Our multi-disciplinary team combines deep technical expertise in cybersecurity, 
                  cloud infrastructure, and physical security systems to deliver the "One Contract" 
                  experience that our clients value most.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Core <span className="text-brand-orange">Values</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we deploy.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-none bg-brand-blue flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-2">{value.title}</h4>
                    <p className="text-white/60 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pan-African Footprint */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-8">Pan-African <span className="text-brand-blue">Footprint</span></h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-16">
              With headquarters in Nairobi and a presence across 10+ countries, 
              we are strategically positioned to support your growth across the continent.
            </p>
            <div className="relative inline-block">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Africa Map Concept" 
                className="max-w-4xl w-full opacity-20 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                  {["Kenya", "Angola", "DRC", "Senegal", "Mali", "Tanzania", "Rwanda", "Burundi"].map((country) => (
                    <div key={country} className="text-2xl font-heading font-bold text-brand-blue">{country}</div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
