import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

const SCROLL_THRESHOLD = 350;

export function FloatingScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > SCROLL_THRESHOLD;
      setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
    };

    // Initial check in case page starts scrolled down
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 pointer-events-none">
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.92 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#00695C] text-white shadow-[0_4px_16px_rgba(0,105,92,0.28)] hover:bg-[#004D40] hover:shadow-[0_6px_20px_rgba(0,105,92,0.36)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C] focus-visible:ring-offset-2 transition-[background-color,box-shadow,transform] duration-200 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.25]" aria-hidden="true" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
