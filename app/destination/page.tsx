import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ArrowUp";

export default function DestinationPage() {
  return (
    <main className="min-h-screen">
        <Navbar/>
        <section>
            <div className="max-w-7xl mx-auto px-6 mt-8 mb-12">
  <div className="bg-white rounded-2xl shadow-lg p-6">

    <h3 className="text-2xl font-bold text-purple-700 mb-6">
      Filter Destinations
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

      {/* Category */}
      <div>
        <label className="block text-sm font-semibold text-purple-700 mb-2">
          Category
        </label>
        <select className="w-full rounded-xl border border-gray-200 p-3 text-purple-700 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none">
          <option>Any Category</option>
          <option>Beach</option>
          <option>Mountain</option>
          <option>City</option>
          <option>Historical</option>
        </select>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-semibold text-purple-700 mb-2">
          Budget Range
        </label>
        <select className="text-purple-700 border rounded-xl p-3 focus:ring-2 focus:ring-purple-400 outline-none">
        <option>Budget</option>
        <option>₹5,000 - ₹10,000</option>
        <option>₹10,000 - ₹20,000</option>
        <option>₹20,000+</option>
      </select>
      </div>

      {/* Trip Type */}
      <div>
        <label className="block text-sm font-semibold text-purple-700 mb-2">
          Trip Type
        </label>
        <select className="w-full rounded-xl border border-gray-200 p-3 text-purple-700 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none">
          <option>Any Type</option>
          <option>Adventure</option>
          <option>Relaxation</option>
          <option>Cultural</option>
          <option>Family</option>
        </select>
      </div>

      {/* Season */}
      <div>
          <label className="block text-sm font-semibold text-purple-700 mb-2">
            Best Season
          </label>
          <select className="w-full rounded-xl border border-gray-200 p-3 text-purple-700 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none">
            <option>Any Season</option>
            <option>Summer</option>
            <option>Winter</option>
            <option>Monsoon</option>
            <option>Spring</option>
          </select>
        </div>

    </div>

    <div className="flex justify-end mt-6">
      <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white font-semibold hover:opacity-90 transition">
        Apply Filters
      </button>
    </div>

  </div>
</div>
        </section>

 <section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="max-w-3xl mx-auto ">
      <div className="flex items-center rounded-full shadow-lg border border-purple-700 overflow-hidden">

        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full px-6 py-4 outline-none  text-purple-700 placeholder-purple-400 bg-transparent"
        />

        <button className="rounded-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-purple-700 px-8 py-4 hover:scale-105 transition text-white font-semibold">
          Search
        </button>

      </div>
    </div>

  </div>
</section>

      <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-shadow-lg text-4xl font-bold text-center text-purple-700 mb-12">
          Popular Indian Destinations
        </h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      
          {/* Goa */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition ">
            <Image
              src="/goa.jpg"
              alt="Goa"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Goa</h3>
              <p className="text-gray-600 mt-2">
        Relax on golden beaches, enjoy vibrant nightlife, and witness breathtaking sunsets.
      </p>
          <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                    Explore Now
                  </button>
            </div>
          </div>
      
          {/* Manali */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <Image
              src="/manali.jpg"
              alt="Manali"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Manali</h3>
              <p className="text-gray-600 mt-2">
        Experience snowy mountains, scenic valleys, and thrilling adventure activities.
      </p>
          <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                    Explore Now
                  </button>
            </div>
          </div>
      
          {/* Dubai */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <Image
              src="/kasmir.jpg"
              alt="kasmir"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Kasmir</h3>
              <p className="text-gray-600 mt-2">
        Explore stunning valleys, serene lakes, and the beauty of paradise on Earth.
      </p>
          <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                    Explore Now
                  </button>
            </div>
          </div>
      
          {/* Bali */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <Image
              src="/jaipur.jpg"
              alt="jaipur"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Jaipur</h3>
              <p className="text-gray-600 mt-2">
        Discover royal palaces, historic forts, and the rich culture of Rajasthan.
      </p>
          <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                    Explore Now
                  </button>
            </div>
          </div>
      {/* Kerala */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
  <Image
    src="/kerala.jpg"
    alt="Kerala"
    width={400}
    height={250}
    className="w-full h-56 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Kerala</h3>
    <p className="text-gray-600 mt-2">
      Cruise through peaceful backwaters, tea plantations, beaches, and lush greenery.
    </p>

    <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold">
      Explore Now
    </button>
  </div>
</div>

    {/* Ladakh */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
  <Image
    src="/ladakh.avif"
    alt="Ladakh"
    width={400}
    height={250}
    className="w-full h-56 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Ladakh</h3>
    <p className="text-gray-600 mt-2">
      Ride through breathtaking mountain passes, crystal-clear lakes, and monasteries.
    </p>

    <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold">
      Explore Now
    </button>
  </div>
</div>
    {/* Ooty */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
  <Image
    src="/ooty.jpg"
    alt="Ooty"
    width={400}
    height={250}
    className="w-full h-56 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Ooty</h3>
    <p className="text-gray-600 mt-2">
      Enjoy scenic hills, tea gardens, pleasant weather, and the famous toy train.
    </p>

    <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold">
      Explore Now
    </button>
  </div>
</div>

{/* Andaman */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
  <Image
    src="/andman.png"
    alt="Andaman"
    width={400}
    height={250}
    className="w-full h-56 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Andaman</h3>
    <p className="text-gray-600 mt-2">
      Discover turquoise beaches, coral reefs, scuba diving, and island adventures.
    </p>

    <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold">
      Explore Now
    </button>
  </div>
</div>
        </div>
        
      </section>
      <section className="py-16 px-6 bg-gray-50">
      <h2 className=" text-shadow-lg text-4xl font-bold text-center text-purple-700 mb-12">
          Popular International Destinations
        </h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      
          {/* Goa */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <Image
              src="/maldives.jpg"
              alt="Maldives"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Maldives</h3>
              <p className="text-gray-600 mt-2">
        Stay in overwater villas, relax on pristine beaches, and enjoy crystal-clear waters.
      </p>
          <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                    Explore Now
                  </button>
            </div>
          </div>
      
          {/* Manali */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <Image
              src="/swizerland.jpg"
              alt="Swizerland"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Swizerland</h3>
              <p className="text-gray-600 mt-2">
        Admire breathtaking Alpine landscapes, charming villages, and scenic train journeys.
      </p>
          <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                    Explore Now
                  </button>
            </div>
          </div>
      
          {/* Dubai */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <Image
              src="/dubai.jpg"
              alt="Dubai"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Dubai</h3>
              <p className="text-gray-600 mt-2">
        Enjoy luxury shopping, iconic skyscrapers, and unforgettable desert adventures.
      </p>
      <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                    Explore Now
                  </button>
            </div>
          </div>
      
          {/* Bali */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <Image
              src="/bali.jpg"
              alt="Bali"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Bali</h3>
              <p className="text-gray-600 mt-2">
        Unwind on tropical beaches, visit ancient temples, and experience island serenity.
      </p>
          <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                    Explore Now
                  </button>
            </div>
          </div>
      
        {/* Thailand */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
  <Image
    src="/thailand.jpg"
    alt="Thailand"
    width={400}
    height={250}
    className="w-full h-56 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Thailand</h3>
    <p className="text-gray-600 mt-2">
      Explore tropical beaches, vibrant nightlife, ancient temples, and delicious street food.
    </p>

    <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
      Explore Now
    </button>
  </div>
</div>
    {/* London */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
  <Image
    src="/london.jpg"
    alt="London"
    width={400}
    height={250}
    className="w-full h-56 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-shadow-md text-2xl font-bold text-purple-700">London</h3>
    <p className="text-gray-600 mt-2">
      Visit Big Ben, Buckingham Palace, Tower Bridge, museums, and iconic British landmarks.
    </p>

    <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
      Explore Now
    </button>
  </div>
</div>

    {/* Paris */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
  <Image
    src="/paris.jpg"
    alt="Paris"
    width={400}
    height={250}
    className="w-full h-56 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Paris</h3>
    <p className="text-gray-600 mt-2">
      Discover the Eiffel Tower, Louvre Museum, charming cafés, and romantic city views.
    </p>

    <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
      Explore Now
    </button>
  </div>
</div>

    {/* Singapore */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
  <Image
    src="/singapore.jpg"
    alt="Singapore"
    width={400}
    height={250}
    className="w-full h-56 object-cover"
  />
  <div className="p-4 text-center">
    <h3 className="text-shadow-md text-2xl font-bold text-purple-700">Singapore</h3>
    <p className="text-gray-600 mt-2">
      Experience Marina Bay Sands, Gardens by the Bay, Sentosa Island, and world-class attractions.
    </p>

    <button className="mt-6 w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
      Explore Now
    </button>
  </div>
</div>
        </div>
      </section>
      
      <Footer/>
      <BackToTop/>
    </main>
  );
}