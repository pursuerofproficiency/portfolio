import React from "react";
import { motion } from "framer-motion";

const achievements = [
  "Fr. Rego Scholar Award for highest ICSE score + perfect in 7 subjects.",
  "Certificate of merit in Excalibur Annual Hackathon, NIT Kurukshetra.",
  "Won Market It, PPT and Astroventure events at Techspardha ’23.",
  "Won JAM & Hindi BPD at Confluence ’23; finalist in English BPD and creative writing.",
  "Semifinalist in JAM at IIT Delhi’s Rendezvous (2 editions).",
  "Received merit award among 35+ top teams in national debate at PCTE, Ludhiana.",
  "Winner of Erudite case-study + market research event at Techspardha ’24.",
  "First & second prizes in Declamation & Essay Writing, NIT Kurukshetra.",
  "Semifinalist in Theatrix stage play at Alcheringa ’24, IIT Guwahati.",
  "Honorable mentions in UNGA ’23 and UNHRC ’24 at NIT KKR MUN.",
  "Top 3% JEE Mains qualifier among 1M+ students.",
  "Qualified IOQM (International Olympiad in Mathematics) in Class 11.",
];

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="px-6 py-20 bg-gray-950"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center underline underline-offset-8 decoration-yellow-400">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 text-sm text-gray-300 p-4 rounded-xl shadow hover:shadow-yellow-400/30 transition duration-300"
          >
            <span className="inline-block text-yellow-300 font-bold mr-2">🏆</span>
            {item}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
