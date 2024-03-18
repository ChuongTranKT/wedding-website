import AlbumWedding from '@/components/AlbumWedding'
import AudioSection from '@/components/Audio'
import CoupleSection from '@/components/Couple'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SnowfallEffect from '@/components/SnowfallEffect'
import Time from '@/components/Time'
import WeddingEvent from '@/components/WeddingEvent'

export default function Home() {
  return (
    <main className="relative ">
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <SnowfallEffect />
        <Navbar />
        <Hero />
        <CoupleSection />
        <WeddingEvent />
        <AlbumWedding />
      </div>
      <AudioSection />
    </main>
  )
}
