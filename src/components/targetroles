import React from 'react';
import { LineChart, Truck, Compass, Rocket } from 'lucide-react';

const TargetRoles = () => {
  const roles = [
    {
      title: "Business/Data Analyst",
      focus: "Translating data into strategic business decisions and process optimization.",
      keySkills: ["SQL Analytics", "Dashboarding", "Process Mapping"],
      icon: LineChart,
      accent: "from-blue-500 to-cyan-400"
    },
    {
      title: "Supply Chain Analyst",
      focus: "Optimizing logistics, inventory turnover, and procurement workflows.",
      keySkills: ["Inventory Management", "Vendor Relations", "Operations"],
      icon: Truck,
      accent: "from-orange-500 to-amber-400"
    },
    {
      title: "Product Manager",
      focus: "Bridging engineering feasibility with user needs to drive product lifecycle.",
      keySkills: ["Product Roadmap", "User Research", "Agile Strategy"],
      icon: Compass,
      accent: "from-purple-500 to-pink-400"
    },
    {
      title: "Growth Strategist",
      focus: "Leveraging data to scale customer acquisition and marketing efficiency.",
      keySkills: ["Funnel Optimization", "User Psychology", "Conversion Tracking"],
      icon: Rocket,
      accent: "from-rose-500 to-pink-400"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase">Where I'm Headed</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Roles I'm Pursuing</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-neutral-900/60 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${role.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${role.accent} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-base font-bold text-white mb-2">{role.title}</h3>
                <p className="text-gray-400 text-xs mb-6 leading-relaxed flex-grow">{role.focus}</p>

                <div className="space-y-2 mt-auto pt-4 border-t border-gray-800">
                  {role.keySkills.map(skill => (
                    <div key={skill} className="flex items-center text-xs font-medium text-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${role.accent} mr-2`} />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetRoles;
