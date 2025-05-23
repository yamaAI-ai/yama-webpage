import Navbar   from "./components/Navbar"
import Hero     from "./components/Hero"
import Features from "./components/Features"
import Pricing  from "./components/Pricing"
import Footer   from "./components/Footer"
import './App.css'

function App() {
  
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
    </>
  )
}

export default App
