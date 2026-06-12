import { Background } from "@/components/Background";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { SettingsBar } from "@/components/SettingsBar";
import { ProfileSection } from "@/components/ProfileSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AiWorkflowSection } from "@/components/AiWorkflowSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <SettingsBar />

      <div className="relative mx-auto flex w-full max-w-7xl gap-6 px-4 pt-20 sm:px-6 sm:pt-24 lg:gap-8 lg:px-8">
        <Navigation />

        <main className="print-cv min-w-0 flex-1 pb-8 sm:pb-12 lg:pb-16">
          <div className="space-y-6 sm:space-y-8">
            <Hero />
            <ProfileSection />
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              <EducationSection />
              <div className="space-y-6 sm:space-y-8">
                <SkillsSection />
                <LanguagesSection />
              </div>
            </div>
            <AiWorkflowSection />
            <ExperienceSection />
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
}
