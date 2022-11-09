import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import data from "./data"
import React from 'react'



export default function App() {
  const cards = data.map(cartao => {
      return (
        <div>
            
          <Cards
          
          title={cartao.title}
          location={cartao.location}
          googleMapsUrl={cartao.googleMapsUrl}
          startDate={cartao.startDate}
          endDate={cartao.endDate}
          description={cartao.description}
          imageUrl={cartao.imageUrl}
          />
          <div className="linha"></div>
          
        </div>
      )
  })
  return (
      <div>
      <Navbar />
          <section className="section--cards">
              {cards} 
            
          </section>
        
      </div>
  )
}
