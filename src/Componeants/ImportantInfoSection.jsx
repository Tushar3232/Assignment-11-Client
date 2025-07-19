import { motion } from "framer-motion";

const infoPoints = [
  "Donated food must be fresh, safe, and well-packaged.",
  "Always check expiry date and quality before donation.",
  "Perishable items should be delivered quickly.",
  "Avoid donating half-eaten or spoiled food.",
  "Use our support hotline for urgent help or pickup requests."
];

const ImportantInfoSection = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-rose-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Important Guidelines
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-center max-w-2xl mx-auto text-gray-700 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Please follow these important instructions while donating food to ensure safety and quality for all recipients.
        </motion.p>

        {/* Points List */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {infoPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-5 shadow-md border-l-4 border-rose-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-800 text-md">✅ {point}</p>
            </motion.div>
          ))}
        </div>

        {/* Hotline Info */}
        <motion.div
          className="mt-10 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-semibold">
            Emergency Helpline:{' '}
            <span className="text-red-600 font-bold">+880 1234 567 890</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImportantInfoSection;

