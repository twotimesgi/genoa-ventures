import Logo from "../app/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="border-t-8 border-primary laptop:pt-[120px] pb-[48px] desktop:px-[156px] flex flex-col laptop:gap-y-16 gap-y-6 laptop:px-[5.75rem] px-6 py-12 ">
      <div className="flex justify-between max-w-page tablet:flex-row flex-col gap-y-8 gap-x-12">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={128}
            height={48}
            className="mb-8"
          />
          <p className="text-sm tablet:font-normal font-thin">
            The startup academy for Genoese students.
            <br />
            <br /> Genoa Ventures Cultural and Social Promotion Association
            <br /> Piazza Cristoforo Bonavino, 1, 16156 Genova
          </p>
        </div>
        <div className="flex gap-x-16 flex-shrink-0">
        <nav>
          <div className="font-spaceGrotesk font-bold tablet:text-2xl text-xl mb-8">Menu</div>
          <ul className="flex flex-col gap-y-4 text-sm">
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <a href="#mentors">Mentors</a>
            </li>
            <li>
              <a href="#contactus">Contact Us</a>
            </li>
            <li>
              <a href="#clients">Clients</a>
            </li>
          </ul>
        </nav>
        <div>
          <div className="font-spaceGrotesk font-bold tablet:text-2xl text-xl mb-8">
            Social Media
          </div>
          <ul className="flex flex-col gap-y-4 text-sm">
            <li className="flex gap-x-2 items-center">
              <FaLinkedin size="16px" className="text-primary"/>
              <Link href="https://www.linkedin.com/company/genoa-ventures/">LinkedIn</Link>
            </li>
            <li className="flex gap-x-2 items-center">
                <FaInstagram size="16px" className="text-primary"/>
              <Link href="https://www.instagram.com/genoaventures/">Instagram</Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <p className="text-center pt-8 tablet:text-base text-sm text-foreground/95 border-t border-[#EAECF0]">
        &copy; 2024 Genoa Ventures. All rights reserved.
      </p>
    </footer>
  );
};
