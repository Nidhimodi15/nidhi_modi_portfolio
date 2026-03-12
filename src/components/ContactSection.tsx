import { useState } from "react";
import { Mail, Github, Linkedin, Send, ExternalLink, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mvzwanzl", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error();
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/nidhi-modi-2896b9283", label: "Professional Profile" },
    { name: "GitHub", icon: Github, url: "https://github.com/Nidhimodi15", label: "Tech Portfolio" },
    { name: "Email", icon: Mail, url: "mailto:nidhimodi970@gmail.com", label: "Direct Inbox" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-[0.4em] uppercase font-black">Get in Touch</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2 text-foreground tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-medium">
            Open to internship opportunities and collaborations in AI/ML, Data Science, and Software Development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Info & Socials */}
          <div className="lg:col-span-2 space-y-6 flex flex-col justify-center">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                className="group relative glass p-6 rounded-[2rem] border border-white/5 hover:border-primary/40 transition-all duration-500 hover:-translate-x-2 flex items-center gap-6 hover:shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.15)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/10 transition-colors shadow-lg">
                  <link.icon size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{link.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{link.label}</p>
                </div>
                <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 h-full"
          >
            <div className="glass p-10 md:p-12 rounded-[3.5rem] border border-white/5 hover:border-primary/20 transition-all duration-700 h-full hover:shadow-[0_0_60px_-15px_rgba(var(--primary-rgb),0.2)] relative overflow-hidden">
               {/* Shine effect */}
               <div className="absolute inset-0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-8 h-full flex flex-col relative z-10">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono font-black text-primary uppercase tracking-widest pl-1">Your Email</label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      required
                      className="bg-white/5 border-white/10 rounded-2xl h-14 px-6 focus:ring-primary/20 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono font-black text-primary uppercase tracking-widest pl-1">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can I help you?"
                      rows={6}
                      required
                      className="bg-white/5 border-white/10 rounded-2xl p-6 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none"
                    />
                  </div>
                </div>
                
                <div className="mt-auto pt-6">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || isSuccess}
                    size="lg" 
                    className={`w-full h-16 rounded-[1.5rem] text-lg font-bold group shadow-xl transition-all duration-500 ${
                      isSuccess ? 'bg-green-500 hover:bg-green-600 shadow-green-500/20' : 'shadow-primary/10 hover:shadow-primary/20'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {isSubmitting ? (
                        <>Processing... <Loader2 size={20} className="animate-spin" /></>
                      ) : isSuccess ? (
                        <>Message Sent! <CheckCircle2 size={20} className="animate-bounce" /></>
                      ) : (
                        <>Send Message <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" /></>
                      )}
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
