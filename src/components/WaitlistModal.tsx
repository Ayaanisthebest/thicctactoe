'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Mail, User, Sparkles } from 'lucide-react';
import GlassButton from './GlassButton';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Auto close after success
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              className="glass-strong rounded-3xl p-8 max-w-md w-full relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Floating Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [-20, 20, -20],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 p-2 glass rounded-full hover:glass-strong transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
              >
                <X size={18} className="text-white/80" />
              </motion.button>

              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 glass rounded-full mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="text-blue-400" size={24} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gradient mb-2">
                      Join the Future
                    </h3>
                    <p className="text-white/70">
                      Be among the first to experience the evolution of gaming
                    </p>
                  </motion.div>

                  {/* Form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Name Input */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User 
                          size={18} 
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" 
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 glass rounded-xl bg-transparent border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </motion.div>

                    {/* Email Input */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail 
                          size={18} 
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" 
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 glass rounded-xl bg-transparent border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <GlassButton
                        className="w-full relative overflow-hidden"
                        variant="primary"
                        size="lg"
                      >
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <motion.div
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <span>Joining...</span>
                          </div>
                        ) : (
                          <span className="text-gradient font-semibold">
                            Reserve Your Spot
                          </span>
                        )}
                      </GlassButton>
                    </motion.div>
                  </motion.form>

                  {/* Footer */}
                  <motion.p
                    className="text-xs text-white/50 text-center mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    No spam, just updates on the future of gaming
                  </motion.p>
                </>
              ) : (
                /* Success State */
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 glass rounded-full mb-6"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="text-green-400"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    >
                      ✓
                    </motion.div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gradient mb-2">
                    Welcome to the Future!
                  </h3>
                  <p className="text-white/70">
                    You&apos;re now on the waitlist. Get ready for something extraordinary.
                  </p>
                  
                  {/* Celebration particles */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: ['#00d4ff', '#b347d9', '#ff006e'][i % 3],
                        left: '50%',
                        top: '50%',
                      }}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: (Math.cos(i * 30 * Math.PI / 180) * 100),
                        y: (Math.sin(i * 30 * Math.PI / 180) * 100),
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.1 * i
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
