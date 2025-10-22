import React from "react";
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const OurSuccess = () => {
  const stats = [
    { number: 1200, label: "Meals Donated" },
    { number: 850, label: "Families Helped" },
    { number: 200, label: "Active Volunteers" },
    { number: 50, label: "Food Drives Organized" },
  ];

  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto px-4 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
          variants={item}
        >
          Our Success Stories 🌟
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-14"
          variants={item}
        >
          Together, we’ve created a community that shares, cares, and spreads
          hope. Every meal shared brings a smile and changes a life.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
        >
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} {...stat} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// ✅ Custom Counter Component (Framer Motion + CountUp)
const AnimatedCounter = ({ number, label }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-4xl font-extrabold text-orange-500 mb-2">
        {inView ? <CountUp end={number} duration={2.5} /> : "0"}+
      </h3>
      <p className="text-gray-700 font-medium">{label}</p>
    </motion.div>
  );
};

export default OurSuccess;
