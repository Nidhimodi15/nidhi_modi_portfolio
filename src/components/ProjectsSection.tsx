import { useState } from "react";
import { ExternalLink, Github, ChevronRight, Sparkles, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectTag {
  name: string;
  logo: string;
}

interface Project {
  title: string;
  subtitle: string;
  problem: string;
  details: string;
  tags: ProjectTag[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "FINTEL AI",
    subtitle: "Autonomous Invoice Intelligence",
    problem: "Manual invoice processing causes errors, delays, and critical fraud risks in enterprises.",
    details: "Leverages Gemini OCR for high-precision multi-language parsing and LangChain agents for autonomous decision-making and verification. Built on a MongoDB architecture for real-time document indexing and retrieval.",
    tags: [
      { name: "LangChain", logo: "/assets/langchain.png" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    link: "https://github.com/Nidhimodi15/fintelligem-ai.git",
  },
  {
    title: "Medical Assistant Bot",
    subtitle: "Telegram Healthcare Engine",
    problem: "Patients in remote areas lack access to immediate, preliminary medical guidance.",
    details: "An automated Telegram bot powered by n8n workflows. It features NLP-driven symptom analysis and speech recognition, integrating with medical databases to provide accurate, preliminary triage.",
    tags: [
      { name: "n8n", logo: "/assets/n8n.png" },
      { name: "Telegram", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
    link: "https://github.com/Nidhimodi15/n8n_medical_telegram_bot.git",
  },
  {
    title: "Fake News Detection",
    subtitle: "Hybrid BERT + GPT classifier",
    problem: "The rapid spread of misinformation requires highly robust, automated classification tools.",
    details: "A sophisticated detection system combining BERT's deep semantic embeddings with GPT's analytical reasoning. Features custom feature engineering and ensemble classification for maximum accuracy.",
    tags: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    ],
    link: "https://github.com/Nidhimodi15/fake_news_detection.git",
  },
  {
    title: "EduSphere",
    subtitle: "AI Learning Platform",
    problem: "Traditional educational tools lack the engagement and personalization of AI-driven systems.",
    details: "A full-stack LMS offering AI-generated assessments, real-time analytics, and adaptive learning paths. Engineered with a Node.js backend and a high-performance MongoDB data layer.",
    tags: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
    link: "https://github.com/Nidhimodi15/quiz-sphere-ai.git",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="glass group h-full transition-all duration-700 hover:border-primary/40 flex flex-col overflow-hidden relative border-white/5 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent hover:shadow-[0_0_80px_-20px_rgba(var(--primary-rgb),0.25)]">
        {/* Shine effect */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />

        <CardContent className="p-10 md:p-12 space-y-8 flex flex-col h-full relative z-10">
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors duration-500 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-primary font-bold tracking-[0.2em] uppercase">{project.subtitle}</p>
            </div>
            {project.link && (
              <motion.a 
                whileHover={{ scale: 1.1, rotate: 15 }}
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-white/10 group-hover:border-primary/20 shrink-0 shadow-2xl"
              >
                <Github size={24} />
              </motion.a>
            )}
          </div>

          <div className="space-y-6 flex-grow">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors duration-500">
               <AlertCircle size={20} className="text-primary shrink-0 mt-1" />
               <p className="text-base text-muted-foreground leading-relaxed font-medium">
                 <span className="text-foreground/80 font-bold block mb-1 text-xs uppercase tracking-widest">The Problem</span>
                 {project.problem}
               </p>
            </div>

            <div className="space-y-3 pl-1">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-primary/40 uppercase tracking-[0.3em] mb-2">
                The Solution
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                {project.details}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-start pt-8 border-t border-white/5 gap-4">
            {project.tags.map((tag) => (
              <div
                key={tag.name}
                className="w-14 h-14 rounded-2xl bg-white/5 p-3 flex items-center justify-center border border-white/5 hover:border-primary/50 transition-all hover:bg-white/10 shadow-lg group/tag relative"
                title={tag.name}
              >
                <img src={tag.logo} alt={tag.name} className="w-full h-full object-contain filter grayscale opacity-60 group-hover/tag:grayscale-0 group-hover/tag:opacity-100 group-hover/tag:scale-110 transition-all duration-500" />
                {/* Tooltip hint */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded opacity-0 group-hover/tag:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {tag.name}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
             <Sparkles className="text-primary" size={20} />
             <span className="text-sm font-mono text-primary tracking-[0.4em] uppercase font-black">Featured Innovations</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight">
            Proof of <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg font-medium">
            From autonomous agents to AI-driven classifiers, these projects represent my journey in solving real-world challenges through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
