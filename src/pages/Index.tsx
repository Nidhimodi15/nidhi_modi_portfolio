import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRight, Sparkles, Code2, Briefcase, User, Award, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const landingCards = [
    {
      title: "About & Education",
      description: "My academic journey at CHARUSAT and passion for engineering intelligent systems.",
      icon: User,
      link: "/about",
      accent: "rgba(59, 130, 246, 0.5)", // Blue
    },
    {
      title: "Projects",
      description: "Explore a portfolio of autonomous solvers, AI agents, and full-stack innovations.",
      icon: Code2,
      link: "/projects",
      accent: "rgba(168, 85, 247, 0.5)", // Purple
    },
    {
      title: "Experience",
      description: "A look at my professional journey and the impact created during internships.",
      icon: Briefcase,
      link: "/experience",
      accent: "rgba(249, 115, 22, 0.5)", // Orange
    },
    {
      title: "Technical Skills",
      description: "A deep dive into the technical arsenal and tools I master every day.",
      icon: Sparkles,
      link: "/skills",
      accent: "rgba(34, 197, 94, 0.5)", // Green
    },
    {
      title: "Certifications",
      description: "Validated expertise through global certifications and competitive honors.",
      icon: Award,
      link: "/certifications",
      accent: "rgba(6, 182, 212, 0.5)", // Cyan
    },
    {
      title: "Contact",
      description: "Let's discuss collaborations, breakthrough ideas, or internship opportunities.",
      icon: Mail,
      link: "/contact",
      accent: "rgba(239, 68, 68, 0.5)", // Red
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-foreground font-sans">
      <Navbar />
      
      <HeroSection />

      {/* Grid Navigation */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Ambient Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
               <Sparkles className="text-primary animate-pulse" size={20} />
               <span className="text-sm font-mono text-primary tracking-[0.4em] uppercase font-black">Navigation</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-foreground tracking-tighter">
              Explore My <span className="text-gradient">World</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {landingCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
              >
                <Link to={card.link} className="block group h-full">
                  <div className="relative h-full glass p-10 md:p-12 rounded-[3rem] border border-white/5 group-hover:border-primary/40 transition-all duration-700 bg-gradient-to-br from-white/[0.03] to-transparent hover:shadow-[0_0_100px_-20px_rgba(var(--primary-rgb),0.15)] overflow-hidden flex flex-col">
                    {/* Shine effect */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />
                    
                    {/* Accent Light */}
                    <div 
                      className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] transition-all duration-700 opacity-20 group-hover:opacity-40" 
                      style={{ backgroundColor: card.accent }}
                    />

                    <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:bg-primary/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative">
                       <card.icon size={36} className="text-primary relative z-10" />
                       <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors duration-500 tracking-tight leading-none">
                      {card.title}
                    </h3>
                    
                    <p className="text-base text-muted-foreground leading-relaxed mb-10 font-medium flex-grow">
                      {card.description}
                    </p>
                    
                    <div className="flex items-center text-xs font-mono font-black text-primary gap-3 tracking-[0.3em] group-hover:translate-x-4 transition-transform duration-500 uppercase">
                      Discover <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.02] border-y border-white/5" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <h2 className="text-4xl sm:text-7xl font-black text-foreground tracking-tighter leading-none">
              Ready to create <br /> the <span className="text-gradient">Future?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              I'm always open to discussing technical challenges, innovative projects, or potential internship opportunities.
            </p>
            <div className="flex justify-center pt-4">
              <Link to="/contact">
                <button className="group relative px-12 py-6 bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm rounded-[2rem] shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-500 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Start a Conversation <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
