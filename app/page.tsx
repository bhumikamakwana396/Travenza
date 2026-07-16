"use client";
import Image from "next/image";
import AIChat from "@/components/AIChat";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";
import {
  Search,
  Package,
  CreditCard,
  PlaneTakeoff,
  MoveRight,
} from "lucide-react";
import BackToTop from "@/components/ArrowUp";
import ContactUsDialog from "@/components/ContactUsDialog";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/components/navigation";


export default function Home() {
 
  return (
    <main className="min-h-screen">
      
      <Navbar/>
      
      {/* Hero Section */}
     <section  className="flex flex-col items-center justify-center h-[90vh] text-white text-center px-6 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500">

      
  <h1 className="typewriter text-6xl md:text-7xl font-bold mb-6">
    Explore the World with Travenza
  </h1>

  <p className="text-xl md:text-2xl max-w-2xl mb-8">
    Discover breathtaking destinations, unforgettable adventures,
    and travel experiences crafted just for you.
  </p>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
        <div className="text-center">
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-sm opacity-90">Destinations</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold">1K+</h3>
          <p className="text-sm opacity-90">Happy Travelers</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold">4.9★</h3>
          <p className="text-sm opacity-90">Customer Rating</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-sm opacity-90">Tour Packages</p>
        </div>
      </div>
</section>

<section className="relative -mt-12 z-20 px-6">
  <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

    <h2 className="text-shadow-lg text-3xl font-bold text-center text-purple-700 mb-8">
      🔍 Find Your Dream Trip
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

      {/* Destination */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Destination
        </label>
        <input
          type="text"
          placeholder="Where to?"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      {/* Check In */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Departure
        </label>
        <input
          type="date"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      {/* Check Out */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Return
        </label>
        <input
          type="date"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      {/* Travelers */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Travelers
        </label>
        <select className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none">
          <option>1 Adult</option>
          <option>2 Adults</option>
          <option>3 Adults</option>
          <option>Family</option>
          <option>Group</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="flex items-end">
        <button className="w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
          Search Trip
        </button>
      </div>

    </div>

  </div>
</section>

{/* Why Choose Travenza */}
<section className="py-20 bg-white px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-shadow-lg text-4xl font-bold text-center text-purple-700 mb-4">
      Why Choose Travenza?
    </h2>

    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
      We make every journey memorable with trusted services, affordable
      packages, and personalized travel experiences.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-[0_15px_35px_rgba(168,85,247,0.25),0_5px_15px_rgba(217,70,239,0.2),0_0_25px_rgba(236,72,153,0.15)]  p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-5xl">
          ✈️
        </div>

        <h3 className="text-shadow-md text-2xl font-bold text-purple-700 mt-6">
          Easy Booking
        </h3>

        <p className="text-gray-600 mt-3">
          Book your dream vacation in just a few clicks with our simple and
          secure booking process.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-[0_15px_35px_rgba(168,85,247,0.25),0_5px_15px_rgba(217,70,239,0.2),0_0_25px_rgba(236,72,153,0.15)] p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-5xl">
          💰
        </div>

        <h3 className="text-shadow-md text-2xl font-bold text-purple-700 mt-6">
          Best Price
        </h3>

        <p className="text-gray-600 mt-3">
          Enjoy affordable travel packages with exclusive offers and no hidden
          charges.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-[0_15px_35px_rgba(168,85,247,0.25),0_5px_15px_rgba(217,70,239,0.2),0_0_25px_rgba(236,72,153,0.15)]  p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-5xl">
          🛡️
        </div>

        <h3 className="text-shadow-md text-2xl font-bold text-purple-700 mt-6">
          Secure Payments
        </h3>

        <p className="text-gray-600 mt-3">
          Your payments are protected with secure and trusted payment methods.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-2xl shadow-[0_15px_35px_rgba(168,85,247,0.25),0_5px_15px_rgba(217,70,239,0.2),0_0_25px_rgba(236,72,153,0.15)]  p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-green-100 text-5xl">
          📞
        </div>

        <h3 className="text-shadow-md text-2xl font-bold text-purple-700 mt-6">
          24/7 Support
        </h3>

        <p className="text-gray-600 mt-3">
          Our travel experts are available anytime to assist you before, during,
          and after your trip.
        </p>
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

  </div>
</section>

<section className="py-24 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-center text-white">

<h2 className="text-shadow-lg text-5xl font-bold">
Ready for Your Next Adventure?
</h2>

<p className="mt-5 text-xl">
Explore breathtaking destinations with Travenza and create unforgettable memories.
</p>

<button className="mt-8 bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
Book Your Trip
</button>

</section>
{/* Featured Tour Packages */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-shadow-lg text-4xl font-bold text-center text-purple-700 mb-4">
      Featured Tour Packages
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Discover our handpicked travel packages designed to create unforgettable
      memories at the best prices.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Goa */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
        <Image
          src="/goa.jpg"
          alt="Goa Package"
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <div className="flex justify-between items-center mb-3">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
              4 Days / 3 Nights
            </span>

            <span className="text-yellow-500 font-semibold">
              ⭐ 4.8
            </span>
          </div>

          <h3 className="text-shadow-md text-2xl font-bold text-purple-700">
            Goa Beach Escape
          </h3>

          <p className="text-gray-600 mt-3">
            Enjoy beautiful beaches, water sports, nightlife, and luxury stays stays.
          </p>

          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-gray-500 text-sm">Starting From</p>
              <h4 className="text-2xl font-bold text-pink-600">
                ₹14,999
              </h4>
            </div>

            <button className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white px-5 py-2 rounded-full hover:scale-105 transition">
              Book Now
            </button>
          </div>

        </div>
      </div>

      {/* Manali */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
        <Image
          src="/manali.jpg"
          alt="Manali Package"
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <div className="flex justify-between items-center mb-3">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
              5 Days / 4 Nights
            </span>

            <span className="text-yellow-500 font-semibold">
              ⭐ 4.9
            </span>
          </div>

          <h3 className="text-shadow-md text-2xl font-bold text-purple-700">
            Manali Adventure
          </h3>

          <p className="text-gray-600 mt-3">
            Snowy mountains, Solang Valley, adventure sports, and scenic views.
          </p>

          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-gray-500 text-sm">Starting From</p>
              <h4 className="text-2xl font-bold text-pink-600">
                ₹19,999
              </h4>
            </div>

            <button className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white px-5 py-2 rounded-full hover:scale-105 transition">
              Book Now
            </button>
          </div>

        </div>
      </div>

      {/* Dubai */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
        <Image
          src="/dubai.jpg"
          alt="Dubai Package"
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <div className="flex justify-between items-center mb-3">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
              6 Days / 5 Nights
            </span>

            <span className="text-yellow-500 font-semibold">
              ⭐ 4.9
            </span>
          </div>

          <h3 className="text-shadow-md text-2xl font-bold text-purple-700">
            Dubai Luxury Tour
          </h3>

          <p className="text-gray-600 mt-3">
            Visit Burj Khalifa, Desert Safari, Marina Cruise, and shopping malls.
          </p>

          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-gray-500 text-sm">Starting From</p>
              <h4 className="text-2xl font-bold text-pink-600">
                ₹49,999
              </h4>
            </div>

            <button className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white px-5 py-2 rounded-full hover:scale-105 transition">
              Book Now
            </button>
          </div>

        </div>
      </div>

      {/* Bali */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
        <Image
          src="/bali.jpg"
          alt="Bali Package"
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <div className="flex justify-between items-center mb-3">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
              5 Days / 4 Nights
            </span>

            <span className="text-yellow-500 font-semibold">
              ⭐ 5.0
            </span>
          </div>

          <h3 className="text-shadow-md text-2xl font-bold text-purple-700">
            Bali Paradise
          </h3>

          <p className="text-gray-600 mt-3">
            Relax on tropical beaches, explore temples, waterfalls, and resorts.
          </p>

          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-gray-500 text-sm">Starting From</p>
              <h4 className="text-2xl font-bold text-pink-600">
                ₹54,999
              </h4>
            </div>

            <button className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white px-5 py-2 rounded-full hover:scale-105 transition">
              Book Now
            </button>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>
{/* Booking Process */}
<section className="py-20 px-6 bg-purple-300 via-fuchsia-100 pink-100">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-14">
      <h2 className="text-shadow-lg text-4xl md:text-5xl font-bold text-purple-700">
        Easy Booking Process
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Book your dream vacation in just four simple steps with Travenza.
      </p>
    </div>

    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4">

      {/* Step 1 */}
      <div className="bg-gray-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition w-72">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 flex items-center justify-center shadow-lg">
            <Search className="w-10 h-10 text-white" />
        </div>

        <h3 className="text-shadow-md text-2xl font-bold text-purple-700 mt-6">
          Search Destination
        </h3>

        <p className="text-gray-600 mt-3">
          Browse exciting domestic and international destinations.
        </p>
      </div>

      {/* Arrow */}
      <MoveRight className="hidden lg:block w-10 h-10 text-purple-600 animate-pulse" />

      {/* Step 2 */}
      <div className="bg-gray-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition w-72">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 flex items-center justify-center">
          <Package className="w-10 h-10 text-white" />
        </div>

        <h3 className="text-shadow-md text-2xl font-bold text-purple-700 mt-6">
          Choose Package
        </h3>

        <p className="text-gray-600 mt-3">
          Compare packages and choose the one that fits your budget.
        </p>
      </div>

      {/* Arrow */}
      <MoveRight className="hidden lg:block w-10 h-10 text-purple-600 animate-pulse" />

      {/* Step 3 */}
      <div className="bg-gray-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition w-72">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 flex items-center justify-center">
          <CreditCard className="w-10 h-10 text-white" />
        </div>

        <h3 className="text-shadow-md text-2xl font-bold text-purple-700 mt-6">
          Secure Payment
        </h3>

        <p className="text-gray-600 mt-3">
          Pay safely using UPI, Cards, Net Banking, or Wallets.
        </p>
      </div>

      {/* Arrow */}
      <MoveRight className="hidden lg:block w-10 h-10 text-purple-600 animate-pulse" />

      {/* Step 4 */}
      <div className="bg-gray-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition w-72">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 flex items-center justify-center shadow-lg">
          <PlaneTakeoff className="w-10 h-10 text-white" />
        </div>

        <h3 className="text-shadow-md text-2xl font-bold text-purple-700 mt-6">
          Enjoy Your Trip
        </h3>

        <p className="text-gray-600 mt-3">
          Pack your bags and create unforgettable travel memories.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Special Offers */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center text-purple-700 mb-14">
      <h2 className="text-shadow-lg text-4xl md:text-5xl font-bold">
        🎉 Special Travel Offers
      </h2>

      <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
        Grab these limited-time deals and make your dream vacation more
        affordable with Travenza.
      </p>
    </div>

    {/* Offer Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Offer 1 */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-2 transition duration-300">

        <Image
          src="/goa.jpg"
          alt="Goa Offer"
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">

          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            30% OFF
          </span>

          <h3 className="text-2xl font-bold text-purple-700 mt-4">
            Goa Beach Escape
          </h3>

          <p className="text-gray-600 mt-3">
            Book your Goa holiday today and save big on hotels, sightseeing,
            and exciting water sports.
          </p>

          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="line-through text-gray-400">
                ₹19,999
              </p>

              <h4 className="text-3xl font-bold text-pink-600">
                ₹13,999
              </h4>
            </div>

            <button className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white px-5 py-3 rounded-full hover:scale-105 transition">
              Book Now
            </button>
          </div>

        </div>
      </div>

      {/* Offer 2 */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-2 transition duration-300">

        <Image
          src="/maldives.jpg"
          alt="Maldives Offer"
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">

          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Honeymoon Deal
          </span>

          <h3 className="text-2xl font-bold text-purple-700 mt-4">
            Maldives Paradise
          </h3>

          <p className="text-gray-600 mt-3">
            Complimentary candlelight dinner and airport transfers included.
          </p>

          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="line-through text-gray-400">
                ₹69,999
              </p>

              <h4 className="text-3xl font-bold text-pink-600">
                ₹54,999
              </h4>
            </div>

            <button className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white px-5 py-3 rounded-full hover:scale-105 transition">
              Book Now
            </button>
          </div>

        </div>
      </div>

      {/* Offer 3 */}
      <div className="bg-white rounded-3xl shadow-[0_15px_35px_rgba(168,85,247,0.25),0_5px_15px_rgba(217,70,239,0.2),0_0_25px_rgba(236,72,153,0.15)] overflow-hidden hover:-translate-y-2 transition duration-300">

        <Image
          src="/dubai.jpg"
          alt="Dubai Offer"
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">

          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Limited Offer
          </span>

          <h3 className="text-2xl font-bold text-purple-700 mt-4">
            Dubai Luxury Tour
          </h3>

          <p className="text-gray-600 mt-3">
            Enjoy free Desert Safari and Marina Cruise on selected bookings.
          </p>

          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="line-through text-gray-400">
                ₹59,999
              </p>

              <h4 className="text-3xl font-bold text-pink-600">
                ₹44,999
              </h4>
            </div>

            <button className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white px-5 py-3 rounded-full hover:scale-105 transition">
              Book Now
            </button>
          </div>

        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">

      <h3 className="text-3xl font-bold text-purple-700 text-shadow-lg">
        ✈️ Your Dream Vacation Starts Here
      </h3>

      <p className="text-purple-700 mt-3 opacity-90">
        Book now and enjoy exclusive discounts with Travenza.
      </p>

      <button className="mt-8 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition">
        Explore All Offers
      </button>

    </div>

  </div>
</section>

{/* Customer Testimonials */}
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-shadow-lg text-4xl md:text-5xl font-bold text-purple-700">
        What Our Travelers Say
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Thousands of travelers trust Travenza for unforgettable journeys.
        Here's what our happy customers have to say.
      </p>
    </div>

    {/* Testimonials */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Testimonial 1 */}
      <div className="bg-white rounded-3xl shadow-[0_15px_35px_rgba(168,85,247,0.25),0_5px_15px_rgba(217,70,239,0.2),0_0_25px_rgba(236,72,153,0.15)] p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <div className="flex items-center gap-4">
          <Image
            src="/user1.jpg"
            alt="Rahul Patel"
            width={70}
            height={70}
            className="rounded-full object-cover"
          />

          <div>
            <h3 className="text-xl font-bold text-purple-700">
              Ruhi Patel
            </h3>

            <p className="text-gray-500 text-sm">
              Ahmedabad, Gujarat
            </p>
          </div>
        </div>

        <div className="mt-5 text-yellow-500 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-4 text-gray-600 leading-7">
          "Our Goa trip was perfectly organized. Hotels, sightseeing,
          and transportation were excellent. Thank you Travenza!"
        </p>

      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-3xl shadow-[0_15px_35px_rgba(168,85,247,0.25),0_5px_15px_rgba(217,70,239,0.2),0_0_25px_rgba(236,72,153,0.15)] p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <div className="flex items-center gap-4">
          <Image
            src="/user2.jpg"
            alt="Bhavika Shah"
            width={70}
            height={70}
            className="rounded-full object-cover"
          />

          <div>
            <h3 className="text-xl font-bold text-purple-700">
              Bhavika Shah
            </h3>

            <p className="text-gray-500 text-sm">
              Surat, Gujarat
            </p>
          </div>
        </div>

        <div className="mt-5 text-yellow-500 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-4 text-gray-600 leading-7">
          "The Maldives honeymoon package exceeded our expectations.
          Everything was well planned and stress-free."
        </p>

      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-3xl shadow-[0_15px_35px_rgba(168,85,247,0.25),0_5px_15px_rgba(217,70,239,0.2),0_0_25px_rgba(236,72,153,0.15)] p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

        <div className="flex items-center gap-4">
          <Image
            src="/user3.jpg"
            alt="Anjali Kumari"
            width={70}
            height={70}
            className="rounded-full object-cover"
          />

          <div>
            <h3 className="text-xl font-bold text-purple-700">
              Anjali Kumari
            </h3>

            <p className="text-gray-500 text-sm">
              Jaipur, Rajasthan
            </p>
          </div>
        </div>

        <div className="mt-5 text-yellow-500 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-4 text-gray-600 leading-7">
          "Booking our Dubai family vacation through Travenza was easy.
          Great prices, friendly support, and an unforgettable experience."
        </p>

      </div>

    </div>

    {/* Bottom Stats */}
    
  </div>
</section>

{/* FAQ Section */}
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-4xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-shadow-lg text-4xl md:text-5xl font-bold text-purple-700">
        Frequently Asked Questions
      </h2>

      <p className="mt-4 text-gray-600">
        Find answers to the most common questions about booking, payments, and travel with Travenza.
      </p>
    </div>

    <div className="space-y-5">

      {/* FAQ 1 */}
      <details className="group bg-white rounded-2xl shadow-lg p-6 cursor-pointer">
        <summary className="flex justify-between items-center font-semibold text-lg text-purple-700 list-none">
          How do I book a tour package?
          <span className="text-2xl group-open:rotate-45 transition-transform">
            +
          </span>
        </summary>

        <p className="mt-4 text-gray-600">
          Browse our destinations, select your preferred package, click
          <strong> Book Now</strong>, fill in your details, and complete the secure payment process.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="group bg-white rounded-2xl shadow-lg p-6 cursor-pointer">
        <summary className="flex justify-between items-center font-semibold text-lg text-purple-700 list-none">
          Which payment methods do you accept?
          <span className="text-2xl group-open:rotate-45 transition-transform">
            +
          </span>
        </summary>

        <p className="mt-4 text-gray-600">
          We accept UPI, Credit/Debit Cards, Net Banking, Wallets, and other secure online payment methods.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="group bg-white rounded-2xl shadow-lg p-6 cursor-pointer">
        <summary className="flex justify-between items-center font-semibold text-lg text-purple-700 list-none">
          Can I cancel or reschedule my booking?
          <span className="text-2xl group-open:rotate-45 transition-transform">
            +
          </span>
        </summary>

        <p className="mt-4 text-gray-600">
          Yes. Cancellation and rescheduling are available according to the package's cancellation policy.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="group bg-white rounded-2xl shadow-lg p-6 cursor-pointer">
        <summary className="flex justify-between items-center font-semibold text-lg text-purple-700 list-none">
          Are flights and hotels included?
          <span className="text-2xl group-open:rotate-45 transition-transform">
            +
          </span>
        </summary>

        <p className="mt-4 text-gray-600">
          Most packages include hotel accommodation, sightseeing, and transfers. Flight inclusion depends on the selected package.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="group bg-white rounded-2xl shadow-lg p-6 cursor-pointer">
        <summary className="flex justify-between items-center font-semibold text-lg text-purple-700 list-none">
          How can I contact Travenza?
          <span className="text-2xl group-open:rotate-45 transition-transform">
            +
          </span>
        </summary>

        <p className="mt-4 text-gray-600">
          📞 +91 7040565088 <br />
          📧 bhumikamakwana@gmail.com <br />
          Our support team is available to help with bookings and travel-related queries.
        </p>
      </details>

    </div>

  </div>
</section>

<section
  className="relative py-24 px-6 bg-cover bg-center"
  style={{ backgroundImage: "url('/air.jpg')" }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative max-w-4xl mx-auto text-center text-white">
    <h2 className="typewriter text-5xl font-bold">
      Never Miss Your Next Adventure
    </h2>

    <p className="mt-5 text-lg">
      Subscribe to Travenza and receive travel inspiration,
      exclusive discounts, and the latest tour packages.
    </p>

    <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
      <input
        type="email"
        placeholder="Your Email Address"
        className="px-6 py-4 rounded-full w-full md:w-96 text-white outline"
      />

      <button className="bg-gradient-to-r from-pink-500 to-purple-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
        Subscribe Now
      </button>
    </div>
  </div>
</section>

{/* Final Call To Action */}

<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">

    <div className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 rounded-[40px] p-10 lg:p-16 shadow-2xl">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-white">

          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            ✈️ Start Your Journey Today
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Ready for Your Next Adventure?
          </h2>

          <p className="mt-6 text-lg text-white/90 leading-8">
            Explore breathtaking destinations, discover exclusive travel
            packages, and create unforgettable memories with Travenza.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Book Now
            </button>

          <p className="bg-white rounded-full px-8 py-4"><ContactUsDialog/></p> 

          </div>

        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-5">

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <h3 className="text-5xl font-bold text-purple-700">100+</h3>
            <p className="text-gray-600 mt-3">Destinations</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <h3 className="text-5xl font-bold text-purple-700">1K+</h3>
            <p className="text-gray-600 mt-3">Happy Travelers</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <h3 className="text-5xl font-bold text-purple-700">4.9★</h3>
            <p className="text-gray-600 mt-3">Customer Rating</p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <h3 className="text-5xl font-bold text-purple-700">24/7</h3>
            <p className="text-gray-600 mt-3">Support</p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>



<Footer/>
<BackToTop/>
    </main>
  );
}