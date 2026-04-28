import { Microscope, FlaskConical, ChevronRight } from 'lucide-react';

const timeline = [
  {
    year: '2021',
    title: 'PMI-XRF Testing Launch',
    desc: 'Commissioned PMI-XRF equipment for detecting alloys from Al to Pb, ensuring material integrity in every component.',
    tag: 'Quality Control',
  },
  {
    year: '2022',
    title: 'Hygienic Vibrating Fork',
    desc: 'New compact vibrating fork design enables flush-mounted, clean-in-place installation for pharmaceutical and food industries.',
    tag: 'Product Innovation',
  },
  {
    year: '2023',
    title: 'AS-Interface Integration',
    desc: 'Sapcon\'s vibrating fork series gains AS-Interface network protocol support, simplifying industrial automation wiring.',
    tag: 'Connectivity',
  },
  {
    year: '2024',
    title: 'PESO Certification — Elixir',
    desc: 'The Elixir Vibrating Fork Level Sensor achieved PESO certification for use in petroleum & explosive-safe zones.',
    tag: 'Certification',
  },
];

const highlights = [
  { icon: Microscope, label: 'In-house Testing Lab', value: 'PMI-XRF Certified' },
  { icon: FlaskConical, label: 'Annual R&D Investment', value: '10% of Revenue' },
];

export default function RnD() {
  return (
    <section id="rnd" className="relative ambient-bg py-20 lg:py-28 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="fade-left">
            <div className="section-label mb-3">Research & Development</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#050B1F] mb-5">
              Innovation at the{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Core
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              10% of annual revenue is reinvested into research — developing and upgrading level switches,
              transmitters and speed monitoring instruments to solve real industrial challenges.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="glass-light rounded-2xl p-5 border border-white/60 shadow-sm"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'linear-gradient(135deg, rgba(74,108,247,0.15), rgba(6,182,212,0.08))' }}
                  >
                    <Icon size={18} className="text-[#4A6CF7]" />
                  </div>
                  <div
                    className="text-xl font-bold mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-gray-500 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="fade-up">
          <div className="text-[#050B1F] font-bold text-2xl mb-10 text-center">
            Development{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Milestones
            </span>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[60px] top-6 bottom-6 w-px hidden md:block"
              style={{ background: 'linear-gradient(180deg, #4A6CF7, #06B6D4, transparent)' }}
            />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className="group relative flex gap-6 items-start fade-up"
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  {/* Year + dot */}
                  <div className="flex-shrink-0 flex flex-col items-center w-[60px]">
                    <div
                      className="w-4 h-4 rounded-full timeline-dot flex-shrink-0 relative z-10"
                      style={{ background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)' }}
                    />
                    <div className="text-[#4A6CF7] font-bold text-xs mt-1 tracking-wider">{item.year}</div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl p-5 border border-gray-200 hover:border-[#4A6CF7]/40 transition-all duration-400 shadow-sm hover:shadow-lg group-hover:-translate-y-1"
                    style={{ background: 'white', transition: 'all 0.3s ease' }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-[#0A0F2C] font-bold text-base">{item.title}</h3>
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{
                              background: 'linear-gradient(135deg, rgba(74,108,247,0.1), rgba(6,182,212,0.08))',
                              color: '#4A6CF7',
                              border: '1px solid rgba(74,108,247,0.2)',
                            }}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                      <ChevronRight
                        size={18}
                        className="text-gray-300 group-hover:text-[#4A6CF7] transition-colors flex-shrink-0 mt-1"
                      />
                    </div>
                    {/* Hover stripe line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"
                      style={{ background: 'linear-gradient(90deg, #4A6CF7, #06B6D4)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
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
