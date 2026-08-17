import { useEffect } from "react";
import { DashboardPreview } from "../../components/DashboardPreview/DashboardPreview";
import { EarlyAccess } from "../../components/EarlyAccess/EarlyAccess";
import { FAQ } from "../../components/FAQ/FAQ";
import { Food } from "../../components/Food/Food";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { HowItWorks } from "../../components/HowItWorks/HowItWorks";
import { Insights } from "../../components/Insights/Insights";
import { Problem } from "../../components/Problem/Problem";
import { Security } from "../../components/Security/Security";
import { trackEvent } from "../../utils/analytics";

export function LandingPage() {
  useEffect(() => {
    trackEvent("landing_view");
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти до вмісту
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Problem />
        <HowItWorks />
        <Insights />
        <Food />
        <DashboardPreview />
        <EarlyAccess />
        <Security />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
