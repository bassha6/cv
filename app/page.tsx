import Education from "@/components/education";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";
import WorkExperience from "@/components/works";


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main id="content" className="">
        <div className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
          <Profile />
          <Projects />
          {/* <Testimonials /> */}
          <Skills />
          <WorkExperience />
          <Education />
         
        </div>
      </main>
      <Footer />
    </>
  )
}