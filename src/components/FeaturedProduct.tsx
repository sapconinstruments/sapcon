import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, X } from 'lucide-react';

const specs = [
  { label: 'Input Power', value: '230 V AC' },
  { label: 'Temp Range', value: 'Up to 200° C' },
  { label: 'Output', value: '1NO, 1NC 6A' },
  { label: 'Switching', value: 'Single-point' },
  { label: 'Bulk Density', value: '≥ 0.5 g/cm³' },
  { label: 'Probe Length', value: '100–1000 mm' },
  { label: 'Wetted Parts', value: 'Al, SS-316, FKM' },
  { label: 'Mechanism', value: 'Foldable Paddle' },
];

const features = [
  'PESO Certified for hazardous zones',
  'Foldable paddle for easy installation',
  'Wide temperature range up to 200°C',
  'Suitable for all bulk solid materials',
];

const otherProducts = [
  {
    name: 'Orbit-Lite: Rotary Paddle Level Switch for Solids',
    href: 'https://www.sapconinstruments.com/products/Orbit-Lite-Rotating-Paddle-Level-Sensor-for-solids',
    image: 'https://www.sapconinstruments.com/files/Sapcon-Instruments-Orbit-Lite-Rotating-Paddle.webp',
    productType: 'Product Templates',
    itemCode: 'RPL',
  },
  {
    name: 'Float & Board Type Level Indicator',
    href: 'https://www.sapconinstruments.com/products/float-and-board-type-level-indicator',
    image: 'https://www.sapconinstruments.com/files/Sapcon-Instruments-Float-and-Borad-Leve-Indicatore07581.webp',
    productType: 'Product Templates',
    itemCode: 'MECH_FAB',
  },
  {
    name: 'Vibrosonde: Vibrating Rod Type Level Sensor for Solids',
    href: 'https://www.sapconinstruments.com/products/vibrating-rod-level-sensor',
    image: 'https://www.sapconinstruments.com/files/Vibrosonde-Vibrating-Rod-Level-Sensor46310b.webp',
    productType: 'Product Templates',
    itemCode: 'VS',
  },
  {
    name: 'Vital- Vibrating Fork Level Switch for Solids',
    href: 'https://www.sapconinstruments.com/products/vital-vibrating-fork-level-switch',
    image: 'https://www.sapconinstruments.com/files/Vital-Vibrating-Fork-Level-Sensor.webp',
    productType: 'Product Templates',
    itemCode: 'VITAL',
  },
  {
    name: 'Elixir- Tuning Fork Level Switch for Liquids',
    href: 'https://www.sapconinstruments.com/products/tuning-fork-level-switch',
    image: 'https://www.sapconinstruments.com/files/Elixir-Tuning-Fork-Level-Sensor.webp',
    productType: 'Product Templates',
    itemCode: 'ELIXIR',
  },
  {
    name: 'Vital-T: Tuning Fork Level Sensor for Solids',
    href: 'https://www.sapconinstruments.com/products/vital-t-tuning-fork-level-sensor',
    image: 'https://www.sapconinstruments.com/files/Vital-T-Level-Switch.webp',
    productType: 'Product Templates',
    itemCode: 'VT',
  },
  {
    name: 'Elixir-T-Uni: Tuning Fork Level Sensor for Liquids',
    href: 'https://www.sapconinstruments.com/products/elixir-t-uni-tuning-fork-level-switch',
    image: 'https://www.sapconinstruments.com/files/Elixir-T-Uni975b0d.webp',
    productType: 'Product Templates',
    itemCode: 'ETU',
  },
  {
    name: 'Coat-Endure: RF-Admittance Level Switch for Sticky Solids and Liquids',
    href: 'https://www.sapconinstruments.com/products/rf-admittance-level-switch',
    image: 'https://www.sapconinstruments.com/files/Coat-Endure-Admittance-Level-Sensor.webp',
    productType: 'Product Templates',
    itemCode: 'CE',
  },
  {
    name: 'Casper: Capacitive Level Sensor',
    href: 'https://www.sapconinstruments.com/products/casper-capacitive-level-sensor',
    image: 'https://www.sapconinstruments.com/files/Casper-Capacitive-Level-Switch-Full-PTFE.webp',
    productType: 'Product Templates',
    itemCode: 'CPR',
  },
  {
    name: 'Capvel-FUEL: Level Sensor/Transmitter for remote tracking of fuel',
    href: 'https://www.sapconinstruments.com/products/capvel-fuel-capacitance-level-transmitter',
    image: 'https://www.sapconinstruments.com/files/Capvel-FUEL_Fuel-Level-Sensor.webp',
    productType: 'Product Templates',
    itemCode: 'VAT',
  },
];

