import Link from "next/link";
import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      style={{ height: "7vh" }}
      className="px-10 flex items-center justify-between "
    >
      <ul className="flex flex-col text-center sm:flex-row hidden md:block">
        <li>
          <p className="mr-2.5 lg:mr-10">Rizqi Pratama</p>
        </li>
      </ul>
      <ul className="flex text-center ">
        <p className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://github.com/skipfortoday">
            <a target="_blank" rel="noreferrer noopener">
              <AiOutlineGithub size={20} />
            </a>
          </Link>
        </p>
        <p className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://www.linkedin.com/in/rizqi-ramadhani-a06967170/">
            <a target="_blank" rel="noreferrer noopener">
              <AiFillLinkedin size={20} />
            </a>
          </Link>
        </p>
      </ul>
    </div>
  );
};

export default Footer;
