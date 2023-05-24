import links from "./SocialMediaLinks";
const SocialLinks = () => {  
  return (
    <div className="hidden lg:flex flex-col w-40 h-14 top-1/3 left-0 fixed ">
      <ul>
        {links.map(({ id, href, child, download }) => (
          <li
            key={id}
            className=" flex justify-between items-center w-40 h-14 px-4 ml-[-100px] rounded-md hover:ml-[-10px] hover:rounded-lg duration-300 bg-gray-500"
          >
            <>
              <a
                href={href}
                className="flex items-center justify-between text-white w-full"
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
  );
};

export default SocialLinks;
