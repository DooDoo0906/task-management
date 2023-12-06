import Link from "next/link";
import React from "react";
import { FaTasks } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { lable: "Dashboard", link: "/" },
    { lable: "Tasks", link: "/" },
  ];
  return (
    <nav className="flex space-x-6 mb-6 border-b px-5 h-14 items-center">
      <Link
        href="/"
        className="hover:text-zinc-200 hover:text-zinc-200 transition-colors"
      >
        <FaTasks />
      </Link>
      <ul className="flex space-x-6">
        {links.map((item, index) => (
          <Link
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
            key={index}
            href={item.link}
          >
            {item.lable}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
