import React from "react";
import { motion } from "framer-motion";

// ৭টা ইমেজ ইমপোর্ট করো
import vol1 from "../../assets/volainter/volainter1.jpg";
import vol2 from "../../assets/volainter/volainter2.jpg";
import vol3 from "../../assets/volainter/volainter3.jpg";
import vol4 from "../../assets/volainter/volainter4.jpg";
import vol5 from "../../assets/volainter/volainter5.jpg";
import vol6 from "../../assets/volainter/volainter6.jpg";
import vol7 from "../../assets/volainter/volainter7.jpg";

const OurVolunteers = () => {
  const volunteers = [vol1, vol2, vol3, vol4, vol5, vol6, vol7];

  return (
    <section className=" max-w-9/12 mx-auto py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-6 md:px-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4">
          Our <span className="text-orange-500">Volunteers</span>
        </h2>
        <p className="text-[#444444] max-w-3xl mx-auto mb-10">
          Meet the kind hearts who make our mission possible — 
          our passionate volunteers collecting, sharing, and spreading happiness.
        </p>
      </div>

      {/* Marquee Animation */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // speed control
          }}
        >
          {/* প্রথম লুপ */}
          {volunteers.map((img, index) => (
            <div
              key={index}
              className="min-w-[180px] h-[180px] md:min-w-[220px] md:h-[220px] rounded-full overflow-hidden shadow-md border-4 border-orange-500"
            >
              <img
                src={img}
                alt={`Volunteer ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* দ্বিতীয় লুপ (smooth infinite loop effect এর জন্য) */}
          {volunteers.map((img, index) => (
            <div
              key={`dup-${index}`}
              className="min-w-[180px] h-[180px] md:min-w-[220px] md:h-[220px] rounded-full overflow-hidden shadow-md border-4 border-orange-500"
            >
              <img
                src={img}
                alt={`Volunteer duplicate ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurVolunteers;
