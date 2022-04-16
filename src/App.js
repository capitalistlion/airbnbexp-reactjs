import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Trainer from "./components/Trainer"
import { useEffect } from "react"

import data from "./data"

export default function App() {

  // This effect runs once, after the first render
  useEffect(() => {
    document.title = "AirBnB Experiences"
  }, [])

  const trainers = data.map(element => <Trainer key={element.id} element={element} />)

  return (
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {trainers}
        </section>
      </div>
  )
}