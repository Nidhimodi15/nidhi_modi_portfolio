import { User, MapPin, GraduationCap, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const details = [
    { label: "Location", val: "Bharuch, Gujarat", icon: MapPin },
    { label: "College", val: "CHARUSAT", icon: GraduationCap },
    { label: "Specialization", val: "AI & ML", icon: Target }
  ];

  return (
    <div id="about" className="relative group" ref={ref}>
      {/* Premium Ambient Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-1000" />
      
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] }}
          className="mb-12 relative"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-[1px] bg-primary/50" />
            <span className="text-xs font-mono text-primary tracking-[0.4em] uppercase font-black">Identity</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative glass p-10 md:p-14 rounded-[3.5rem] border border-white/5 hover:border-primary/40 transition-all duration-700 bg-gradient-to-br from-white/[0.03] to-transparent hover:shadow-[0_0_80px_-20px_rgba(var(--primary-rgb),0.2)]"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />

          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -3 }}
                className="w-24 h-24 rounded-[2rem] bg-white/5 flex items-center justify-center shrink-0 border border-white/10 shadow-2xl group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500"
              >
                <User size={44} className="text-primary" />
              </motion.div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">Visionary Developer</h3>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-xl">
                  A Machine Learning enthusiast dedicated to crafting intelligent, data-driven solutions for complex problems.
                </p>
              </div>
            </div>
            
            <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
            
            <p className="text-lg text-muted-foreground/80 leading-relaxed font-medium">
              With deep-rooted expertise in supervised learning, NLP, and anomaly detection, I transform raw data into impactful insights. I specialize in building robust ML models using Python and cutting-edge AI frameworks, consistently pushing the boundaries of what's possible in automation and predictive analytics.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {details.map((item, i) => (
                <motion.div 
                  key={item.label} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex flex-col p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/20 transition-all group/item"
                >
                  <item.icon size={20} className="text-primary/60 mb-4 group-hover/item:text-primary transition-colors" />
                  <p className="text-[10px] font-mono text-primary/40 uppercase font-bold tracking-widest mb-1 group-hover/item:text-primary/60 transition-colors">{item.label}</p>
                  <p className="text-base font-bold text-foreground/90">{item.val}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
