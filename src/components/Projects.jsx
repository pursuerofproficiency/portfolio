import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Customer Churn & Sentiment Analysis",
    role: "Business Analyst / Data Analyst",
    description:
      "Predicted customer churn using logistic regression and performed sentiment analysis using NLP to uncover dissatisfaction drivers. Visualized insights in Power BI dashboards.",
    tech: ["Python", "Pandas", "NLTK", "scikit-learn", "Power BI"],
    github: "https://github.com/pursuerofproficiency/churnanalysis",
    
  },
  {
    title: "Market Basket & Price Optimization",
    role: "Product Manager / Business Analyst",
    description:
      "Applied association rule mining to find frequently bought products. Built a price elasticity model to optimize pricing strategies.",
    tech: ["Python", "MLxtend", "Seaborn", "SQL"],
    github: "https://github.com/example/market-basket",
    live: "https://market-basket-app.vercel.app",
  },
  {
    title: "Demand Forecasting & Inventory Optimization",
    role: "Supply Chain Analyst / Data Analyst",
    description:
      "Forecasted demand using ARIMA and Prophet, and built an inventory optimization model to reduce holding and stockout costs.",
    tech: ["Python", "Prophet", "ARIMA", "PuLP"],
    github: "https://github.com/example/forecasting-inventory",
    live: "https://forecast-optimizer.app",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-gray-950"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center underline underline-offset-8 decoration-pink-500">
        Highlighted Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm italic text-pink-400 mb-2">{project.role}</p>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 text-xs text-white px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-2 flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
