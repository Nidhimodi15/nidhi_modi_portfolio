import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const education = [
  {
    institution: "Charotar University of Science and Technology",
    location: "Anand, Gujarat",
    degree: "Bachelor of Technology (B.Tech)",
    period: "2023 — 2027",
    details: "CGPA: 9.12",
  },
  {
    institution: "Narayan Vidhyalay",
    location: "Bharuch, Gujarat",
    degree: "HSC (Class XII)",
    period: "2021 — 2023",
    details: "Grade: B1",
  },
  {
    institution: "Narayan Vidhyalay",
    location: "Bharuch, Gujarat",
    degree: "SSC (Class X)",
    period: "2020 — 2021",
    details: "Grade: A1",
  },
];

export default function EducationSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <div id="education" className="relative group/edu h-full" ref={titleRef}>
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover/edu:bg-primary/10 transition-colors duration-1000" />
      
      <div className="w-full">
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={titleVisible ? { opacity: 1, x: 0 } : {}}
           transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] }}
           className="mb-12 relative"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-[1px] bg-primary/50" />
            <span className="text-xs font-mono text-primary tracking-[0.4em] uppercase font-black">Academic</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            My <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, x: 40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                className="group/item relative"
              >
                <div className="relative glass p-8 rounded-[2.5rem] border border-white/5 group-hover/item:border-primary/40 transition-all duration-500 bg-gradient-to-br from-white/[0.02] to-transparent hover:shadow-[0_0_50px_-15px_rgba(var(--primary-rgb),0.15)] overflow-hidden">
                  {/* Decorative number */}
                  <span className="absolute -top-4 -right-2 text-8xl font-black text-white/[0.02] group-hover/item:text-primary/[0.03] transition-colors pointer-events-none">
                    0{i + 1}
                  </span>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/item:bg-primary/10 group-hover/item:border-primary/20 transition-all duration-500 shadow-xl">
                      <GraduationCap size={28} className="text-primary group-hover/item:scale-110 transition-transform" />
                    </div>
                    
                    <div className="flex-grow min-w-0 space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-xl font-bold text-foreground leading-tight group-hover/item:text-primary transition-colors duration-500">
                            {edu.institution}
                          </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                          <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                            <Calendar size={12} className="text-primary/60" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                            <MapPin size={12} className="text-primary/60" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-base text-muted-foreground/80 font-medium">
                        {edu.degree}
                      </p>
                      
                      <div className="pt-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5 group-hover/item:shadow-primary/10 transition-all">
                          <Award size={14} className="text-primary" />
                          <span className="text-xs font-black text-primary uppercase tracking-widest">{edu.details}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
