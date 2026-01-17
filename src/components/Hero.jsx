import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full"
          >
            <span className="text-primary-400 font-semibold text-sm tracking-wider">
              NEXT-GENERATION INDUSTRIAL AUTOMATION
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
          >
            <span className="text-gradient glow-text">
              Automate
            </span>
            <br />
            <span className="text-white">
              The Future of Industry
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Harness the power of artificial intelligence to transform your industrial operations.
            We deliver cutting-edge automation solutions that drive efficiency, reduce costs, and unlock new possibilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-primary-500/40 hover:shadow-primary-500/60"
            >
              <span className="relative z-10">Schedule Consultation</span>
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border-2 border-primary-500/50 hover:border-primary-400 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary-500/10"
            >
              Explore Solutions
            </button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 hidden lg:block"
        >
          <div className="w-20 h-20 border border-primary-500/30 rounded-lg rotate-45 backdrop-blur-sm" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-10 hidden lg:block"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
