import { Zap, Linkedin, Facebook, Youtube, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Products: ['Level Instruments', 'Speed Monitoring', 'Flow Meters', 'Transmitters'],
  'Level Sensors': ['Level Switches', 'Level Transmitters', 'Vibrating Fork', 'Rotary Paddle'],
  Industries: ['Cement & Steel', 'Oil & Gas', 'Pharma & Food', 'Water Treatment'],
  Support: ['Blogs', 'Help Articles', 'Datasheets', 'Videos'],
};

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050B1F] overflow-hidden">
      {/* Stripe bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 22px, rgba(74,108,247,0.04) 22px, rgba(74,108,247,0.04) 24px)',
        }}
      />

      {/* Top stripe separator */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(74,108,247,0.3), rgba(6,182,212,0.3), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid lg:grid-cols-6 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <div
                  className="absolute inset-0 rounded"
                  style={{
                    background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  SAPCON
                </div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-[#4A6CF7] font-semibold leading-none">
                  Instruments Pvt. Ltd.
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              India's leading manufacturer of level switches, level transmitters, and speed
              monitoring instruments for over 40 years.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#4A6CF7]/50 hover:bg-[#4A6CF7]/10 transition-all duration-300 text-gray-400 hover:text-[#4A6CF7]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-[#4A6CF7] text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition-opacity -mt-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-600 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Sapcon Instruments Pvt Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            {/* Stripe design accent */}
            <div className="flex gap-1 items-center">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 rounded-full"
                  style={{
                    height: `${8 + i * 3}px`,
                    background: `linear-gradient(180deg, #4A6CF7, #06B6D4)`,
                    opacity: 0.3 + i * 0.1,
                  }}
                />
              ))}
            </div>
            <span className="text-gray-600 text-xs">Precision. Innovation. Reliability.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
