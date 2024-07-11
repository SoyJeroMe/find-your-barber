import React, { useState, useEffect } from 'react';
import barberOne from '../../img/barbers/barber2.jpg';
import barberTwo from '../../img/barbers/barber2.jpg';
import barberThree from '../../img/barbers/barber3.jpg';

function StylistsCardsMenu() {
  const [stylists, setStylists] = useState([
    { name: 'John Smith', profession: 'Hair Stylist', image: barberOne },
    { name: 'Sarah Anderson', profession: 'Barber', image: barberTwo },
    { name: 'Lisa Martinez', profession: 'Nail Technician', image: barberThree },
  ]);

  useEffect(() => {
    // Fetch data from an API or perform any other side effects here
    // For demonstration purposes, we'll use static data
    const fetchStylists = async () => {
      // Simulate an API call
      const data = [
        { name: 'John Smith', profession: 'Hair Stylist', image: barberOne },
        { name: 'Sarah Anderson', profession: 'Barber', image: barberTwo },
        { name: 'Lisa Martinez', profession: 'Nail Technician', image: barberThree },
      ];
      setStylists(data);
    };

    fetchStylists();
  }, []);

  return (
    <div>
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Stylists</h2>
            <a className="text-primary hover:underline" href="#">
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stylists.map((stylist, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="p-6 flex flex-col items-center gap-4">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 border-4 border-primary">
                    <img className="aspect-square h-full w-full" src={stylist.image} alt={stylist.name} />
                  </span>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{stylist.name}</h3>
                    <p className="text-muted-foreground">{stylist.profession}</p>
                    <div className="flex items-center gap-1 text-yellow-500">
                      {Array(5)
                        .fill()
                        .map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default StylistsCardsMenu;