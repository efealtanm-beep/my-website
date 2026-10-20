import Navbar from './components/Navbar'
import Ticker from './components/Ticker'
import Hero from './components/Hero'
import Syndicate from './components/Syndicate'
import Manifesto from './components/Manifesto'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <Navbar />
      <Ticker />
      <main>
        <Hero />
        <Syndicate />
        <Manifesto />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
