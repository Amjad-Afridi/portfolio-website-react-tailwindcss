import { BsGithub, BsLinkedin, BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const links = [
  {
    id: 1,
    child: (
      <>
        Github <BsGithub size={25} />
      </>
    ),
    href: "https://github.com/Amjad-Afridi",
  },
  {
    id: 2,
    child: (
      <>
        Linkedin <BsLinkedin size={25} />
      </>
    ),
    href: "https://www.linkedin.com/in/amjad-ali-afridi-9898a3235/",
  },
  {
    id: 3,
    child: (
      <>
        Mail <AiOutlineMail size={25} />
      </>
    ),
    href: "mailto:amjadafridi067@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonFill size={25} />
      </>
    ),
    href: "/cv.pdf",
    style: "rounded-br-md",
    download: true,
  },
];
export default links;