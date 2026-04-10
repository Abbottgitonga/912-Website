import React from 'react';
import { motion } from 'motion/react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

const leadership: TeamMember[] = [
  {
    name: 'Njuguna Waitara',
    role: 'Founder & CEO',
    initials: 'NW',
    bio: 'Founded 912 in 2013 after watching businesses across Nairobi get let down by the multi-vendor IT model. Leads strategy, client relationships, and the architectural vision behind the One Contract Model.',
  },
  {
    name: 'Team Member',
    role: 'Head of Cloud & Core IT',
    initials: 'TM',
    bio: 'Leads cloud migration, cybersecurity, and infrastructure operations across all 10 countries. Responsible for the 99.9% uptime standard.',
  },
  {
    name: 'Team Member',
    role: 'Head of Physical Security',
    initials: 'TM',
    bio: 'Oversees CCTV, access control, and perimeter security deployments. Designed the pan-African surveillance architecture used across our manufacturing clients.',
  },
  {
    name: 'Team Member',
    role: 'Head of Software Development',
    initials: 'TM',
    bio: 'Leads the applications and custom software practice. Built the automation platform behind the FMCG case study that increased profitability by 14%.',
  },
  {
    name: 'Team Member',
    role: 'Head of Data & Intelligence',
    initials: 'TM',
    bio: 'Runs the Power BI and analytics practice. Responsible for the dashboards and data pipelines that give our clients real-time visibility.',
  },
  {
    name: 'Team Member',
    role: 'Operations Director',
    initials: 'TM',
    bio: 'Manages cross-country logistics, documentation standards, and the response time guarantees that define the 912 service level.',
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number; key?: React.Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-white border border-slate-200 hover:border-brand-blue transition-all duration-500"
    >
      {/* Avatar placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-brand-dark/10 flex items-center justify-center">
            <span className="text-3xl font-heading font-bold text-brand-dark/30">
              {member.initials}
            </span>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
          {!member.linkedin && !member.email && (
            <span className="text-white/50 text-xs uppercase tracking-widest font-bold">
              Details coming soon
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-heading font-bold text-brand-dark mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-brand-blue font-medium mb-3">{member.role}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="right">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">
              The people behind the contract
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              One team.{' '}
              <span className="text-brand-orange italic">One standard.</span>
              <br />
              Across 10 countries.
            </h1>
            <p className="text-xl text-white/50 max-w-3xl leading-relaxed">
              The reason the One Contract Model works isn't the contract — it's the
              team. Every person at 912 operates under the same documentation
              standards, the same response time expectations, and the same
              accountability framework. No subcontractors. No outsourced help desks.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mb-16">
            <span className="text-brand-blue uppercase tracking-[0.3em] text-xs font-black mb-4 block">
              Leadership
            </span>
            <h2 className="text-4xl font-heading font-bold text-brand-dark">
              The team that owns the outcome.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture strip */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-6 block">
              How we work
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-8">
              Built for speed. Held to a standard.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: 'Documentation-first',
                  desc: 'Every system, every credential, every process — documented in a client-accessible vault before we consider the job done.',
                },
                {
                  title: 'Same-day response',
                  desc: 'We are consistently the fastest-responding IT partner on the continent. Not because we rush — because we prepare.',
                },
                {
                  title: 'No subcontractors',
                  desc: 'The person who scopes the project is the person who delivers it. One team, end to end.',
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="p-8 bg-white border border-slate-200 h-full">
                    <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <ScrollReveal>
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">
              Careers
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Build infrastructure that{' '}
              <span className="text-brand-orange italic">matters.</span>
            </h2>
            <p className="text-lg text-white/50 mb-10">
              We're always looking for engineers, analysts, and operators who want
              to build technology that works across borders. If you think
              documentation is as important as deployment, you'll fit in.
            </p>
            <a
              href="mailto:careers@nineonetwo.co.ke"
              className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-lg px-10 py-5 transition-colors"
            >
              Get in Touch
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
