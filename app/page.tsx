import AboutSection from "@/components/AboutSection"
import HomeSection from "@/components/HomeSection"
import ProjectsSection from "@/components/ProjectsSection"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
