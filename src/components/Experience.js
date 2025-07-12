import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Associate Software Engineer",
      company: "Exarta",
      location: "Lahore, Pakistan",
      duration: "Feb 2024 - Present",
      type: "Full-time",
      achievements: [
        "Architected and developed a comprehensive social media platform featuring real-time notifications, content management, and user engagement systems, utilizing React, Express.js, and Redis for optimal performance",
        "Integrated other 3D applications for event management and 3D user spaces",
        "Engineered a Shopify embedded application leveraging React and Node.js/Express framework, integrating Shopify Admin and Storefront APIs to enhance e-commerce functionality",
        "Translated complex UI/UX designs from Figma and Adobe XD into responsive, cross-browser compatible interfaces using modern CSS frameworks and semantic HTMLS",
        "Integrated multiple third-party services including OpenAI for AI capabilities, Mailjet for email automation, and Google OAuth for secure authentication, enhancing application functionality",
        "Implemented robust state management solutions using Zustand and React Context API to maintain application performance and data consistency across components",
        "Collaborated with cross-functional development teams to deliver multiple full-stack applications, ensuring timely project completion and adherence to technical specifications"
      ],
      technologies: ["React", "Node.js", "Express", "Redis", "Shopify API", "Tailwind CSS", "Zustand", "GraphQL"],
      highlights: [
        "Best Employee of the Team - Q3 2024 (Jul-Sep)",
        "Best Employee of the Team - Q4 2024 (Oct-Dec)"
      ]
    },
    {
      id: 2,
      position: "MERN Stack Intern",
      company: "Contegris Technology Solutions",
      location: "Lahore, Pakistan",
      duration: "Nov 2023 - Feb 2024",
      type: "Internship",
      achievements: [
        "Completed comprehensive training in React.js and Node.js through Udemy certification programs to strengthen full-stack development capabilities",
"Engineered a Gmail clone application utilizing React.js, Gmail API, and Google OAuth, implementing core email functionalities including composition, inbox management, message threading, and email forwarding systems", 
"Architected and developed a full-stack flight management system using MERN Stack (MongoDB, Express.js, React.js, Node.js) with complete CRUD operations and user authentication",
"Implemented Redux Toolkit for centralized state management, improving application performance and maintainability across complex data flows", 
"Designed responsive user interfaces using Tailwind CSS framework, ensuring cross-platform compatibility and modern UI/UX standards"      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit", "Gmail API", "Google OAuth", "Tailwind CSS"],
      highlights: []
    }
  ];

  return (
    <section
      name="experience"
      className="w-full bg-gradient-to-b from-gray-800 to-black py-20"
    >
      <div className="w-full mx-auto px-6 md:px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My journey as a software engineer, showcasing growth, achievements, and 
            contributions to innovative projects across different organizations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-12 md:mb-16">
              {/* Timeline Dot */}
              <div className="absolute left-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 hidden md:block"></div>
              
              {/* Experience Card */}
              <div className="md:ml-20 bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-blue-400 font-semibold text-lg">
                        {exp.company}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-2">
                      {exp.duration}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 leading-relaxed flex items-start gap-3">
                        <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-600 hover:border-blue-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                {exp.highlights.length > 0 && (
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      Recognition & Awards
                    </h4>
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-3">
                          <span className="text-yellow-300 font-medium">
                            🏆 {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;