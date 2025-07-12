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
              I am a FullStack Web Developer
            </h2>
            <p className="text-gray-400 mb-4 md:max-w-sm">
              I'm a Computer Science graduate with ~2 years of experience in full-stack development using React.js, Node.js, and Express. I've built end-to-end web applications and tackled challenges in UI design, APIs, and data modeling. I enjoy solving real-world problems and growing with collaborative, forward-thinking teams.
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
