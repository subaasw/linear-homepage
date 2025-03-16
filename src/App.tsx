import Header from "@/components/header/Header";
import HeroSection from "@/components/landing/Hero";
import CustomersSection from "@/components/landing/Customers";
import WhatMakesLinerDiff from "@/components/landing/WhatMakesLinerDiff";
import PlanningSection from "@/components/landing/Planning";
import TrackingSection from "@/components/landing/Tracking";
import WorkflowsSection from "@/components/landing/Workflows";
import UnderTheHoodSection from "@/components/landing/UnderTheHood";
import PreFooterSection from "@/components/landing/PreFooter";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CustomersSection />
      <WhatMakesLinerDiff />
      <PlanningSection />
      <TrackingSection />
      <WorkflowsSection />
      <UnderTheHoodSection />
      <PreFooterSection />
      <Footer />
    </>
  );
}

export default App;
