import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  Leaf, Heart, Sparkles, ArrowRight, Phone, Shield, Users, Award, Clock,
  Star, MapPin, Calendar, CheckCircle, ChevronRight, Flower2, Wind
} from "lucide-react";
import clinic from "../assets/images/clinic.png";
const testimonials = [
  { text: "After 10 years of back pain, I can finally sleep. Thank you!", author: "Priya Sharma", role: "Patient", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" },
  { text: "Lost 15kg naturally with their diet plan. No gym!", author: "Rajesh Kumar", role: "Patient", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" },
  { text: "My migraines are gone after 8 sessions. Unbelievable!", author: "Anita Desai", role: "Patient", rating: 5, image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=80&h=80&fit=crop" },
  { text: "Skin glows like never before. All natural!", author: "Vikram Singh", role: "Patient", rating: 5, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop" },
  { text: "Post-pregnancy recovery was smooth and fast.", author: "Neha Patel", role: "Patient", rating: 5, image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=80&h=80&fit=crop" },
  { text: "Finally sleeping 8 hours! No more insomnia.", author: "Amit Roy", role: "Patient", rating: 5, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop" },
];

const services = [
  { title: "Panchakarma Detox", desc: "Full-body purification with medicated oils", icon: Wind, duration: "5-21 days", glow: "from-emerald-400 to-teal-600" },
  { title: "Abhyanga Massage", desc: "Warm herbal oil full-body therapy", icon: Heart, duration: "60 mins", glow: "from-amber-400 to-orange-600" },
  { title: "Shirodhara", desc: "Calming oil pour on forehead", icon: Sparkles, duration: "45 mins", glow: "from-indigo-400 to-purple-600" },
  { title: "Nasya Therapy", desc: "Nasal cleansing for clarity", icon: Leaf, duration: "30 mins", glow: "from-lime-400 to-green-600" },
  { title: "Kati Basti", desc: "Lower back pain relief pool", icon: Shield, duration: "45 mins", glow: "from-rose-400 to-pink-600" },
  { title: "Herbal Steam", desc: "Detox through medicated steam", icon: Flower2, duration: "20 mins", glow: "from-cyan-400 to-blue-600" },
];

const doctors = [
  { name: "Dr. Anjali Verma", spec: "Panchakarma Specialist", exp: "18 years", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop" },
  { name: "Dr. Rohan Mehta", spec: "Herbal Medicine Expert", exp: "15 years", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop" },
  { name: "Dr. Kavya Nair", spec: "Women’s Wellness", exp: "12 years", image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?w=400&h=400&fit=crop" },
];

const stats = [
  { value: "20,000+", label: "Happy Patients" },
  { value: "22", label: "Years of Healing" },
  { value: "15", label: "Expert Doctors" },
  { value: "99%", label: "Success Rate" },
];

// Floating Leaf Particle Component
const FloatingLeaf = ({ delay = 0 }) => (
  <motion.div
    className="absolute text-green-500/20 pointer-events-none"
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
      ease: "linear"
    }}
  >
    <Leaf className="w-8 h-8" />
  </motion.div>
);

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-emerald-50 via-cyan-50 to-white dark:from-gray-950 dark:via-emerald-950 dark:to-gray-900 text-gray-800 dark:text-gray-100 overflow-x-hidden">
      {/* Floating Leaves Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <FloatingLeaf key={i} delay={i * 1.5} />
        ))}
      </div>

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

      {/* HERO SECTION - Parallax + 3D Glow */}
  <section ref={heroRef} className="relative py-32 px-6 overflow-hidden">
  {/* Background image */}
  <img
    src={clinic}  // 🔹 replace with your background image path
    alt="Ayurveda Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark overlay for contrast */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Subtle animated gradient glow */}
  <motion.div
    style={{ y: y1 }}
    className="absolute inset-0 bg-gradient-to-br from-white/5 via-teal-200/5 to-emerald-100/5 dark:from-emerald-600/20 dark:to-teal-800/20"
  />
  <motion.div
    style={{ y: y2, scale }}
    className="absolute top-20 -left-40 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"
  />
  <motion.div
    style={{ y: y2, scale }}
    className="absolute bottom-20 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"
  />

  {/* Content */}
  <div className="max-w-7xl mx-auto text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Leaf animation */}
      <motion.div
        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="flex justify-center mb-8"
      >
        <div className="relative">
          <Leaf className="w-20 h-20 text-white" />
          <motion.div
            className="absolute inset-0 blur-xl bg-white/40"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Headline */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
        Pure Healing, Naturally
      </h1>

      {/* Subtitle */}
      <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light">
        Ancient Ayurvedic wisdom meets modern care. Rejuvenate your body, mind, and soul with personalized natural therapies.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <motion.a
          href="/treatments"
          className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-700 font-bold text-lg rounded-2xl shadow-xl hover:bg-emerald-50 transition-all"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Therapies
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="w-6 h-6" />
          </motion.div>
        </motion.a>

        <motion.a
          href="/about"
          className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles className="w-6 h-6" /> Learn Ayurveda
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>



      {/* STATS - Animated Counters */}
      <section className="py-20 px-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                className="group"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Glass Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600"
          >
            Why Patients Trust Us
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "100% Natural", desc: "No chemicals. Only pure herbs & oils." },
              { icon: Users, title: "Expert Team", desc: "BAMS & MD certified healers." },
              { icon: Award, title: "Proven Results", desc: "99% patient satisfaction rate." },
              { icon: Clock, title: "Flexible Hours", desc: "Morning, evening & weekend slots." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20">
                  <item.icon className="w-14 h-14 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - 3D Tilt Cards */}
      <section className="py-28 px-6 bg-gradient-to-b from-cyan-50/50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">Signature Therapies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Handcrafted from 5000 years of Ayurvedic science.</p>
          </motion.div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15, rotateX: 10, rotateZ: -2 }}
                className="group relative preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur-xl" style={{ backgroundImage: `linear-gradient(to bottom right, ${service.glow.split(' ')[1]}, ${service.glow.split(' ')[3]})` }} />
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.glow} p-3 mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.desc}</p>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">⏱ {service.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <motion.a href="/treatments" className="inline-block text-emerald-600 font-bold text-lg hover:text-teal-600 transition" whileHover={{ x: 10 }}>
              View All Treatments <ChevronRight className="inline w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Morphing Carousel */}
      <section className="py-28 px-6 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl md:text-6xl font-bold text-center mb-20">
            Real Stories, Real Healing
          </motion.h2>
          <div className="relative h-80 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-10 max-w-2xl text-center shadow-2xl border border-white/30">
                  <img src={testimonials[currentTestimonial].image} alt="" className="w-24 h-24 rounded-full mx-auto mb-6 object-cover ring-4 ring-white/50" />
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xl italic mb-6 leading-relaxed">"{testimonials[currentTestimonial].text}"</p>
                  <p className="text-lg font-bold">— {testimonials[currentTestimonial].author}</p>
                  <p className="text-sm opacity-80">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === currentTestimonial ? 'bg-white w-8' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS - 3D Hover Cards */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">Meet Our Healers</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Trained in classical Ayurveda with decades of wisdom.</p>
          </motion.div>
          <div className="grid gap-12 md:grid-cols-3">
            {doctors.map((doctor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -20, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="h-80 overflow-hidden">
                    <img src={doctor.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">{doctor.spec}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{doctor.exp} experience</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center bg-gradient-to-t from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
            Begin Your Healing Today
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            One consultation can change your life. Let nature heal you.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-7 h-7" />
            Book Your Session Now
            <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}