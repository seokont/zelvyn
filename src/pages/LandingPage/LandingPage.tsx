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
import { LifestyleGallery } from "../../components/LifestyleGallery/LifestyleGallery";
import { Problem } from "../../components/Problem/Problem";
import { Security } from "../../components/Security/Security";
import { trackEvent } from "../../utils/analytics";

export function LandingPage() {
  useEffect(() => {
    trackEvent("landing_view");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section:not(.hero), .factor-card, .step-card, .metric-card, .security-card, .accordion__item, .insight-card, .food-phone, .lifestyle-card",
      ),
    );

    document.documentElement.classList.add("motion-ready");
    targets.forEach((target, index) => {
      target.classList.add("reveal-on-scroll");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
      targets.forEach((target) => {
        target.classList.remove("reveal-on-scroll", "is-visible");
        target.style.removeProperty("--reveal-delay");
      });
    };
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
        <LifestyleGallery />
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
