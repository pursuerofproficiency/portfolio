import React from 'react';
const LearningSprint = () => {
  const sprints = [
    { skill: "SQL", progress: "I am moving beyond basic syntax to master complex data manipulation techniques essential for business analysis. My focus is on writing efficient queries that aggregate massive datasets from fragmented sources. I have successfully implemented Joins and Subqueries to link disparate tables, which is critical for maintaining data integrity in supply chain management. By optimizing these queries, I can drastically reduce processing time for real-time reporting. This technical capability allows me to transform raw database entries into actionable business insights that drive strategic decision-making.", color: "bg-blue-500" },
    { skill: "Excel", progress: "I utilize Excel as a powerful business intelligence tool to model complex scenarios and visualize operational performance. My workflow emphasizes the use of Pivot Tables and VLOOKUPs to quickly identify trends and anomalies within large-scale inventory logs. I build dynamic dashboards that track Key Performance Indicators (KPIs), enabling stakeholders to monitor supply chain health at a glance. Beyond just data entry, I focus on constructing automated models that can scale with business growth. This expertise ensures that I can bridge the gap between technical data outputs and the strategic needs of management.", color: "bg-green-500" },
    { skill: "Growth Strategy", progress: "I am actively applying psychological principles and data-backed insights to craft high-conversion marketing communications. My strategy involves identifying overlooked customer segments and tailoring value-based narratives that resonate with their specific needs. I use the feedback loops from my current sales experience to refine my top-of-funnel conversion tactics continuously. By analyzing engagement metrics, I am learning how to optimize ad spend and maximize customer lifetime value effectively. This holistic approach ensures that my growth initiatives are not only creative but also grounded in measurable business outcomes.", color: "bg-purple-500" }
  ];
  return (
    <section className="py-12 bg-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4">The Learning Sprint</h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Coming from a background in Mechanical Engineering, I am applying the same 
          analytical rigor to digital systems. I'm currently on a deep-dive to master 
          the data tools that drive modern growth. I have always been analysing things around 
          and trying to increase the efficiency of systems and now, I am trying to master the art.
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
            Currently enjoying learning and constantly updating this dashboard. <span className="text-pink-400 cursor-pointer hover:underline">Let's catch up at work!</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default LearningSprint;
