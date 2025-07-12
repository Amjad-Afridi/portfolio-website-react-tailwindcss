import React from "react";

const About = () => {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "Computer Science Graduate from Sukkur IBA University"
    },
    {
      icon: "💼",
      title: "Experience",
      description: "~2 Years of Professional Full-Stack Development"
    },
    {
      icon: "🚀",
      title: "Projects",
      description: "Built Multiple projects including Products from Ground Up"
    },
    {
      icon: "⚡",
      title: "Expertise",
      description: "React.js, Node.js, Express.js , MongoDB, Redis, Tailwind CSS etc"
    }
  ];

  const skills = [
    "Full-Stack Development",
    "Frontend Development", "Backend Development","Responsive Design",
    "API Development",
    "Business Logic Implementation",
    "Problem Solving",
    "Team Collaboration",
  ];

  return (
    <section
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Passionate Full-Stack Developer
              </h3>
              
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  I am a <span className="text-white font-semibold">Computer Science graduate</span> from 
                  <span className="text-blue-400 font-semibold"> Sukkur IBA University</span> with 
                  <span className="text-white font-semibold"> nearly two years of professional experience</span> in 
                  full-stack web development using modern technologies like React.js, Node.js, and Express.js.
                </p>
                
                <p>
                  Throughout my career, I have successfully contributed to the development of 
                  <span className="text-white font-semibold"> multiple products from the ground up</span>, 
                  handling both front-end and back-end responsibilities with equal expertise. My experience 
                  spans across diverse challenges including responsive design, API development, database 
                  modeling, and complex business logic implementation.
                </p>
                
                <p>
                  My <span className="text-blue-400 font-semibold">combined academic background and industry experience</span> 
                  enable me to approach complex problems with a structured, solution-oriented mindset. I am 
                  enthusiastic about collaborating with forward-thinking teams and continuing to evolve as a 
                  developer in dynamic environments.
                </p>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Professional Highlights</h3>
            
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mt-8">
              <h4 className="text-xl font-bold text-white mb-4 text-center">
                Professional Journey
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">~2</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-blue-100 text-sm">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;