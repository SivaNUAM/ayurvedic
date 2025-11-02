import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, Leaf, Heart, Sparkles, Users, Award, Clock } from "lucide-react";

const FloatingLeaf = ({ delay = 0 }) => (
  <motion.div
    className="absolute text-emerald-500/10 pointer-events-none"
    initial={{ y: -100, x: Math.random() * window.innerWidth, rotate: 0 }}
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

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  const stats = [
    { icon: Heart, value: "20,000+", label: "Happy Patients" },
    { icon: Users, value: "22", label: "Years of Healing" },
    { icon: Award, value: "15", label: "Expert Doctors" },
    { icon: Clock, value: "99%", label: "Success Rate" },
  ];

  const timeline = [
    { year: "2003", title: "Founded in Rishikesh", desc: "Began as a small clinic by the Ganges" },
    { year: "2010", title: "Introduced Panchakarma", desc: "First center in North India" },
    { year: "2018", title: "Digital Wellness", desc: "Launched online consultations" },
    { year: "2025", title: "Global Reach", desc: "Healing patients in 40+ countries" },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-emerald-50 via-cyan-50 to-white dark:from-gray-950 dark:via-emerald-950 dark:to-gray-900">
      {/* Floating Leaves */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <FloatingLeaf key={i} delay={i * 1.5} />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div
        style={{ y: y1 }}
        className="relative py-32 px-6 text-center"
      >
        <motion.div
          style={{ y: y2, scale }}
          className="absolute top-20 -left-40 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl animate-pulse"
        />
        <motion.div
          style={{ y: y2, scale }}
          className="absolute bottom-20 -right-40 w-80 h-80 bg-teal-300/30 rounded-full blur-3xl animate-pulse delay-700"
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="flex justify-center"
            >
              <div className="relative">
                <Leaf className="w-20 h-20 text-emerald-600" />
                <motion.div
                  className="absolute inset-0 blur-xl bg-emerald-400"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Healing Since 2003
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Rooted in the sacred foothills of the Himalayas, Ananda Ayurveda blends 5000-year-old wisdom with modern care to restore your natural balance.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="py-20 px-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, type: "spring" }}
                className="group"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-3 text-emerald-600 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
            Our Journey
          </h2>
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`flex flex-col md:flex-row gap-6 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className="text-3xl font-bold text-emerald-600">{item.year}</div>
                  <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
                </div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full ring-8 ring-emerald-500/20" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-32 px-6 text-center bg-gradient-to-t from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
            Begin Your Healing Journey
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            One consultation can transform your life. Let nature guide you back to balance.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-7 h-7" />
            Book Your Session
            <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.a>
        </div>
      </motion.div>

      {/* Floating CTA Button */}
      <motion.a
        href="/contact"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-full shadow-2xl backdrop-blur-md border border-white/20 hover:shadow-emerald-500/50 transition-all group"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="w-5 h-5 group-hover:animate-pulse" />
        <span className="font-bold text-lg">Book Healing</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}