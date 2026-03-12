import { Award, Trophy, Star, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const certs = [
  { name: "Data Structures and Algorithms with Java (Elite)", provider: "NPTEL" },
  { name: "Machine Learning with Python", provider: "Coursera" },
  { name: "Core Java Masterclass", provider: "Udemy" },
  { name: "Introduction to Web Designing", provider: "Great Learning Academy" },
  { name: "Build Intelligent Agents Using DeepSeek & n8n", provider: "Coursera" },
];

const activities = [
  { title: "First Runner Up", event: "AIdeaForge: Build the Future (2026)", highlight: true },
  { title: "Participant", event: "Amazon ML Challenge", highlight: false },
  { title: "Finalist", event: "NEXATHON 24-hour Hackathon, GCET, Anand", highlight: false },
  { title: "Participant", event: "Smart India Hackathon", highlight: false },
];

export default function CertificationsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_70%)]" />
      
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
             <span className="text-sm font-mono text-primary tracking-[0.4em] uppercase font-black">Validations</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight">
            Courses & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Certifications */}
          <div className="space-y-10">
            <div className="flex items-center gap-6 mb-8 pl-4">
               <div className="w-16 h-16 rounded-[1.25rem] bg-white/5 flex items-center justify-center border border-white/10 shadow-lg">
                 <Award size={32} className="text-primary" />
               </div>
               <div>
                 <h3 className="text-3xl font-black text-foreground uppercase tracking-tight">Certifications</h3>
                 <p className="text-xs font-mono text-primary/60 uppercase tracking-widest mt-1">Validated Skillsets</p>
               </div>
            </div>

            <div className="grid gap-6">
              {certs.map((c, i) => {
                const { ref, isVisible } = useScrollAnimation();
                return (
                  <motion.div
                    key={i}
                    ref={ref}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                    className="group"
                  >
                    <div className="relative glass p-6 rounded-[2rem] border border-white/5 group-hover:border-primary/40 transition-all duration-500 bg-white/[0.02] hover:shadow-[0_0_40px_-15px_rgba(var(--primary-rgb),0.15)] flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 shadow-xl">
                        <Star size={24} className="text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-1">{c.name}</h4>
                        <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mt-1">{c.provider}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-10">
            <div className="flex items-center gap-6 mb-8 pl-4">
               <div className="w-16 h-16 rounded-[1.25rem] bg-white/5 flex items-center justify-center border border-white/10 shadow-lg">
                 <Trophy size={32} className="text-primary" />
               </div>
               <div>
                 <h3 className="text-3xl font-black text-foreground uppercase tracking-tight">Achievements</h3>
                 <p className="text-xs font-mono text-primary/60 uppercase tracking-widest mt-1">Honors & Competitions</p>
               </div>
            </div>

            <div className="grid gap-6">
              {activities.map((act, i) => {
                const { ref, isVisible } = useScrollAnimation();
                return (
                  <motion.div
                    key={i}
                    ref={ref}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                    className="group"
                  >
                    <div className="relative glass p-6 rounded-[2rem] border border-white/5 group-hover:border-primary/40 transition-all duration-500 bg-white/[0.02] hover:shadow-[0_0_40px_-15px_rgba(var(--primary-rgb),0.15)] flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 shadow-xl">
                        <Trophy size={24} className="text-primary group-hover:rotate-12 transition-transform" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                           <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-1">{act.title}</h4>
                           {act.highlight && <Sparkles size={14} className="text-primary animate-pulse" />}
                        </div>
                        <p className="text-sm font-medium text-muted-foreground mt-1">{act.event}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
