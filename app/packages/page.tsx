import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ArrowUp";
import Image from "next/image";
export default function packages()
{
    return(
       <main>
            <Navbar/>
 <section className="py-10 bg-purple-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-8">

      <h2 className="text-3xl font-bold text-purple-700 text-shadow-lg bg-clip-text text-transparent mb-8">
        Filter Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Package Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Package
          </label>
          <select className="w-full rounded-xl border border-purple-300 p-3 text-purple-700 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none">
            <option>All Packages</option>
            <option>Indian Tours</option>
            <option>International Tours</option>
            <option>Honeymoon</option>
            <option>Family</option>
            <option>Adventure</option>
            <option>Luxury</option>
            <option>Weekend Getaway</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Price Range
          </label>
          <select className="w-full rounded-xl border border-gray-200 p-3 text-purple-700 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none">
            <option>All Prices</option>
            <option>₹5,000 - ₹10,000</option>
            <option>₹10,000 - ₹20,000</option>
            <option>₹20,000 - ₹40,000</option>
            <option>₹40,000 - ₹75,000</option>
            <option>₹75,000+</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Duration
          </label>
          <select className="w-full rounded-xl border border-gray-200 p-3 text-purple-700 shadow-sm focus:ring-2 focus:ring-purple-400 outline-none">
            <option>Any Duration</option>
            <option>1-3 Days</option>
            <option>4-6 Days</option>
            <option>7-10 Days</option>
            <option>11-15 Days</option>
            <option>15+ Days</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8">

        <button className="px-6 py-3 rounded-xl border border-purple-400 text-purple-700 font-semibold hover:bg-purple-50 transition">
          Reset
        </button>

        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition">
          Apply Filters
        </button>

      </div>

    </div>

  </div>
</section>
        
 <section className="py-10 px-6 bg-white">
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

                    {/*Jaipur*/}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
                  <div className="bg-white overflow-hidden shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <Image
                      width={400}
                      height={250}
                      src={"/jaipur.jpg"}
                      alt="Jaipur package"
                      className="w-full object-cover h-56"
                    />

                    <div className="p-5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="rounded-full px-3 py-1 text-purple-700 bg-purple-100 font-semibold text-sm">5 Days/4 Nights</span>
                        <span className="text-yellow-500 font-semibold">⭐ 5.0</span>
                     </div>
                     <h3 className="text-purple-700 text-shadow-lg font-bold text-2xl">Jaipur Royal Place</h3>
                     <p className="text-gray-600 py-6 mt-3"> Discover royal palaces, historic forts, and the rich culture of Rajasthan.</p>
                     <div className="flex justify-between items-center mt-6">
                        <div>
                           <p className="text-gray-600 text-sm">Starting From</p>
                          <h4 className="text-pink-600 font-bold text-2xl">₹45,999</h4>
                        </div>
                          <button className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 rounded-full px-5 py-2 text-white hover:scale-105 transition">Book Now</button>
                     </div>
                    </div>
                  </div>
                  <div className="bg-white overflow-hidden shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <Image
                      width={400}
                      height={250}
                      src={"/singapore.jpg"}
                      alt="singapore package"
                      className="w-full object-cover h-56"
                    />

                    <div className="p-5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="rounded-full px-3 py-1 text-purple-700 bg-purple-100 font-semibold text-sm">5 Days/4 Nights</span>
                        <span className="text-yellow-500 font-semibold">⭐ 5.0</span>
                     </div>
                     <h3 className="text-purple-700 text-shadow-lg font-bold text-2xl">World-Class Attraction</h3>
                     <p className="text-gray-600 py-6 mt-3">Experience Marina Bay Sands, Gardens by the Bay, Sentosa Island.</p>
                     <div className="flex justify-between items-center mt-6">
                        <div>
                           <p className="text-gray-600 text-sm">Starting From</p>
                          <h4 className="text-pink-600 font-bold text-2xl">₹60,999</h4>
                        </div>
                          <button className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 rounded-full px-5 py-2 text-white hover:scale-105 transition">Book Now</button>
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