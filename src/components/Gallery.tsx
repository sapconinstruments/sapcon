import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, Grid } from 'lucide-react';

const images = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/${i + 1}.jpeg`
}));

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [previewImage, setPreviewImage] = useState<typeof images[0] | null>(null);

  // Auto-slider logic
  useEffect(() => {
    if (isHovered || showGrid || previewImage) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered, showGrid, previewImage]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Keyboard controls for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (previewImage) setPreviewImage(null);
        else if (showGrid) setShowGrid(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage, showGrid]);

  return (
    <>
      <section id="gallery" className="relative ambient-bg py-20 lg:py-28 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="section-label mb-3">Industrial Installations</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050B1F] mb-4 tracking-tight">
            Real-world applications across industries
          </h2>
        </div>

        {/* Dark Glass Card for Slider */}
        <div
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-[#4A6CF7]/20 shadow-2xl shadow-blue-900/10 fade-up"
          style={{ background: 'linear-gradient(160deg, #0D1840 0%, #0A0F2C 100%)' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slider Image Area */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={`Installation ${images[currentIndex].id}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            </AnimatePresence>

            {/* Top Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20">
              <motion.div
                key={currentIndex + (isHovered ? "-paused" : "")}
                className="h-full bg-gradient-to-r from-[#4A6CF7] to-[#06B6D4]"
                initial={{ width: "0%" }}
                animate={{ width: isHovered ? "100%" : "100%" }}
                transition={{ duration: isHovered ? 0 : 3, ease: "linear" }}
                style={{ width: isHovered ? "100%" : "auto" }}
              />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-transparent to-transparent pointer-events-none z-10" />

            {/* Slider Controls (Arrows) */}
            <div className="absolute inset-0 flex items-center justify-between px-4 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4A6CF7] transition-all transform hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4A6CF7] transition-all transform hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Expand button */}
            <button
              onClick={() => setPreviewImage(images[currentIndex])}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <Maximize2 size={18} />
            </button>

          </div>

          {/* Bottom Control Bar */}
          <div className="p-6 flex items-center justify-center border-t border-white/10 relative z-20">
            <button
              onClick={() => setShowGrid(true)}
              className="flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-lg transition-all border border-white/10 hover:border-white/30"
            >
              <Grid size={16} /> View More
            </button>
          </div>
        </div>
      </div>
      </section>

      {/* Grid Modal */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050B1F]/90 backdrop-blur-xl flex flex-col p-6 lg:p-12 overflow-y-auto"
          >
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-white">All Installations</h3>
                <button
                  onClick={() => setShowGrid(false)}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border border-white/10"
                    onClick={() => setPreviewImage(img)}
                  >
                    <img
                      src={img.src}
                      alt={`Installation ${img.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Preview */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 lg:p-12"
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-full rounded-2xl overflow-hidden flex flex-col items-center"
            >
              <img
                src={previewImage.src}
                alt={`Installation ${previewImage.id}`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
