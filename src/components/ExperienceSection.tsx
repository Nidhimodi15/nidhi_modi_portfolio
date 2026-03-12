import { Briefcase, Terminal, Sparkles, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Codepoets Pvt Ltd",
    period: "May 2025 — July 2025",
    location: "Remote",
    role: "AI Intern (Stipend-based)",
    description: [
      "Engineered automated data pipelines using n8n, achieving a 70% reduction in manual data processing time.",
      "Architected conversational agents with LangChain and CrewAI, implementing intelligent zero-shot reasoning for complex workflow automation.",
      "Integrated multi-modal AI subsystems, including real-time speech-to-text and text-to-speech for interactive voice interfaces.",
    ],
    tools: ["Python", "n8n", "Flowwise", "LangChain", "CrewAI"],
  },
];

export default function ExperienceSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
             <Sparkles className="text-primary" size={20} />
             <span className="text-sm font-mono text-primary tracking-[0.4em] uppercase font-black">Professional Path</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="group relative h-full"
              >
                <div className="glass p-10 md:p-14 rounded-[3.5rem] border border-white/5 hover:border-primary/40 transition-all duration-700 bg-gradient-to-br from-white/[0.03] to-transparent hover:shadow-[0_0_80px_-20px_rgba(var(--primary-rgb),0.25)] flex flex-col md:flex-row gap-12 h-full">
                  
                  {/* Left Column - Main Info */}
                  <div className="md:w-1/3 space-y-8">
                    <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                      <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                        <Briefcase size={40} className="text-primary" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors duration-500 leading-tight">
                          {exp.company}
                        </h3>
                        <p className="text-lg font-mono text-primary font-bold tracking-widest uppercase">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 text-xs font-mono font-bold text-muted-foreground uppercase tracking-[0.15em]">
                      <span className="flex items-center justify-center md:justify-start gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5 shadow-lg">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </span>
                      <span className="flex items-center justify-center md:justify-start gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5 shadow-lg">
                        <MapPin size={14} className="text-primary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Right Column - Description & Tools */}
                  <div className="md:w-2/3 flex flex-col justify-between space-y-10">
                    <ul className="space-y-6">
                      {exp.description.map((point, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + (idx * 0.1) }}
                          className="flex gap-5 text-muted-foreground text-lg leading-relaxed font-medium"
                        >
                          <CheckCircle2 size={24} className="text-primary/40 group-hover:text-primary transition-colors shrink-0 mt-1" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-primary/40 uppercase tracking-[0.3em] pl-1">
                        Deployment Stack
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {exp.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-5 py-2.5 text-sm font-bold bg-white/5 text-foreground rounded-2xl border border-white/5 group-hover:border-primary/30 group-hover:bg-white/10 transition-all duration-500 hover:scale-110 shadow-lg"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
