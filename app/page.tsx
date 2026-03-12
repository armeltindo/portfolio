import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Timeline from '@/components/Timeline'
import Skills from '@/components/Skills'
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
        <Services />
        <Projects />
        <Timeline />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
