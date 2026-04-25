import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beer, Factory, FlaskConical, Droplets, Sprout, ShoppingBag, Flame, Fuel, Wheat, Shirt, Package, Pill, Tractor, Anvil, Leaf, Waves, ArrowRight, X } from 'lucide-react';

const industries = [
  {
    icon: Beer,
    name: 'Brewery Production Plant',
    desc: 'Level measurement solutions for silos, tanks and fermentation vessels.',
    color: '#4A6CF7',
    href: 'https://www.sapconinstruments.com/level-sensors-for-brewery-production-plant',
  },
  {
    icon: Factory,
    name: 'Cement Manufacturing',
    desc: 'Level monitoring in silos, hoppers and clinker stores with dust-proof sensing.',
    color: '#06B6D4',
    href: 'https://www.sapconinstruments.com/cement',
  },
  {
    icon: FlaskConical,
    name: 'Chemical Plant',
    desc: 'Accurate sensing for reactive, corrosive and hazardous chemical environments.',
    color: '#4A6CF7',
    href: 'https://www.sapconinstruments.com/level-sensors-for-chemical-plant',
  },
  {
    icon: Droplets,
    name: 'Dairy Processing Plant',
    desc: 'Sanitary and flush-mount sensors for milk, cream and processing tanks.',
    color: '#06B6D4',
    href: 'https://www.sapconinstruments.com/level-sensors-for-dairy-processing-plant',
  },
  {
    icon: Sprout,
    name: 'Fertilizers & Pesticides',
    desc: 'Reliable monitoring for corrosive powders and liquid chemical formulations.',
    color: '#4A6CF7',
    href: 'https://www.sapconinstruments.com/level-sensors-for-fertilizers-pesticides',
  },
  {
    icon: ShoppingBag,
    name: 'FMCG',
    desc: 'Hygienic and fast-response sensors for fast-moving consumer goods manufacturing.',
    color: '#06B6D4',
    href: 'https://www.sapconinstruments.com/level-sensors-for-fmcg-industry',
  },
  {
    icon: Flame,
    name: 'Foundry & Castings',
    desc: 'High-temperature level sensing for sand, resins and molding materials.',
    color: '#4A6CF7',
    href: 'https://www.sapconinstruments.com/level-sensors-for-foundry-and-casting-plants',
  },
  {
    icon: Fuel,
    name: 'Fuel Monitoring Systems',
    desc: 'Accurate level measurement in tanks, separators and pipelines in hazardous zones.',
    color: '#06B6D4',
    href: 'https://www.sapconinstruments.com/fuel',
  },
  {
    icon: Wheat,
    name: 'Grain Handling',
    desc: 'FDA-compatible level switches for grain silos, flour mills and food processing.',
    color: '#4A6CF7',
    href: 'https://www.sapconinstruments.com/level-sensors-for-grain-handling',
  },
  {
    icon: Shirt,
    name: 'Man-made Fibre',
    desc: 'Precision control for polymer melts, spinning and finishing processes.',
    color: '#06B6D4',
    href: 'https://www.sapconinstruments.com/level-sensors-for-man-made-fibre-industry',
  },
  {
    icon: Package,
    name: 'Packaging Machines',
    desc: 'Precise material flow sensing for granules, powders and pellets on production lines.',
    color: '#4A6CF7',
    href: 'https://www.sapconinstruments.com/packaging',
  },
  {
    icon: Pill,
    name: 'Pharmaceuticals',
    desc: 'Hygienic flush-mount sensors for pharmaceutical vessels and chemical reactors.',
    color: '#06B6D4',
    href: 'https://www.sapconinstruments.com/level-sensors-for-pharmaceutical-industry',
  },
  {
    icon: Tractor,
    name: 'Poultry & Cattle Feed',
    desc: 'Rugged monitoring for feed silos, mixers and pelletizing equipment.',
    color: '#4A6CF7',
    href: 'https://www.sapconinstruments.com/level-sensors-for-poultry-and-cattle-feed',
  },
  {
    icon: Anvil,
    name: 'Steel & Metallurgy',
    desc: 'Heavy-duty sensors designed for extreme heat, dust and abrasive ores.',
    color: '#06B6D4',
    href: 'https://www.sapconinstruments.com/steel',
  },
  {
    icon: Leaf,
    name: 'Soybean Oil Processing',
    desc: 'Reliable level measurement for extractors, separators and oil storage tanks.',
    color: '#4A6CF7',
    href: 'https://www.sapconinstruments.com/soya',
  },
  {
    icon: Waves,
    name: 'Water Treatment Plant',
    desc: 'Continuous level monitoring for clean water, wastewater and chemical dosing.',
    color: '#06B6D4',
    href: 'https://www.sapconinstruments.com/level-sensors-for-water-treatment-plant',
  },
];

