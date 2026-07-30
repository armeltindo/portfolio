import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Approche from '@/components/Approche'
import ProjetPhare from '@/components/ProjetPhare'
import Parcours from '@/components/Parcours'
import FormationsLangues from '@/components/FormationsLangues'
import Temoignage from '@/components/Temoignage'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="font-sans text-ink max-w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Approche />
        <ProjetPhare />
        <Parcours />
        <FormationsLangues />
        <Temoignage />
        <Contact />
      </main>
    </div>
  )
}
