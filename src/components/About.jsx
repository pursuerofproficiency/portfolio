import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-10 px-6 bg-black"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 underline underline-offset-8 decoration-pink-500"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10 shadow-lg text-gray-300 text-sm md:text-base"
        >
          <p>
            I’m <span className="font-semibold text-white">Devesh Tripathi</span> — passionate about combining{" "}
            <span className="text-pink-400">data science</span>,{" "}
            <span className="text-purple-400">operations strategy</span>, and{" "}
            <span className="text-blue-400">user-centric product development</span> to drive measurable impact.
            <br />
            <br />
            With experience across analytics, supply chains, and tech-enabled businesses, I thrive at the
            intersection of <span className="text-emerald-400">problem-solving</span> and
            <span className="text-yellow-400"> execution</span>.
          </p>

          <motion.a
            href="/AnalystDT.pdf"
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-block border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition text-sm font-medium"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