export default function Industries() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <section id="industries" className="relative ambient-bg py-20 lg:py-28 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="section-label mb-3">Industries We Serve</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050B1F] mb-4">
            Built for Every{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Industry
            </span>
          </h2>

        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {industries.slice(0, 3).map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div key={industry.name} className="fade-up" style={{ transitionDelay: `${i * 0.06}s` }}>
                <a
                  href={industry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 cursor-pointer h-full hover:-translate-y-2"
                  style={{
                    background: 'linear-gradient(160deg, #0D1438 0%, #0A0F2C 100%)',
                    border: `1px solid ${industry.color}60`,
                    boxShadow: `0 0 20px ${industry.color}40, inset 0 0 15px ${industry.color}20`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = `1px solid ${industry.color}`;
                    e.currentTarget.style.boxShadow = `0 0 35px ${industry.color}80, inset 0 0 25px ${industry.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = `1px solid ${industry.color}60`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${industry.color}40, inset 0 0 15px ${industry.color}20`;
                  }}
                >
                  {/* Top corner accent */}
                  <div
                    className="absolute top-0 right-0 w-8 h-8 opacity-80"
                    style={{ background: `linear-gradient(225deg, ${industry.color}60 0%, transparent 100%)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative"
                    style={{ background: `${industry.color}18`, border: `1px solid ${industry.color}30` }}
                  >
                    <Icon size={22} style={{ color: industry.color }} />
                  </div>

                  <h3 className="text-white font-bold text-base mb-2">{industry.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{industry.desc}</p>
                </a>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center fade-up">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-streak inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl transition-transform hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)' }}
          >
            View All Industries <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Bottom cut to dark */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(-3deg, #0A0F2C 49.5%, transparent 50%)' }}
      />
    </section>

      {/* Industries Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#050B1F]/90 backdrop-blur-xl flex items-center justify-center p-4 lg:p-12 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl bg-[#0D1840] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A6CF7] to-[#06B6D4]" />
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 lg:p-12 max-h-[85vh] overflow-y-auto custom-scrollbar">
                <div className="section-label mb-3">Sectors We Serve</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  Explore All Industries
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {industries.map((industry, i) => {
                    const Icon = industry.icon;
                    return (
                      <a
                        key={industry.name}
                        href={industry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 cursor-pointer h-full hover:-translate-y-2"
                        style={{
                          background: 'linear-gradient(160deg, #0D1438 0%, #0A0F2C 100%)',
                          border: `1px solid ${industry.color}60`,
                          boxShadow: `0 0 20px ${industry.color}40, inset 0 0 15px ${industry.color}20`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.border = `1px solid ${industry.color}`;
                          e.currentTarget.style.boxShadow = `0 0 35px ${industry.color}80, inset 0 0 25px ${industry.color}40`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.border = `1px solid ${industry.color}60`;
                          e.currentTarget.style.boxShadow = `0 0 20px ${industry.color}40, inset 0 0 15px ${industry.color}20`;
                        }}
                      >
                        <div
                          className="absolute top-0 right-0 w-8 h-8 opacity-80"
                          style={{ background: `linear-gradient(225deg, ${industry.color}60 0%, transparent 100%)` }}
                        />
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative"
                          style={{ background: `${industry.color}18`, border: `1px solid ${industry.color}30` }}
                        >
                          <Icon size={22} style={{ color: industry.color }} />
                        </div>
                        <h3 className="text-white font-bold text-base mb-2">{industry.name}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{industry.desc}</p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
