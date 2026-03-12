import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;

