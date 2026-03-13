import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import GitHubActivity from '@/components/GitHubActivity'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import Timeline from '@/components/Timeline'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <GitHubActivity />
        <Skills />
        <Services />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
