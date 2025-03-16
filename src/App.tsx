import Header from "@/components/header/Header";
import HeroSection from "./components/landing/Hero";
import CustomersSection from "./components/landing/Customers";
import WhatMakesLinerDiff from "./components/landing/WhatMakesLinerDiff";
import PlanningSection from "./components/landing/Planning";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CustomersSection />
      <WhatMakesLinerDiff />
      <PlanningSection />
      <Footer />
    </>
  );
}

export default App;
