'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassCard from './GlassCard';
import { Play, Volume2, Maximize2 } from 'lucide-react';

export default function GamePreview() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Mock game board state
  const gameBoard = [
    ['X', '', 'O'],
    ['', 'O', ''],
    ['X', '', 'X']
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Experience the Game
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Witness the evolution of a classic. Every interaction creates ripples 
            of light, every move echoes through dimensions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Game Preview */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="relative p-8 group">
              {/* Game Controls Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="flex items-center space-x-3 text-white/60">
                  <Volume2 size={18} className="cursor-pointer hover:text-white transition-colors" />
                  <Maximize2 size={18} className="cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>

              {/* Game Board */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-4 aspect-square max-w-md mx-auto">
                  {gameBoard.flat().map((cell, index) => (
                    <motion.div
                      key={index}
                      className="glass border border-white/20 rounded-xl flex items-center justify-center relative cursor-pointer group/cell"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)"
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ 
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 200 
                      }}
                    >
                      {/* Cell Content */}
                      {cell === 'X' && (
                        <motion.div
                          className="text-4xl font-bold text-blue-400"
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: 1 + index * 0.1, type: "spring" }}
                        >
                          ×
                        </motion.div>
                      )}
                      {cell === 'O' && (
                        <motion.div
                          className="w-8 h-8 border-4 border-purple-400 rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + index * 0.1, type: "spring" }}
                        />
                      )}
                      
                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover/cell:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Particle Effect on Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover/cell:opacity-100 transition-opacity">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                              left: `${20 + i * 30}%`,
                              top: `${20 + i * 20}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Winning Line Animation */}
                <motion.div
                  className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={inView ? { scaleX: 1, opacity: 0.8 } : { scaleX: 0, opacity: 0 }}
                  transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                />
              </div>

              {/* Play Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="glass-button flex items-center space-x-3">
                  <Play size={20} className="text-white" />
                  <span className="text-white font-medium">Play Demo</span>
                </div>
              </motion.div>
            </GlassCard>
          </motion.div>

          {/* Game Features */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                Immersive Gameplay
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Every move creates cascading visual effects. Watch as your strategy 
                unfolds with particle trails, light distortions, and quantum animations.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Reactive Environment",
                  description: "The game board responds to your presence with subtle animations and ambient lighting.",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  title: "Dimensional Physics",
                  description: "Moves create ripples that affect neighboring dimensions in multi-board gameplay.",
                  color: "from-purple-400 to-purple-600"
                },
                {
                  title: "Neural Opponents",
                  description: "AI that learns your strategy and adapts its playstyle in real-time.",
                  color: "from-pink-400 to-pink-600"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} mt-3 flex-shrink-0`} />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 border border-white/10 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-10 w-24 h-24 border border-purple-400/20 rounded-lg"
        animate={{
          rotate: -360,
          y: [-10, 10, -10],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </section>
  );
}
