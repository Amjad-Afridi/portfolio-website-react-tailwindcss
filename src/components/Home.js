import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import profileimage from "../assets/profile-picture.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div name="home" className="bg-gradient-to-b from-black to-gray-800 ">
        <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto px-8 md:px-16 md:flex-row py-24">
          {/* description and button */}
          <div className="flex flex-col pr-4 gap-4">
            <h2 className="text-white font-bold text-5xl capitalize mb-4  ">
              I am a full stack web developer
            </h2>
            <p className="text-gray-400 mb-4 md:max-w-sm">
              I am a recent computer science graduate. I have completed my
              degree from Sukkur IBA university. I have expertise in full stack
              web development using MERN Stack. I have developed several
              projects in HTML, CSS, Tailwindcss, React.js , Node.js,
              Express.js, and MongoDB. I am actively looking for new
              opportunites and challanges in this domain in order to enhance my
              skills.
            </p>
            {/* button div */}
            <div className="flex mb-8">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center px-4 py-2 rounded-lg cursor-pointer font-bold"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-500 ml-1">
                  {" "}
                  <MdKeyboardArrowRight size={20}  />
                </span>{" "}
              </Link>
            </div>
          </div>
          {/* image */}
          <div className=" md:ml-4">
            <img
              src={profileimage}
              alt="profile-pic"
              className="rounded-xl mx-auto w-2/3 md:w-full "
            />
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Home;
