import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black  text-white"
    >
      {" "}
      <div className="flex flex-col justify-center  mx-auto max-w-screen-lg px-8 md:px-16 py-24">
        <p className="text-4xl font-bold mb-8">About</p>
        <div className="max-w-screen-lg text-lg text-gray-400">
          <p>
            I am a recent computer science graduate from Sukkur IBA University,
            having expertise in MERN stack. I have proficiency in various web
            development technologies, such as HTML, CSS, Tailwind CSS,
            JavaScript, React, Node.js, Express, and MongoDB, which sets me
            apart as a versatile developer in the field. During my time at
            Sukkur IBA University, I gained a solid foundation in computer
            science principles, algorithms, and data structures which build my
            problem-solving skills and helps me approach software development
            challenges with a systematic mindset. Additionally, I have honed my
            programming skills by working on numerous projects that have allowed
            I to apply theoretical concepts to practical scenarios.
          </p>
          <br />
          <p>
            Throughout my academic journey and project experiences, I have
            tackled various challenges, such as creating responsive web designs,
            implementing complex business logic, and managing databases. By
            utilizing the MERN stack, I have showcased my ability to develop
            end-to-end web applications, effectively bridging the gap between
            front-end and back-end development. my expertise in full stack MERN
            development positions me as a valuable asset to any organization or
            team seeking to build modern and dynamic web applications. With my
            strong foundation in computer science and practical experience in
            web development technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
