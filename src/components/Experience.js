import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
const Experience = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node js",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className=" flex flex-col w-full max-w-screen-lg mx-auto py-24 px-8 md:px-16">
        <div className="flex flex-col gap-4 mb-16">
          <p className="text-4xl font-bold text-white  ">Experience</p>
          <p className="text-gray-400 text-lg max-w-screen-lg">
            The following are some of the technologies i have expertise in
          </p>
        </div>

        {/* grid of cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "flex flex-col gap-4 rounded-lg border  border-t-0 shadow-md " +
                style
              }
            >
              <img
                src={src}
                alt=""
                className="rounded-lg hover:scale-105 duration-300 w-32 mx-auto"
              />
              <div className="flex justify-center items-center">
                <button className="text-gray-400 text-lg py-4 hover:scale-105 duration-300">
                  {title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
