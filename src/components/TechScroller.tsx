import { motion } from "framer-motion";

const allSkills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "n8n", logo: "/assets/n8n.png" },
  { name: "LangChain", logo: "/assets/langchain.png" },
  { name: "CrewAI", logo: "/assets/crewai.png" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];

export default function TechScroller() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex gap-10 items-center whitespace-nowrap py-6"
        >
          {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center p-3.5 glass rounded-2xl border border-white/10 hover:border-primary/50 transition-all group w-16 h-16 shrink-0 bg-white/5 backdrop-blur-md shadow-xl"
            >
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="w-8 h-8 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all group-hover:scale-110 duration-500" 
                title={skill.name} 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
