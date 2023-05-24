import links from "./SocialMediaLinks";
const Contact = () => {
  return (
    <div
      name="contact"
      className=" text-white w-full bg-gradient-to-b from-black to-gray-800 mx-auto"
    >
      <div className="flex flex-col px-8 md:px-16  max-w-screen-lg mx-auto py-24">
        <div className="flex flex-col gap-4 mb-16">
          <p className="text-4xl font-bold ">Contact</p>
          <p className="text-lg text-gray-400">
            Please fill the following form to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <form
            action="https://getform.io/f/37eaf825-4603-4c64-b50d-6b2b2d389483"
            method="POST"
            className="flex flex-col justify-center w-full sm:w-1/2 gap-6 "
          >
            <input
              type="text"
              name="name"
              placeholder="enter your name "
              className="px-2 py-1 focus:outline-none border-2 border-gray-400 bg-transparent rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="enter your email "
              className="px-2 py-1 focus:outline-none border-2 border-gray-400 bg-transparent rounded-md"
            />
            <textarea
              name="message"
              rows="10"
              className="px-2 py-1 border-2 border-gray-400 bg-transparent rounded-md focus:outline-none "
              placeholder="enter your message"
            ></textarea>
            <button
              type="submit"
              name="submit"
              className="px-6 py-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto hover:scale-105 duration-300 "
            >
              Submit
            </button>
          </form>
        </div>
        <div
          className="mt-16 lg:hidden 
        "
        >
          <ul className="flex bg-transparent border-2 border-gray-400 rounded-lg px-2 py-4 ">
            {links.map(({ id, href, child, download }) => (
              <li
                key={id}
                className=" flex justify-center items-center w-full  rounded-md  hover:rounded-lg hover:scale-105 duration-300"
              >
                <>
                  <a
                    href={href}
                    className="flex flex-col sm:flex-row gap-2 items-center justify-between text-white"
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
