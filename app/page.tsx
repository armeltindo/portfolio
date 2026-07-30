import Navbar from '@/components/Navbar'
import PersonJsonLd from '@/components/PersonJsonLd'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Approche from '@/components/Approche'
import ProjetPhare from '@/components/ProjetPhare'
import Parcours from '@/components/Parcours'
import FormationsLangues from '@/components/FormationsLangues'
import Leadership from '@/components/Leadership'
import Temoignage from '@/components/Temoignage'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="font-sans text-ink max-w-full overflow-x-hidden">
      <PersonJsonLd />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Approche />
        <ProjetPhare />
        <Parcours />
        <FormationsLangues />
        <Leadership />
        <Temoignage />
        <Contact />
      </main>
    </div>
  )
}
