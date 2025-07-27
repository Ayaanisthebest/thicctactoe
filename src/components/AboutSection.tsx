'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassCard from './GlassCard';
import { Gamepad2, Sparkles, Zap, Users } from 'lucide-react';

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Gamepad2,
      title: "Quantum Strategy",
      description: "Experience Tic-Tac-Toe with mind-bending strategic depth. Every move creates ripples across dimensional game boards.",
      color: "text-blue-400"
    },
    {
      icon: Sparkles,
      title: "Liquid Glass UI",
      description: "Immerse yourself in a translucent, ethereal interface that responds to your every touch with fluid animations.",
      color: "text-purple-400"
    },
    {
      icon: Zap,
      title: "Neural Networks",
      description: "AI opponents that learn, adapt, and evolve. Each game creates smarter, more challenging adversaries.",
      color: "text-pink-400"
    },
    {
      icon: Users,
      title: "Cosmic Multiplayer",
      description: "Connect with players across the metaverse. Real-time battles with quantum entangled game states.",
      color: "text-teal-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-gradient"
            variants={itemVariants}
          >
            Beyond Traditional Gaming
          </motion.h2>
          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Step into a realm where classic gameplay meets quantum mechanics. 
            Our revolutionary Tic-Tac-Toe transcends dimensions, offering an 
            experience that challenges both mind and perception.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard 
                className="h-full group cursor-pointer" 
                magnetic={true}
                delay={index * 0.1}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`p-3 rounded-xl glass ${feature.color} flex-shrink-0`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gradient transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${
                      feature.color.includes('blue') ? '#00d4ff' :
                      feature.color.includes('purple') ? '#b347d9' :
                      feature.color.includes('pink') ? '#ff006e' : '#06ffa5'
                    }, transparent 70%)`
                  }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-white/90">
            Powered by Advanced Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['WebGL', 'Neural AI', 'Quantum Logic', 'Real-time Physics', 'Blockchain'].map((tech, index) => (
              <motion.div
                key={tech}
                className="glass px-4 py-2 rounded-full text-sm text-white/80"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  delay: 1 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200 
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
