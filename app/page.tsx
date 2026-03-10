import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Scan line global */}
      <div className="scan-line" />

      <Navbar />

      <main>
        <Hero />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
