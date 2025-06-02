import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const reverseTextVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  const infiniteScrollVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="bg-[#0a0a0a] w-full overflow-hidden">
      {/* Feature sections */}
      {[
        {
          title: "Precision. Style. Innovation.",
          content: [
            "KRYOS is a smartwatch reimagined — where powerful technology meets timeless sophistication. Designed for individuals who demand more than just functionality, KRYOS delivers an experience that seamlessly blends cutting-edge innovation with unmatched elegance.",
            "Built using premium materials and engineered to adapt to your lifestyle, KRYOS is the ultimate fusion of performance and style. Whether you're tracking your health, managing your schedule, or staying connected on the go, this watch is more than just a device — it's a personal assistant on your wrist.",
            "Its ultra-clear AMOLED display ensures crisp visuals under any lighting, while the intuitive interface allows effortless navigation through features like heart rate monitoring, step tracking, sleep analysis, real-time notifications, music control, and more.",
          ],
          image: "/view1.jpg",
          reverse: false,
        },
        {
          title: "KRYOS for Gym & Fitness Enthusiasts",
          content: [
            "KRYOS isn't just a smartwatch—it's your fitness partner, motivator, and performance coach packed into one sleek, powerful device. Designed for those who push boundaries, challenge limits, and chase goals.",
            "From the moment you step into the gym, KRYOS adapts to your movement. With real-time heart rate monitoring, calorie tracking, oxygen level detection, and customizable workout modes, it provides insights that go beyond basic stats.",
            "KRYOS helps you stay accountable with performance summaries, daily targets, and weekly reports. Its built-in motivational alerts keep you focused, while the powerful AI workout assistant suggests smarter routines based on your goals.",
          ],
          image: "/view9.jpg",
          reverse: true,
        },
        {
          title: "KRYOS for Work & Productivity",
          content: [
            "KRYOS is more than just a tech accessory — it's the ultimate productivity companion for professionals, entrepreneurs, and creators who refuse to waste a second.",
            "From managing your calendar to receiving smart notifications, calls, and messages without touching your phone, KRYOS keeps you in the loop while minimizing distractions.",
            "With custom reminders, silent alarms, and goal tracking features, KRYOS becomes a central part of your daily rhythm. Whether you're preparing for a presentation or deep in creative work, the watch supports your workflow.",
          ],
          image: "/view8.jpg",
          reverse: false,
        },
      ].map((section, index) => (
        <section
          key={index}
          className={`py-20 px-6 lg:px-24 ${
            index % 2 === 0 ? "bg-[#0f0f0f]" : "bg-[#0a0a0a]"
          }`}
        >
          <div
            ref={ref}
            className={`max-w-7xl mx-auto flex flex-col ${
              section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-16`}
          >
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={imageVariants}
            >
              <motion.img
                src={section.image}
                alt={section.title}
                className="rounded-3xl object-cover w-full h-auto shadow-xl hover:shadow-2xl transition-shadow duration-500"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={section.reverse ? reverseTextVariants : textVariants}
            >
              <h2 className="text-4xl font-bold text-[#00C2FF] mb-8">
                {section.title}
              </h2>
              <div className="space-y-6 text-gray-300">
                {section.content.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    className="text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              <motion.button
                className="mt-8 px-6 py-3 border border-[#00C2FF] text-[#00C2FF] rounded-full hover:bg-[#00C2FF]/10 transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Stats section */}
      <section className="py-20 bg-gradient-to-r from-[#00141f] to-[#003145]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why KRYOS Stands Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { value: "48hr", label: "Battery Life" },
              { value: "100+", label: "Watch Faces" },
              { value: "50m", label: "Water Resistance" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-black/30 rounded-xl p-8 text-center backdrop-blur-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={statsVariants}
                custom={index}
              >
                <div className="text-5xl font-bold text-[#00C2FF] mb-2">
                  {stat.value}
                </div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Infinite scrolling gallery */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-6"
              variants={infiniteScrollVariants}
              animate="animate"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={`/view${i}.jpg`}
                    alt={`KRYOS Watch View ${i}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <motion.div
                  key={`dup-${i}`}
                  className="flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={`/view${i}.jpg`}
                    alt={`KRYOS Watch View ${i}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience KRYOS?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join thousands of satisfied customers who have elevated their daily
            life with KRYOS smartwatch technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="px-8 py-4 bg-[#00C2FF] text-black rounded-full hover:bg-[#00a8e0] transition-colors duration-300 font-medium text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors duration-300 font-medium text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Main;
