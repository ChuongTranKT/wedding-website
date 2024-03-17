import AudioSection from '@/components/Audio'
import CoupleSection from '@/components/Couple'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SnowfallEffect from '@/components/SnowfallEffect'
import Time from '@/components/Time'

export default function Home() {
  return (
    <main className="relative flex flex-col gap-10">
      <SnowfallEffect />
      <Navbar />
      <Hero />
      <CoupleSection />
      <Time />
      <AudioSection />
    </main>
  )
}
