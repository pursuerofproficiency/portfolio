import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Mechanical Engineering",
    school: "National Institute of Technology, Kurukshetra",
    year: "2022 – Present",
  },
  {
    degree: "ISC – Class 12 (92.5%)",
    school: "St. Joseph’s College, Prayagraj",
    year: "2022",
  },
  {
    degree: "ICSE – Class 10 (98.6%, City Topper)",
    school: "St. Joseph’s College, Prayagraj",
    year: "2020",
  },
];

export default function Education() {
  return (
    <motion.section
      id="education"
      className="px-6 py-20 bg-gray-950"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center underline underline-offset-8 decoration-pink-500">
        Education
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-pink-500/40 rounded-full hidden sm:block"></div>

        {/* Timeline Entries */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 sm:left-4 top-1 w-3 h-3 bg-pink-500 rounded-full"></div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-pink-500/30 transition duration-300">
                <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                <p className="text-sm text-gray-400">{edu.school}</p>
                <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
