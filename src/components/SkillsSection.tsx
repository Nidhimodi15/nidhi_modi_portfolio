import { motion } from "framer-motion";
import { Brain, BarChart3, Code2, Database, Globe, Cpu, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    title: "AI & Automation",
    skills: [
      { name: "n8n", logo: "/assets/n8n.png" },
      { name: "LangChain", logo: "/assets/langchain.png" },
      { name: "CrewAI", logo: "/assets/crewai.png" },
    ],
    icon: Cpu,
    color: "text-orange-400",
    glow: "shadow-orange-500/20",
  },
  {
    title: "Data Science & ML",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    ],
    icon: Brain,
    color: "text-purple-400",
    glow: "shadow-purple-500/20",
  },
  {
    title: "Languages & Analytics",
    skills: [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    icon: Code2,
    color: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
    icon: Globe,
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
];

export default function SkillsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
             <Sparkles className="text-primary animate-pulse" size={20} />
             <span className="text-sm font-mono text-primary tracking-[0.4em] uppercase font-bold">The Technical Suite</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight">
            Elevating Ideas with <span className="text-gradient">Code</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="group"
    >
      <div className="relative h-full glass rounded-[3rem] p-8 md:p-12 border border-white/5 group-hover:border-primary/40 transition-all duration-700 bg-gradient-to-br from-white/[0.03] to-transparent hover:shadow-[0_0_80px_-20px_rgba(var(--primary-rgb),0.25)] overflow-hidden">
        {/* Animated Accent */}
        <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-700 delay-100" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
              <cat.icon size={40} className={`${cat.color} group-hover:scale-110 transition-transform`} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-500">
                {cat.title}
              </h3>
              <p className="text-xs font-mono text-primary/60 uppercase tracking-widest mt-1">Professional Capability</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cat.skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -10 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + (idx * 0.05) }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-primary/30 hover:bg-white/[0.08] hover:translate-x-2 transition-all group/skill cursor-default"
            >
              <div className="w-10 h-10 flex items-center justify-center p-2 rounded-xl bg-white/5 shrink-0 group-hover/skill:bg-white/10 transition-colors">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="w-full h-full object-contain filter-none group-hover/skill:scale-110 transition-all duration-500" 
                />
              </div>
              <span className="text-sm font-bold text-muted-foreground group-hover/skill:text-foreground transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
