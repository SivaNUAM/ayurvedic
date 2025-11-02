import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const FloatingLeaf = ({ delay = 0 }) => (
  <motion.div
    className="absolute text-emerald-500/10 pointer-events-none"
    initial={{ y: -50, x: Math.random() * window.innerWidth, rotate: 0 }}
    animate={{
      y: window.innerHeight + 100,
      x: Math.random() * window.innerWidth,
      rotate: 360,
    }}
    transition={{
      duration: 15 + Math.random() * 10,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
  >
    <Leaf className="w-8 h-8" />
  </motion.div>
);

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden bg-gradient-to-t from-emerald-50 via-cyan-50 to-white dark:from-gray-950 dark:via-emerald-950 dark:to-gray-900">
      {/* Floating Leaves Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <FloatingLeaf key={i} delay={i * 2} />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.div
              className="flex justify-center md:justify-start items-center gap-3"
              whileHover={{ scale: 1.05 }}
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-xl"
              >
                <Leaf className="w-7 h-7 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                Ananda Ayurveda
              </h2>
            </motion.div>

            <p className="text-gray-600 dark:text-gray-300 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Reconnecting your mind, body, and spirit through the ancient wisdom of Ayurveda.
            </p>

            <div className="flex justify-center md:justify-start gap-3 pt-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-md hover:shadow-xl transition-all group"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {["Home", "About", "Treatments", "Doctors", "Contact"].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-all cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400">Visit Us</h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                456 Harmony Lane, Rishikesh, India
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                +91 98765 43210
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                heal@anandaayurveda.com
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-emerald-200 dark:border-emerald-800 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
            © 
            <motion.span
              key={year}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-medium text-emerald-600 dark:text-emerald-400"
            >
              {year}
            </motion.span>
            Ananda Ayurveda. All rights reserved.
            <Heart className="w-3 h-3 text-emerald-500 inline-block ml-1 animate-pulse" />
          </p>
        </motion.div>
      </div>

      {/* Glowing Orb */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-emerald-400/20 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}