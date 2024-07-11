import React from 'react'
import StylistsCardsMenu from '../principalPageComponents/StylistsCardsMenu'
import WhatOurClientsSay from '../principalPageComponents/WhatOurClientsSay'
import BarberIcon from '../icons/BarberIcon'

function Principal() {
  return (
    <div>
      <main className="flex-1">
        <section className="bg-muted py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h1 className="text-4xl font-bold flex">
            <span>
                <BarberIcon />
              </span>
              Encuentra los mejores estilistas de tu zona
              <span>
                <BarberIcon />
              </span>
            </h1>
            <p className="text-muted-foreground text-lg flex">
              Book appointments with top-rated hair stylists, barbers, and
              beauty professionals in your area.
              
            </p>
            <form className="flex items-center gap-4">
              <input
                className="flex h-10 w-full border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 rounded-md px-4 py-2 text-muted-foreground"
                placeholder="Enter your location"
                type="text"
              />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 py-2"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </section>
        <StylistsCardsMenu />
        <WhatOurClientsSay />
      </main>
    </div>
  )
}

export default Principal
