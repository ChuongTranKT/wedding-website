import AlbumWedding from '@/components/AlbumWedding'
import AudioSection from '@/components/Audio'
import CoupleSection from '@/components/Couple'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SnowfallEffect from '@/components/SnowfallEffect'
import WeddingBox from '@/components/WeddingBox'
import WeddingEvent from '@/components/WeddingEvent'
import WishesRecord from '@/components/WishesRecord'

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <SnowfallEffect />
        <Navbar />
        <Hero />
        <CoupleSection />
        <WeddingEvent />
        <AlbumWedding />
      </div>
      <WishesRecord />
      <WeddingBox />
      <AudioSection />
      <Footer />
    </main>
  )
}
