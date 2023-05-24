import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
const Navbar = () => {
  const [bar, setBar] = useState(true);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center text-white bg-black w-full h-20 px-8 md:px-16">
        <div className="font-signature text-4xl  ">Amjad</div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 font-medium text-gray-400 capitalize cursor-pointer duration-200  hover:scale-110"
            >
              <Link to={link} smooth={true} duration={500}>
                {link}{" "}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="md:hidden pr-4 cursor-pointer z-10 text-gray-400"
          onClick={() => setBar(!bar)}
        >
          {bar ? <AiOutlineMenu size={30} /> : <RxCross2 size={30} />}
        </div>
      </div>
      {!bar && (
        <ul className="md:hidden flex flex-col items-center absolute h-screen w-full pt-8 bg-gradient-to-b from-black to-gray-800 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-2xl px-4 py-6 font-medium text-gray-400 capitalize cursor-pointer duration-200  hover:scale-110"
            >
              <Link
                onClick={() => setBar(!bar)}
                to={link}
                smooth={true}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
