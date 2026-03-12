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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#020617] pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.05),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Photo Section - Shown first on mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:col-span-5 order-first lg:order-last flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effects */}
              <div className="absolute inset-[-10%] bg-primary/20 rounded-full blur-[40px] lg:blur-[80px] animate-pulse" />
              
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Nidhi Modi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent" />
              </div>

              {/* Decorative Icon */}
              <div className="absolute -top-4 -right-2 lg:-top-6 lg:-right-6 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl glass border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md">
                 <Sparkles className="text-primary w-6 h-6 lg:w-8 lg:h-8" />
              </div>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <div className="w-full lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 text-[10px] sm:text-xs font-mono font-black tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full uppercase"
            >
              <Sparkles size={14} className="animate-pulse" />
              AI & Machine Learning Developer
            </motion.div>

            {/* Main Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white">
                Hi, I'm <span className="text-gradient">Nidhi</span>
              </h1>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/70 min-h-[3rem]">
                I'm a dedicated <br className="hidden sm:block" />
                <span className="text-primary">{typedText}|</span>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-xl text-muted-foreground max-w-lg font-medium"
            >
              Architecting intelligent systems at CHARUSAT — specializing in autonomous agents and AI-driven solutions.
            </motion.p>

            {/* Tech Scroller & Buttons */}
            <div className="w-full space-y-10">
               {/* Tech Scroller Container */}
               <div className="w-full max-w-md mx-auto lg:mx-0">
                  <div className="text-[10px] font-mono font-black text-primary/40 uppercase tracking-[0.4em] mb-3 pl-1">
                    Technical Stack
                  </div>
                  <div className="glass rounded-2xl border border-white/5 bg-white/5 p-1 overflow-hidden">
                    <TechScroller />
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
                 <Button asChild size="lg" className="h-14 lg:h-16 px-8 rounded-2xl font-bold text-base lg:text-lg shadow-xl shadow-primary/20">
                   <Link to="/projects">
                     Explore Work <ArrowDown size={20} className="ml-2" />
                   </Link>
                 </Button>
                 <Button variant="outline" asChild size="lg" className="h-14 lg:h-16 px-8 rounded-2xl font-bold text-base lg:text-lg border-white/10 hover:bg-white/5">
                   <a href="https://www.linkedin.com/in/nidhi-modi-2896b9283" target="_blank" rel="noopener noreferrer" className="flex items-center">
                     <Linkedin size={20} className="mr-2" /> Connect
                   </a>
                 </Button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
