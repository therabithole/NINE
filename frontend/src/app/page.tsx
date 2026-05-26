import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import SearchBar from '@/components/home/SearchBar'
import ServicesGrid from '@/components/home/ServicesGrid'

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <Hero />

      <SearchBar />

      <ServicesGrid />
    </main>
  )
}