type ProductItem = {
  name: string;
  href: string;
  image: string;
  productType: string;
  itemCode: string;
};



export default function FeaturedProduct() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frameCount = 42;
    const images: HTMLImageElement[] = [];

    // Preload images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/3D/ezgif-frame-${frameNum}.png`;
      img.onload = () => {
        // Draw the first frame as soon as it's loaded
        if (i === 1) {
          drawFrame(1);
        }
      };
      images.push(img);
    }

    const drawFrame = (index: number) => {
      const img = images[index - 1];
      if (!img || !img.complete) return;

      // Maintain aspect ratio while fitting into canvas
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.min(hRatio, vRatio);

      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Pin starts when rect.top <= 0
      // Total scrollable track = section height - window height
      const totalScroll = rect.height - windowHeight;
      const scrolled = -rect.top;

      let progress = 0;
      if (scrolled > 0) {
        progress = scrolled / totalScroll;
      }

      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      // Map progress to frame index (1 to 42)
      let frameIndex = Math.floor(clampedProgress * frameCount) + 1;
      frameIndex = Math.min(Math.max(frameIndex, 1), frameCount);

      requestAnimationFrame(() => drawFrame(frameIndex));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial draw call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* SECTION 1: 3D Product Card with Animation */}
      <section id="products" ref={sectionRef} className="relative ambient-bg-dark h-[320vh]">
        {/* Header - Non-sticky */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-8">
          <div className="text-center fade-up visible">
            <div className="section-label mb-3">Featured Product</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Orbit
              <span
                className="ml-3"
                style={{
                  background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                -Lite
              </span>
            </h2>
          </div>
        </div>

        {/* Sticky wrapper with centered card */}
        <div className="sticky top-0 h-screen w-full overflow-visible flex items-center justify-center px-4 sm:px-6 lg:px-10">
          <div className="relative z-10 w-full max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 items-center">
              {/* Left: 3D Product Card */}
              <div className="fade-left visible flex flex-col items-center justify-center relative">
                <div
                  className="w-full max-w-[500px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(2,6,23,0.35)] p-3 sm:p-4 lg:p-6 xl:p-8 overflow-hidden"
                  style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)' }}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div>
                      <div className="text-white font-semibold text-sm uppercase tracking-wider">Orbit-Lite</div>
                      <div className="text-gray-400 text-xs sm:text-sm">Interactive 3D product view</div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-300">
                      Glass Card
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#08102A]/70 overflow-hidden">
                    {/* Scrolling Canvas */}
                    <canvas
                      ref={canvasRef}
                      width={800}
                      height={800}
                      className="w-full h-full min-h-[360px] lg:min-h-[480px] max-h-[55vh] lg:max-h-[65vh] object-contain relative z-10 cursor-ns-resize"
                    />
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-streak btn-dark mt-4 inline-flex w-full items-center justify-center gap-2 text-white font-semibold px-4 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-all whitespace-nowrap"
                  >
                    View All Products
                  </button>
                </div>
              </div>

              {/* Right: Key Features */}
              <div className="fade-right visible flex flex-col">
                <div className="mb-8">
                  <div className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Key Features</div>
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div
                        key={feature}
                        className="group relative overflow-hidden rounded-xl p-4 border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
                        style={{ background: 'rgba(255,255,255,0.03)' }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4A6CF7] to-[#06B6D4] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                            {index + 1}
                          </div>
                          <span className="text-gray-300 text-xs sm:text-sm leading-tight pt-0.5">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Product Details */}
      <section className="relative ambient-bg-dark py-16 sm:py-20 lg:py-28">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="fade-right visible flex flex-col">
            {/* Technical Specifications */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)' }}
              >
                <Zap size={18} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-xl">Technical Specifications</div>
                <div className="text-gray-500 text-sm">Industrial Grade Performance</div>
              </div>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-3 mb-12">
              {specs.map(({ label, value }) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-xl p-4 border border-white/5 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="relative z-10">
                    <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-1.5 transition-colors group-hover:text-gray-300">{label}</div>
                    <div className="text-white text-sm font-semibold">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Modal */}
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
              className="relative w-full max-w-4xl bg-[#0D1840] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A6CF7] to-[#06B6D4]" />
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 lg:p-12 max-h-[85vh] overflow-y-auto custom-scrollbar">
                <div className="section-label mb-3">Our Offerings</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  Explore All Products
                </h2>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
                  {otherProducts.map((product: ProductItem, idx: number) => (
                    <a
                      key={idx}
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-white">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain bg-white p-4 transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-white leading-snug mb-2">{product.name}</h3>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-4">
                          <span>{product.productType}</span>
                          <span className="text-gray-600">|</span>
                          <span>Item Code : {product.itemCode}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#06B6D4]">
                          Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
