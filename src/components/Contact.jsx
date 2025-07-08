import React from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-6 py-20 bg-gray-950 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center underline underline-offset-8 decoration-cyan-400">
        Get in Touch
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10"
          >
            <PhoneIcon className="h-6 w-6 text-cyan-400" />
            <a href="tel:+918950457638" className="text-sm hover:underline">
              +91 8950457638
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10"
          >
            <EnvelopeIcon className="h-6 w-6 text-cyan-400" />
            <a
              href="mailto:shivamtripathi00100@gmail.com"
              className="text-sm hover:underline"
            >
              shivamtripathi00100@gmail.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
            <a
              href="https://linkedin.com/in/pursuer-of-proficiency"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:underline"
            >
              linkedin.com/in/pursuer-of-proficiency
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
            <a
              href="https://github.com/pursuerofproficiency"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:underline"
            >
              github.com/pursuerofproficiency
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <form
  action="https://formspree.io/f/mrbkdpzq"  // 👈 Replace with your own Formspree endpoint
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    required
    placeholder="Your Name"
    className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="Your Email"
    className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
  />
  <textarea
    rows="5"
    name="message"
    required
    placeholder="Your Message"
    className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
  ></textarea>
  <button
    type="submit"
    className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition"
  >
    Send Message
  </button>
</form>
      </div>
    </motion.section>
  );
}
