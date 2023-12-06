"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaTasks } from "react-icons/fa";

const NavBar = () => {
  const currentPathname = usePathname();
  const links = [
    { lable: "Dashboard", link: "/" },
    { lable: "Tasks", link: "/tasks" },
  ];
  return (
    <nav className="flex space-x-8 mb-6 border-b px-5 h-14 items-center">
      <Link href="/" className="hover:text-zinc-200 transition-colors">
        <FaTasks />
      </Link>
      <ul className="flex space-x-6">
        {links.map((item, index) => (
          <Link
            className={classNames({
              "text-zinc-100": item.link === currentPathname,
              "text-zinc-500": item.link !== currentPathname,
              "hover:text-zinc-300 transition-colors": true,
            })}
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
