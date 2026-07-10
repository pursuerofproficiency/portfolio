import React from 'react';
const LearningSprint = () => {
  const sprints = [
    { skill: "SQL", progress: "Advanced Joins & Aggregates", color: "bg-blue-500" },
    { skill: "Excel", progress: "Pivot Tables & Data Visualization", color: "bg-green-500" },
    { skill: "Growth Strategy", progress: "Applying User Psychology to Ad Copy", color: "bg-purple-500" }
  ];
  return (
    <section className="py-12 bg-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4">The Learning Sprint</h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Coming from a background in Mechanical Engineering, I am applying the same 
          analytical rigor to digital systems. I'm currently on a deep-dive to master 
          the data tools that drive modern growth.
        </p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {sprints.map((item, index) => (
            <div key={index} className="p-6 border border-gray-800 bg-neutral-900 rounded-xl hover:shadow-lg hover:border-gray-700 transition-all">
              <div className={`w-3 h-3 rounded-full ${item.color} mb-4`}></div>
              <h3 className="font-semibold text-white">{item.skill}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.progress}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-neutral-900 border border-gray-800 rounded-lg text-center">
          <p className="text-gray-300 font-medium">
            Currently building a new dashboard. <span className="text-pink-400 cursor-pointer hover:underline">Ask me about it!</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default LearningSprint;
