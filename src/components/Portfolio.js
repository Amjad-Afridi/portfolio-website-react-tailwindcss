import React from "react";
import node_backend from "../assets/portfolio/arrayDestruct.jpg";
import react_blog_app from "../assets/portfolio/react-blog-app.jpg";
import youtube_clone from "../assets/portfolio/youtube-clone.png";
import landing_page from "../assets/portfolio/landing-page.png";
import my_portfolio from "../assets/portfolio/my-portfolio.png";
import stripe from "../assets/portfolio/stripe.jpg";

const portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: my_portfolio,
      title: "portfolio website in React and tailwindcss",
      code: "https://github.com/Amjad-Afridi/portfolio-website-react-tailwindcss",
      demo: "https://imaginative-biscochitos-57ca4a.netlify.app/",
    },
    {
      id: 2,
      src: landing_page,
      title: "landing page frontend in tailwindcss",
      code: "https://github.com/Amjad-Afridi/landing-page-with-tailwindcss",
      demo: "https://landing-page-with-tailwind.netlify.app",
    },

    {
      id: 3,
      src: youtube_clone,
      title: "youtube clone in HTML and CSS",
      code: "https://github.com/Amjad-Afridi/Youtube-clone-HTML-CSS.github.io",
      demo: "https://amjad-afridi.github.io/Youtube-clone-HTML-CSS.github.io/",
    },
    {
      id: 4,
      src: react_blog_app,
      title: "blog app in React.js",
      code: "https://github.com/Amjad-Afridi/blog-web-app-in-React",
      demo: null,
    },
    {
      id: 5,
      src: node_backend,
      title: "complete backend for mobile application",
      code: "https://github.com/Amjad-Afridi/dressUp-backend",
      demo: null,
    },

    {
      id: 6,
      src: stripe,
      title: "stripe implementation in node.js",
      code: "https://github.com/Amjad-Afridi/Payments-with-Stripe-using-node-js",
      demo: null,
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
          {portfolios.map(({ id, src, title, demo, code }) => (
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
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="mx-auto text-gray-400 text-lg hover:scale-105 duration-300">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="mx-auto text-gray-400 text-lg hover:scale-105 duration-300">
                    Code
                  </button>
                </a>
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
