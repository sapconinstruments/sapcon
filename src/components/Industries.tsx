import { Factory, Fuel, Package, Waves, Cog, FlaskConical, Wheat, Building2 } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    name: 'Cement & Steel',
    desc: 'Level monitoring in silos, hoppers, and clinker stores with dust-proof sensing.',
    color: '#4A6CF7',
  },
  {
    icon: Fuel,
    name: 'Oil & Gas',
    desc: 'Accurate level measurement in tanks, separators, and pipelines in hazardous zones.',
    color: '#06B6D4',
  },
  {
    icon: Package,
    name: 'Packaging',
    desc: 'Precise material flow sensing for granules, powders, and pellets on production lines.',
    color: '#4A6CF7',
  },
  {
    icon: Waves,
    name: 'Water Treatment',
    desc: 'Continuous level monitoring for clean water, wastewater, and chemical dosing systems.',
    color: '#06B6D4',
  },
  {
    icon: Cog,
    name: 'Power Generation',
    desc: 'Coal bunker and ash silo level monitoring for thermal and captive power plants.',
    color: '#4A6CF7',
  },
  {
    icon: FlaskConical,
    name: 'Chemicals & Pharma',
    desc: 'Hygienic flush-mount sensors for pharmaceutical vessels and chemical reactors.',
    color: '#06B6D4',
  },
  {
    icon: Wheat,
    name: 'Food & Grain',
    desc: 'FDA-compatible level switches for grain silos, flour mills, and food processing.',
    color: '#4A6CF7',
  },
  {
    icon: Building2,
    name: 'Mining',
    desc: 'Rugged sensing solutions for ore, coal, and aggregate in harsh mining environments.',
    color: '#06B6D4',
  },
];

export default function Industries() {
  return (
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div key={industry.name} className="fade-up" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div
                  className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 cursor-pointer h-full hover:-translate-y-2"
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
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom cut to dark */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(-3deg, #0A0F2C 49.5%, transparent 50%)' }}
      />
    </section>
  );
}
