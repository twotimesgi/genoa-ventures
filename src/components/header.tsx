"use client";
import Logo from "@/app/public/Logo.png";
import Image from "next/image";
import { Button } from "./ui/button";
import classNames from "classnames";
import Link from "next/link";

const navLinks = [
  {
    text: "Home",
    href: "",
    isActive: true,
  },
  {
    text: "Features",
    href: "",
  },
  {
    text: "Clients",
    href: "",
  },
  {
    text: "Pricing",
    href: "",
  },
  {
    text: "Mentors",
    href: "",
  },
  {
    text: "Contact Us",
    href: "",
  },
];

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-7 m-auto px-40">
      <Link href="/"><Image src={Logo} alt="Logo" width={128} height={48} /></Link>
      <nav>
        <ul className="flex items-center justify-center">
          {navLinks.map((link) => (
            <li
              className={classNames(
                "min-w-[100px] h-full tracking-tight relative flex justify-center p-2.5",
                { "font-semibold": link?.isActive },
              )}
              key={link.text}
            >
              <a href={link.href} className={classNames(
                  { "hover:text-primary": !link?.isActive}
              )}>{link.text}</a>
              {link?.isActive && <span className="h-1 bg-primary absolute bottom-0 w-full" />}
            </li>
          ))}
        </ul>
      </nav>
      <Button size="sm" variant="primary" onClick={() => {}}>
        Get started
      </Button>
    </header>
  );
};
