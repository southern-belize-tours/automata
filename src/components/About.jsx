import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Industry Partners' },
  ];

  const features = [
    {
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest advancements in AI, machine learning, and robotics to deliver state-of-the-art automation solutions.',
    },
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of manufacturing, logistics, energy, and other industrial sectors ensures tailored solutions.',
    },
    {
      title: 'End-to-End Support',
      description: 'From initial consultation to implementation and ongoing maintenance, we\'re with you every step of the way.',
    },
    {
      title: 'Proven ROI',
      description: 'Our solutions deliver measurable results with average efficiency gains of 40% and cost reductions of 30%.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Why Choose Automata Forge</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not just automation contractors—we're your partners in digital transformation,
            combining deep industry knowledge with cutting-edge AI technology
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-dark-900/50 backdrop-blur-sm border border-primary-500/20 rounded-xl hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="flex gap-4 p-6 bg-dark-900/30 backdrop-blur-sm border border-primary-500/10 rounded-xl hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-cyan-400 rounded" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary-500/10 to-cyan-500/10 border border-primary-500/20 rounded-2xl"
        >
          <h3 className="text-3xl font-display font-bold mb-6 text-white">
            Our Mission
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            To empower industries worldwide with intelligent automation solutions that drive innovation,
            enhance productivity, and create sustainable competitive advantages in an increasingly digital world.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We believe that the future of manufacturing and industrial operations lies in the seamless
            integration of human expertise and artificial intelligence. Our goal is to make advanced
            automation accessible, practical, and transformative for businesses of all sizes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
