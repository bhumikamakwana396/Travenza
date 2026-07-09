import BackToTop from "@/components/ArrowUp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function AboutPage() {
  const features = [
    {
      icon: "✈️",
      title: "Curated Tour Packages",
      desc: "Explore handpicked domestic and international travel experiences.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      desc: "Enjoy premium vacations at competitive prices.",
    },
    {
      icon: "🏨",
      title: "Best Hotels",
      desc: "Stay in carefully selected hotels with premium amenities.",
    },
    {
      icon: "🛡️",
      title: "Safe & Secure",
      desc: "Travel confidently with trusted partners and secure bookings.",
    },
    {
      icon: "🌍",
      title: "Worldwide Destinations",
      desc: "Visit amazing destinations across India and around the world.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      desc: "Our travel experts are available whenever you need help.",
    },
  ];

  const team = [
    {
      name: "Bhumika Makwana",
      role: "Founder & CEO",
      image: "/p3.jpeg",
    },
    {
      name: "Emily Johnson",
      role: "Travel Consultant",
      image: "/user1.jpg",
    },
    {
      name: "Navina Shah",
      role: "Tour Manager",
      image: "/user2.jpg",
    },
    {
      name: "Sophia Wilson",
      role: "Customer Support",
      image: "/user3.jpg",
    },
  ];

  return (
    <main className="bg-gray-50">
      <Navbar />
      {/* Hero */}
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-purple-700 text-shadow-lg">
            About Travenza
          </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
            Discover the world with confidence. We create memorable travel
            experiences through carefully designed domestic and international
            tour packages.
          </p>
          
          </div>
        <img
            src="/travenza-air.png"
            alt="Company"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="/travenza-company.png"
            alt="Company"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-shadow-lg text-4xl font-bold text-purple-700 mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8">
              Travenza was founded with one simple goal—to make every journey
              unforgettable. We believe travel is more than visiting places;
              it's about creating lifelong memories.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              From family vacations and honeymoon trips to adventure tours and
              international holidays, our experienced team designs every package
              with comfort, safety, and customer satisfaction in mind.
            </p>
          </div>

        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-purple-300 via-fuchsia-100 pink-100 rounded-3xl p-8 shadow-lg">

            <h2 className="text-shadow-lg text-3xl font-bold text-purple-700 mb-4">
              🎯 Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              To deliver affordable, safe, and unforgettable travel experiences
              with exceptional customer service.
            </p>

          </div>

          <div className="bg-purple-300 via-fuchsia-100 pink-100 rounded-3xl p-8 shadow-lg">

            <h2 className="text-shadow-lg text-3xl font-bold text-pink-600 mb-4">
              🌍 Our Vision
            </h2>

            <p className="text-gray-600 leading-8">
              To become one of the most trusted travel companies by connecting
              travelers with incredible destinations worldwide.
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-shadow-lg text-center text-4xl font-bold text-purple-700 mb-14">
            Why Choose Travenza?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-purple-300 via-fuchsia-100 pink-100 text-purple-700  rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="text-shaow-md font-bold text-xl mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            <div>
              <h2 className="text-5xl font-bold">10K+</h2>
              <p className="mt-3">Happy Travelers</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">150+</h2>
              <p className="mt-3">Destinations</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">500+</h2>
              <p className="mt-3">Tour Packages</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">4.9★</h2>
              <p className="mt-3">Customer Rating</p>
            </div>

          </div>

        </div>

      </section>

      {/* Team */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-shadow-lg text-center text-4xl font-bold text-purple-700 mb-14">
            Meet Our Team
          </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  {team.map((member, index) => (
    <div
      key={index}
      className="bg-purple-300 via-fuchsia-100 pink-100 rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300"
    >
      <div className="flex justify-center">
        <Image
          src={member.image}
          alt={member.name}
          width={180}
          height={180}
          className="w-44 h-44 rounded-full object-cover border-4 border-purple-500 shadow-lg"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {member.name}
      </h3>

      <p className="text-purple-600">
        {member.role}
      </p>

    </div>
  ))}

</div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-100">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold text-purple-700">
            Ready For Your Next Adventure?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Let Travenza help you explore breathtaking destinations and create
            unforgettable memories.
          </p>

          <button className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 text-white font-semibold hover:scale-105 transition">
            Explore Packages
          </button>

        </div>

      </section>
<Footer/>
      <BackToTop/>
    </main>
  );

}