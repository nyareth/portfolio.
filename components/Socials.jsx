import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/nyareth" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/nyarethmarko",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/yn2fly",
  },
  { icon: <FaXTwitter />, path: "#" },
  //   { icon: <FaTwitter />, path: "" }, old twitter logo
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
