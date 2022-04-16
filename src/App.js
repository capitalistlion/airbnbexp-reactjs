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

  const trainers = data.map(element => <Trainer trainerImg={element.coverImg} title={element.title} rating={element.stats.rating} reviewCount={element.stats.reviewCount} price={element.price} location={element.location} openSpots={element.openSpots} />)

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