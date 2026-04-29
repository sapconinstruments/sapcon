import { useEffect, useRef, useState } from 'react';
import { Users, Factory, Globe as Globe2, Award, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Award, value: 40, suffix: '+', label: 'Years of Experience', desc: 'Trusted industrial expertise' },
  { icon: Users, value: 10, suffix: 'K+', label: 'Clients Worldwide', desc: 'Across 50+ countries' },
  { icon: CheckCircle, value: 100, suffix: 'K+', label: 'Installations', desc: 'Successful deployments' },
  { icon: Factory, value: 400, suffix: 'K+', label: 'BOM Variants', desc: 'Custom configurations' },
  { icon: Globe2, value: 10, suffix: '%', label: 'Revenue in R&D', desc: 'Annual investment' },
];

function StatCard({ icon: Icon, value, suffix, label, desc, index }: {
  icon: typeof Award; value: number; suffix: string; label: string; desc: string; index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    };
    const timer = setTimeout(() => requestAnimationFrame(tick), index * 150);
    return () => clearTimeout(timer);
  }, [isVisible, value, index]);

  return (
    <div
      ref={ref}
      className="tilt-card group relative rounded-2xl p-8 overflow-hidden border border-gray-100 hover:border-[#4A6CF7]/40 transition-all duration-500 fade-up shadow-lg hover:shadow-2xl hover:shadow-[#4A6CF7]/15 hover:-translate-y-2"
      style={{
        transitionDelay: `${index * 0.1}s`,
        background: 'linear-gradient(160deg, #ffffff 0%, #f8fafc 100%)',
      }}
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(74,108,247,0.12) 0%, transparent 70%)' }}
      />
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-6 right-6 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(74,108,247,0.5), transparent)' }}
      />

      <div className="relative">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
          style={{ background: 'linear-gradient(135deg, rgba(74,108,247,0.2), rgba(6,182,212,0.1))', border: '1px solid rgba(74,108,247,0.2)' }}
        >
          <Icon size={22} style={{ color: '#4A6CF7' }} />
        </div>

        <div className="flex items-end gap-1 mb-2">
          <span
            className="font-bold leading-none"
            style={{
              fontSize: '3rem',
              background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {count.toLocaleString()}
          </span>
          <span
            className="text-2xl font-bold mb-1"
            style={{
              background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {suffix}
          </span>
        </div>

        <div className="text-gray-900 font-semibold text-base mb-1">{label}</div>
        <div className="text-gray-600 text-sm">{desc}</div>
      </div>

    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,108,247,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16 fade-up">
          <div className="section-label mb-3">By the Numbers</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050B1F] mb-4">
            Decades of{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Industrial Trust
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Numbers that reflect our unwavering commitment to quality, precision and innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {/* Manufacturing highlight */}
        <div
          className="mt-12 rounded-2xl p-8 border border-gray-100 fade-up shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#4A6CF7]/30 hover:shadow-[#4A6CF7]/10"
          style={{ background: 'linear-gradient(135deg, rgba(74,108,247,0.08), rgba(6,182,212,0.04))' }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-label mb-3 mx-auto">Manufacturing Excellence</div>
            <h3 className="text-[#050B1F] text-2xl font-bold mb-3">
              Small Batch. Big Precision.
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              With close to 400K BOMs maintained, Sapcon manufactures level sensors with an MOQ
              as small as one unit — making us the ideal partner for both prototyping and mass production.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom diagonal to light */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(-3deg, #F5F7FA 49.5%, transparent 50%)' }}
      />
    </section>
  );
}
