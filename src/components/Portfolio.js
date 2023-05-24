import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      title: "complete backend for mobile application",
    },
    {
      id: 2,
      src: reactParallax,

      title: "blog app in React.js",
    },
    {
      id: 3,
      src: navbar,

      title: "youtube clone in HTML and CSS",
    },
    {
      id: 4,
      src: reactSmooth,
      title: "landing page frontend in tailwindcss ",
    },
    {
      id: 5,
      src: installNode,
      title: "portfolio website in React and tailwindcss",
    },
    {
      id: 6,
      src: reactWeather,
      title: "stripe implementation in node.js",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className=" flex flex-col w-full max-w-screen-lg mx-auto py-24 px-8 md:px-16 ">
        <div className="flex flex-col gap-4 mb-16">
          <p className="text-4xl font-bold text-white ">Portfolio</p>
          <p className="text-gray-400 text-lg max-w-screen-lg">
            The following are some of my projects in different technologies{" "}
          </p>
        </div>

        {/* grid of cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map(({ id, src, title }) => (
            <div
              key={id}
              className="flex flex-col gap-4 rounded-lg border border-gray-400 border-t-0 shadow-md shadow-gray-400  "
            >
              <img
                src={src}
                alt=""
                className="rounded-lg hover:scale-105 duration-300"
              />
              <div className=" flex items-center justify-evenly px-2 py-3">
                <button className="mx-auto text-gray-400 text-lg hover:scale-105 duration-300">
                  Demo
                </button>
                <button className=" text-gray-400 mx-auto text-lg hover:scale-105 duration-300">
                  Code
                </button>
              </div>
              <div className="flex border-t-2 border-gray-400  px-4 py-4">
                <div className="flex justify-center mx-auto text-gray-400">
                  {title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default portfolio;
