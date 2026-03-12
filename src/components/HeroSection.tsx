import { ArrowDown, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { Link } from "react-router-dom";
import TechScroller from "./TechScroller";
import profilePhoto from "@/assets/profile-photo.png";
import { motion } from "framer-motion";

const roles = ["AI Developer", "ML Engineer", "Problem Solver", "Data Enthusiast"];

export default function HeroSection() {
  const typedText = useTypingAnimation(roles, 100, 60, 2000);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[60%] h-[40%] bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Subtle grid pattern for depth */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-150" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Photo Section - Placed first on mobile for immediate impact */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="lg:col-span-5 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative group">
              {/* Premium Glows - Adjusted for mobile */}
              <div className="absolute inset-[-15%] bg-primary/20 rounded-full blur-[30px] lg:blur-[80px] animate-pulse-glow" />
              <div className="absolute inset-[-10%] bg-accent/10 rounded-full blur-[25px] lg:blur-[60px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
              
              {/* Profile Image Container */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/40 transition-all duration-1000 shadow-2xl backdrop-blur-3xl">
                <img
                  src={profilePhoto}
                  alt="Nidhi Modi"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                
                {/* Overlay Filter */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Subtle rim light */}
                <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-primary/20 transition-all pointer-events-none" />
              </div>

              {/* Floating Sparkle Decoration */}
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 lg:-top-6 lg:-right-6 w-10 h-10 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl glass border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md"
              >
                <Sparkles className="text-primary w-5 h-5 lg:w-6 lg:h-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <div className="lg:col-span-7 lg:order-1 space-y-8 lg:space-y-12">
            
            {/* AI Developer Badge - Improved Mobile Scaling */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 lg:gap-3 px-4 py-2 lg:px-6 lg:py-3 text-[9px] sm:text-xs lg:text-sm font-mono font-black tracking-[0.2em] lg:tracking-[0.4em] text-primary bg-primary/10 border border-primary/20 rounded-full uppercase shadow-lg shadow-primary/5 max-w-full"
            >
              <Sparkles size={14} className="animate-pulse shrink-0" />
              <span className="truncate">AI & Machine Learning Developer</span>
            </motion.div>

            {/* Main Heading Text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-4 lg:space-y-6"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight text-foreground tracking-tighter">
                Hi, I'm <span className="text-gradient">Nidhi</span>
              </h1>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground/70 tracking-tight leading-tight min-h-[4rem] sm:min-h-0">
                I'm a dedicated <br className="hidden sm:block" />
                <span className="text-primary">
                  {typedText}
                  <span className="animate-blink text-primary">|</span>
                </span>
              </div>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium"
            >
              Architecting intelligent systems at CHARUSAT — specializing in autonomous agents, predictive analytics, and conversational AI.
            </motion.p>

            {/* Tech Scroller & CTA Section */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-10 pt-4">
              
              {/* Integrated Tech Scroller - Full width on Mobile */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.5 }}
                 className="space-y-4 w-full lg:w-80"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono font-black text-primary/40 uppercase tracking-[0.4em] pl-1">
                  Technical Stack
                </div>
                <div className="p-1 glass rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden bg-white/5 backdrop-blur-sm group hover:border-primary/20 transition-all duration-500">
                  <TechScroller />
                </div>
              </motion.div>

              {/* Functional CTA Buttons - Improved Layout for Mobile */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-5 w-full sm:w-auto"
              >
                <Button asChild className="group h-14 lg:h-16 px-8 lg:px-10 rounded-2xl text-base lg:text-lg font-bold shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 active:scale-95">
                  <Link to="/projects">
                    Explore Work
                    <ArrowDown size={20} className="ml-2 lg:ml-3 group-hover:translate-y-2 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-14 lg:h-16 px-8 lg:px-10 rounded-2xl border-white/10 hover:bg-white/5 text-base lg:text-lg font-bold text-muted-foreground hover:text-foreground transition-all duration-500 active:scale-95">
                  <a href="https://www.linkedin.com/in/nidhi-modi-2896b9283" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Linkedin size={20} className="mr-2 lg:mr-3" />
                    Connect
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
