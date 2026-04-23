import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'Stats', href: '#stats' },
  { label: 'R&D', href: '#rnd' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0F2C]/95 backdrop-blur-xl shadow-2xl border-b border-blue-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A6CF7] to-[#06B6D4] rounded clip-card group-hover:pulse-glow transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              {/* Diagonal stripes overlay */}
              <div
                className="absolute inset-0 rounded opacity-30"
                style={{
                  backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 4px)',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                }}
              />
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                SAPCON
              </span>
              <div className="text-[9px] tracking-[0.2em] uppercase text-[#4A6CF7] font-semibold leading-none">
                Instruments
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-streak btn-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg cursor-pointer"
            >
              Get a Quote
            </a>
            <a
              href="#contact"
              className="btn-streak text-white text-sm font-semibold px-5 py-2.5 rounded-lg cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)' }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0A0F2C]/98 border-t border-white/10 py-4 px-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-300 hover:text-white py-3 px-4 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 px-4 flex flex-col gap-3">
              <a href="#contact" className="btn-streak btn-dark text-white text-sm font-semibold px-5 py-3 rounded-lg text-center">
                Get a Quote
              </a>
              <a href="#contact" className="btn-streak text-white text-sm font-semibold px-5 py-3 rounded-lg text-center" style={{ background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)' }}>
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
