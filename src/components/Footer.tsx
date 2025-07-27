'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, MessageCircle, Mail, Zap } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const footerLinks = [
    {
      title: 'Game',
      links: [
        { name: 'Play Demo', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Roadmap', href: '#' },
        { name: 'Beta Access', href: '#' },
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Discord', href: '#' },
        { name: 'Forums', href: '#' },
        { name: 'Tournaments', href: '#' },
        { name: 'Leaderboard', href: '#' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Bug Reports', href: '#' },
        { name: 'Feedback', href: '#' },
      ]
    },
  ];

  return (
    <footer className="relative bg-black/30 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(179, 71, 217, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <motion.div
                  className="w-8 h-8 glass rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Zap className="text-blue-400" size={18} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gradient">
                  FutureTic
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Revolutionizing classic gaming with quantum mechanics, 
                liquid glass aesthetics, and neural AI. The future of 
                strategy gaming starts here.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="glass w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <social.icon size={18} />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05), duration: 0.6 }}
                  >
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors relative group"
                    >
                      {link.name}
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full"
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="glass rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Stay in the Loop
              </h4>
              <p className="text-white/60">
                Get the latest updates on game development and early access opportunities.
              </p>
            </div>
            <div className="flex gap-3 min-w-0 md:min-w-fit">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 glass rounded-lg bg-transparent border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <motion.button
                className="glass-button px-6 py-2 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/50 text-sm">
            © 2025 FutureTic. All rights reserved. Built with passion for the future of gaming.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </footer>
  );
}
