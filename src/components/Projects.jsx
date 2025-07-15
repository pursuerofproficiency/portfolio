import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
  title: "Sales Forecasting with Time Series Models",
  role: "Data Analyst / Forecasting Analyst",
  description:
    "Forecasted product sales using models like ARIMA, SARIMA, Holt-Winters, and Linear Regression. Identified the best model through RMSE evaluation, highlighting linear regression's effectiveness in seasonal-trend data.",
  tech: ["Python", "Pandas", "NumPy", "statsmodels", "scikit-learn", "Matplotlib"],
  github: "https://github.com/pursuerofproficiency/ML_salesforecasting",
},
  {
    title: "Feature Usage Impact Dashboard",
    role: "Product Manager / Data Analyst",
    description:
      "Merged user and usage data to label feature adoption. Performed revenue analysis and built a Tableau dashboard to visualize business impact and usage trends.",
    tech: ["Python", "Pandas", "Scipy", "Matplotlib", "Tableau"],
    github: "https://github.com/pursuerofproficiency/featureimpactanalysis",
  },
  {
    title: "Supply Chain Analysis- Capstone Project",
    role: "Supply Chain Analyst / Data Analyst",
    description:
      "Optimized supply chain operations by analyzing sales, logistics, and inventory data using Python, MySQL, and Power BI; delivered insights that improved profitability and reduced costs.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "MySQL", "Power BI"],
    github: "https://github.com/pursuerofproficiency/supplychaincapstone-project",
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
