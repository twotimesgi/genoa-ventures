"use client";
import Logo from "@/app/public/Logo.png";
import Image from "next/image";
import { Button } from "./ui/button";
import classNames from "classnames";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { NAV_ITEMS } from "@/constants";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MobileNav } from "./mobile-nav";

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence>
        {showMenu && <MobileNav onClose={toggleMenu}/>}
      </AnimatePresence>
      <div className="laptop:py-7 m-auto desktop:px-40 laptop:px-[5.75rem] px-6 max-w-page bg-white"> 
      <header className="flex items-center justify-between relative z-50 h-20 laptop:h-auto">
        <button className="laptop:hidden" onClick={toggleMenu}>
          <RxHamburgerMenu size={24} />
        </button>
        <Link className="shrink-0" href="/">
          <Image src={Logo} alt="Logo" width={128} height={48} className="" />
        </Link>
        <nav className="hidden laptop:block">
          <ul className="flex items-center justify-center">
            {NAV_ITEMS.map((item: NavItem) => (
              <li
                className={classNames(
                  "min-w-[5.25rem] desktop:min-w-[6.25rem] text-sm desktop:text-base h-full tracking-tight relative flex justify-center p-2.5",
                  { "font-semibold": item?.isActive }
                )}
                key={item.text}
              >
                <a
                  href={item.href}
                  className={classNames({
                    "hover:text-primary": !item?.isActive,
                  })}
                >
                                  {item.text}
                </a>
                {item?.isActive && (
                  <span className="h-1 bg-primary absolute bottom-0 w-full" />
                )}
              </li>
            ))}
          </ul>
        </nav>
        <Button
          size="sm"
          variant="primary"
          onClick={() => {}}
          className="shrink-0 hidden laptop:block"
        >
          Get started
        </Button>
      </header>
      </div>
    </>
  );
};
