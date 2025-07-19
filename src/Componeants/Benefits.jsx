import { motion } from "framer-motion";

const benefits = [
  {
    title: "Easy Food Donation",
    description: "Donate or request food in just a few clicks."
  },
  {
    title: "Saves Time",
    description: "Reduce waste and save time & resources."
  },
  {
    title: "Community Support",
    description: "Connect with locals and build a helpful community."
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Benefits = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
