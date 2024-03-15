import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SnowfallEffect from '@/components/SnowfallEffect'
import Time from '@/components/Time'

export default function Home() {
  return (
    <main className="relative flex flex-col gap-32">
      <SnowfallEffect />
      <Navbar />
      <Hero />
      <Time />
    </main>
  )
}
