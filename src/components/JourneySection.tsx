import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const milestones = [
  { year: "2023", title: "Started B.Tech at CHARUSAT", desc: "Began Computer Science journey with CGPA 9.12. Foundation in programming and algorithms." },
  { year: "2024", title: "Learned Python, ML & Built Projects", desc: "Developed EduSphere and Fake News Detection system. Earned certifications from NPTEL, Coursera." },
  { year: "2025", title: "AI Intern at Codepoets", desc: "Built FINTEL AI and Medical Assistant Bot. Mastered LangChain, CrewAI, and n8n workflows." },
  { year: "2026", title: "1st Runner Up at AIdeaForge", desc: "Recognized at hackathon for innovative AI solutions. Continued ML research and development." },
];

function MilestoneItem({ item, index }: { item: typeof milestones[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex items-center mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Content */}
      <div
        className={`w-full md:w-5/12 transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : isLeft
            ? "opacity-0 -translate-x-10"
            : "opacity-0 translate-x-10"
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="glass p-6 rounded-xl hover-glow transition-all duration-300 hover:border-primary/30">
          <span className="text-sm font-mono text-primary font-bold">{item.year}</span>
          <h3 className="text-lg font-bold text-foreground mt-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className="hidden md:flex w-2/12 justify-center">
        <div
          className={`w-4 h-4 rounded-full bg-primary border-4 border-background transition-all duration-500 ${
            isVisible ? "scale-100" : "scale-0"
          }`}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        />
      </div>

      {/* Spacer */}
      <div className="hidden md:block w-5/12" />
    </div>
  );
}

export default function JourneySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-xs font-mono text-primary tracking-[0.2em] uppercase">Timeline</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">
            Learning <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {milestones.map((m, i) => (
            <MilestoneItem key={m.year} item={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
