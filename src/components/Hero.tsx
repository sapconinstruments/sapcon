import { useState, useEffect } from 'react';
import { ArrowRight, Shield, Award, Cpu } from 'lucide-react';

const typingPhrases = [
  "Precision-Driven Industrial Solutions",
  "40+ Years of Expertise",
  "15,000+ Trusted Clients",
  "Advanced Level & Speed Monitoring Systems",
  "Built for Durability & Accuracy"
];
const badges = [
  { icon: Shield, label: 'ISO 9001:2015' },
  { icon: Award, label: 'PESO Certified' },
  { icon: Cpu, label: '40+ Years' },
];

export default function Hero() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    const typeSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000); // pause at end of phrase
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      } else {
        setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/hero.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Lighter overlay so background stays visible while text remains readable */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-[#050B1F]/45 transition-opacity duration-[1500ms] ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
      />

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-14 sm:pb-16 w-full">
        {/* Main hero panel */}
        <div className="relative w-full p-4 sm:p-6 md:p-12 lg:p-16 overflow-hidden">

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto w-full">
            {/* Mobile: logo first, desktop: text first */}
            <div
              className="flex-shrink-0 fade-up relative flex items-center justify-center order-1 lg:order-2"
              style={{ transitionDelay: '0.15s' }}
            >
              <div
                className="absolute top-[-14%] left-1/2 -translate-x-1/2 w-[170%] h-[120%] pointer-events-none animate-pulse"
                style={{
                  background: 'radial-gradient(ellipse at top center, rgba(186, 230, 253, 0.95) 0%, rgba(125, 211, 252, 0.45) 26%, rgba(56, 189, 248, 0.18) 48%, transparent 74%)',
                  filter: 'blur(34px)',
                  transform: 'translateX(-50%) skewX(-10deg)',
                  zIndex: -1,
                  animationDuration: '3.6s',
                  animationTimingFunction: 'ease-in-out',
                }}
              />

              <div
                className="absolute top-[8%] left-[50%] -translate-x-1/2 w-[135%] h-[82%] pointer-events-none animate-pulse"
                style={{
                  background: 'linear-gradient(135deg, rgba(224, 242, 254, 0.0) 0%, rgba(191, 219, 254, 0.34) 35%, rgba(125, 211, 252, 0.18) 55%, rgba(224, 242, 254, 0.0) 100%)',
                  filter: 'blur(22px)',
                  borderRadius: '9999px 9999px 45% 45%',
                  transform: 'translateX(-50%) rotate(-6deg)',
                  zIndex: -1,
                  animationDuration: '3.8s',
                  animationTimingFunction: 'ease-in-out',
                  animationDelay: '0.4s',
                }}
              />

              {/* Outer gradient ring */}
              <div
                className="rounded-full p-[3px]"
                style={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #a855f7 50%, #ec4899 100%)',
                  boxShadow: '0 0 30px rgba(236, 72, 153, 0.4), 0 0 30px rgba(6, 182, 212, 0.4)'
                }}
              >
                {/* Dark gap */}
                <div className="rounded-full p-3 md:p-4 bg-[#0A0F2C]">
                  {/* Inner cyan ring */}
                  <div
                    className="rounded-full p-[3px]"
                    style={{
                      background: '#06B6D4',
                      boxShadow: '0 0 15px rgba(6, 182, 212, 0.6), inset 0 0 10px rgba(6, 182, 212, 0.4)'
                    }}
                  >
                    {/* Logo Container */}
                    <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full bg-white flex items-center justify-center overflow-hidden relative z-10">
                      <img
                        src="/logo.png"
                        alt="Sapcon Logo"
                        className="w-full h-full object-contain scale-[1.15]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left: Text content */}
            <div className="w-full lg:w-auto max-w-xl lg:text-left text-center order-2 lg:order-1 bg-black/20 backdrop-blur-[1px] rounded-2xl p-4 sm:p-5">
              <div className="w-fit bg-white/10 border border-white/40 backdrop-blur-sm flex items-center px-4 py-2 rounded-full shadow-sm mb-5 fade-left lg:mx-0 mx-auto">
                <span className="text-white text-xs font-semibold tracking-wider uppercase">
                  Industrial Intelligence
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold text-white leading-tight mb-4 fade-left tracking-tight"
                style={{ transitionDelay: '0.1s' }}
              >
            <span 
              className="inline-block text-[1.1em] text-white"
              style={{ color: '#FFFFFF', opacity: 1, textShadow: '0 2px 8px rgba(0, 0, 0, 0.45)' }}
            >
              Sapcon
            </span>
                <br />
                <span
                  className="relative inline-block" 
                  style={{
                    background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Instruments
                </span>
              </h1>

              <h2
                className="text-xl lg:text-2xl font-medium text-gray-300 mb-6 fade-left h-8 lg:h-10 flex items-center justify-center lg:justify-start"
                style={{ transitionDelay: '0.15s' }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4A6CF7]">
                  {text}
                </span>
                <span className="w-[2px] h-[1em] bg-[#06B6D4] ml-1 animate-pulse"></span>
              </h2>



              {/* CTA Buttons & Social */}
              <div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 fade-left"
                style={{ transitionDelay: '0.3s' }}
              >
                <a
                  href="#products"
                  className="btn-streak flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl mr-4"
                  style={{ background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)' }}
                >
                  Explore Products <ArrowRight size={17} />
                </a>
              </div>

              {/* Badges */}
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-3 fade-left"
                style={{ transitionDelay: '0.4s' }}
              >
                {badges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="bg-white/10 border border-white/40 backdrop-blur-sm flex items-center gap-2 px-4 py-2 rounded-full shadow-sm"
                  >
                    <Icon size={13} className="text-[#4A6CF7]" />
                    <span className="text-white text-xs font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  );
}
