import React from "react";
import { motion } from "framer-motion";
import work1 from "../../assets/pictur/work1.jpg";
import work2 from "../../assets/pictur/work2.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-12">
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4">
          About <span className="text-[#FFB300]">Share Food Bite</span>
        </h2>
        <p className="text-[#444444] text-lg max-w-3xl mx-auto">
          We believe no food should go to waste when someone nearby is hungry.
          Our mission is to collect surplus food from individuals, restaurants,
          and events, and share it with people in need — bringing smiles and
          hope to communities.
        </p>
      </motion.div>

      {/* ✅ Block 1 */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.img
          src={work1}
          alt="Collecting food"
          className="rounded-2xl shadow-md w-full object-cover"
          variants={fadeInUp}
          custom={0.2}
        />
        <motion.div variants={fadeInUp} custom={0.4}>
          <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-4">
            Collecting Food with Kindness
          </h3>
          <p className="text-[#444444] leading-relaxed">
            Every day, our volunteers visit restaurants, bakeries, and community
            kitchens to collect leftover but fresh food. We ensure proper
            hygiene and safe handling so that this food reaches the right hands
            — people who truly need it.
          </p>
        </motion.div>
      </motion.div>

      {/* ✅ Block 2 */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.div
          className="order-2 md:order-1"
          variants={fadeInUp}
          custom={0.4}
        >
          <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-4">
            Distributing with Love
          </h3>
          <p className="text-[#444444] leading-relaxed">
            Once collected, our team distributes the food across shelters,
            orphanages, and underprivileged communities. Each meal shared is a
            step toward reducing hunger and building a more caring society.
          </p>
        </motion.div>
        <motion.img
          src={work2}
          alt="Distributing food"
          className="order-1 md:order-2 rounded-2xl shadow-md w-full object-cover"
          variants={fadeInUp}
          custom={0.2}
        />
      </motion.div>
    </section>
  );
};

export default AboutUs;
