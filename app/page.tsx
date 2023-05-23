import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import Image from 'next/image'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

export default async function Home() {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperience();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={socials} />

      <section id="hero" className="min-h-screen snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      
      <section id="about" className="min-h-screen snap-center">
        <About pageInfo={pageInfo} />
      </section>
      
      <section id="experience" className="min-h-screen snap-start sm:snap-center">
        <WorkExperience experiences={experiences} />
      </section>
  
      <section id="skills" className="min-h-screen snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="min-h-screen snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="min-h-screen snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="/#hero" scroll={false}>
        <footer className="sticky w-full cursor-pointer bottom-5">
          <div className="flex items-center justify-center">
            <Image 
              src="/RainierRanch.png"
              alt="Footer Logo"
              height={128}
              width={128}
              className="w-10 h-10 rounded-full cursor-pointer filter grayscale hover:grayscale-0"
            />
          </div>
        </footer>
      </Link>

    </div>
  );
}
