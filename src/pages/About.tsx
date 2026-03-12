import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import TechScroller from "@/components/TechScroller";

const About = () => {
  return (
    <PageLayout>
      <div className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start pt-12">
            <AboutSection />
            <EducationSection />
          </div>
        </div>
        
        <div className="py-24 border-t border-white/5">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase font-bold">The Stack</span>
            <h2 className="text-2xl font-bold mt-2">Technical <span className="text-gradient">Arsenal</span></h2>
          </div>
          <TechScroller />
        </div>
      </div>
    </PageLayout>
  );
};

export default About;


