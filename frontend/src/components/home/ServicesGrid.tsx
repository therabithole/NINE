const services = [
  {
    title: 'Taxi',
    desc: 'Book rides instantly',
    icon: '🚕',
  },
  {
    title: 'Courier',
    desc: 'Send packages same day',
    icon: '📦',
  },
  {
    title: 'Freight',
    desc: 'Large cargo transport',
    icon: '🚛',
  },
  {
    title: 'Food',
    desc: 'Restaurants and takeaway',
    icon: '🍔',
  },
   
]

export default function ServicesGrid() {
  return (
    <section className="py-32 px-6 lg:px-20">
      <h2 className="text-5xl font-black mb-16">
        Explore Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="glass rounded-[32px] p-8 hover:scale-105 transition duration-300"
          >
            <div className="text-6xl mb-6">{service.icon}</div>

            <h3 className="text-3xl font-bold mb-3">
              {service.title}
            </h3>

            <p className="text-gray-400">
              {service.desc}
            </p>

            <button className="mt-8 bg-white text-black px-5 py-3 rounded-2xl font-semibold">
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  )
        }
