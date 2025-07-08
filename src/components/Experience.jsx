import React from "react";
import { motion } from "framer-motion";

const workExperience = [
  {
    title: "Intern – Design & Analytics",
    company: "SEPL (Saraswati Engineering Pvt. Ltd.)",
    period: "June – July 2025",
    details: [
      "Worked on CAD design and mechanical component modeling.",
      "Used Excel-based analytics to identify production inefficiencies.",
      "Collaborated with operations team to recommend tooling improvements.",
    ],
  },
  {
    title: "Project Trainee – Analytics & Strategy",
    company: "DRDO – Defence Research and Development Organisation",
    period: "June – July 2023",
    details: [
      "Worked on IC engine analytics and ECU optimization using ML.",
      "Built simulation workflows for diagnostics and spare part logistics.",
      "Explored Monte Carlo modeling and GAMS tools for defense use cases.",
    ],
  },
];

const positionsOfResponsibility = [
  {
    title: "Executive Member – Event Strategy & Management",
    company: "MAD – Managing and Directing Club, NIT Kurukshetra",
    period: "2022 – Present",
    details: [
      "Core organizer of Confluence, NIT Kurukshetra’s annual cultural fest.",
      "Led cross-functional teams across 3 departments with 5K+ attendees.",
      "Managed artist outreach, vendor contracts, and campus-wide logistics.",
    ],
  },
  {
    title: "Editor",
    company: "JAM – Just Another Magazine, NIT Kurukshetra",
    period: "2023 – Present",
    details: [
      "Wrote and edited longform content spanning satire, opinion, and culture.",
      "Collaborated with design and editorial teams to produce monthly editions.",
    ],
  },
  {
    title: "Executive – Literary & Debating",
    company: "ELAD – English Literary and Debating Club",
    period: "2022 – Present",
    details: [
      "Organized campus-wide debating championships and writing contests.",
      "Won Best Delegate at national MUNs and formal oratory events.",
      "Delivered workshops on speechwriting, debating, and adjudication.",
    ],
  },
  {
    title: "Core Team Member",
    company: "TEDxNITKKR",
    period: "2022 – 2023",
    details: [
      "Curated speaker list and managed TEDx Talk format execution.",
      "Led venue logistics, technical coordination, and promotional outreach.",
      "Ensured TEDx licensing, compliance, and post-production workflows.",
    ],
  },
  {
    title: "Coordinator – Strategy & Alumni Engagement",
    company: "NITKKR Alumni Association",
    period: "2021 – 2022",
    details: [
      "Designed and ran virtual alumni interaction series across time zones.",
      "Boosted alumni engagement by 35% through structured outreach.",
      "Organized mentorship initiatives and networking events.",
    ],
  },
  {
    title: "Head – Corporate Strategy & Operations",
    company: "Startup Cell, NIT Kurukshetra",
    period: "2023 – Present",
    details: [
      "Formulated strategic partnerships and incubator relationships.",
      "Led internal process development for campus startups.",
      "Oversaw event operations and outreach for early-stage ventures.",
    ],
  },
  {
    title: "Head – Organising Team",
    company: "Josephest (Inter-School Cultural Fest)",
    period: "July – October 2021",
    details: [
      "Led the city's largest inter-school cultural fest with 2000+ attendees.",
      "Headed the announcing and hospitality committees.",
      "Oversaw coordination between 10+ schools, vendors, and internal teams.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="px-6 py-20 bg-gray-950"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center underline underline-offset-8 decoration-pink-500">
        Experience
      </h2>

      {/* Work Experience */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-white text-center">
          Work Experience
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {workExperience.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-pink-400 mb-1">{exp.title}</h4>
              <p className="text-sm text-gray-300 mb-2 italic">{exp.company}</p>
              <p className="text-xs text-gray-500 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                {exp.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Positions of Responsibility */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-white text-center">
          Positions of Responsibility
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {positionsOfResponsibility.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-purple-400 mb-1">{exp.title}</h4>
              <p className="text-sm text-gray-300 mb-2 italic">{exp.company}</p>
              <p className="text-xs text-gray-500 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                {exp.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
