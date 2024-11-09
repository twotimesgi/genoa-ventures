"use client";

import { MentorCard } from "./ui/mentor-card";
import PierreVoineau from "@/app/public/pierre-voineau.png"
import StefanoGiacone from "@/app/public/stefano-giacone.jpeg"
import ThaddeusAnimSomuah from "@/app/public/thaddeus-anim-somuah.jpeg"
import PancrazioAuteri from "@/app/public/pancrazio-auteri.jpeg"


const mentors = [
    {
        name: "Pierre Voineau",
        role: "Managing Director",
        company: "Stellantis BeLux",
        linkedinUrl: "https://www.linkedin.com/in/pierre-voineau-bb728a8a",
        image: PierreVoineau
    },
    {
        name: "Stefano Giacone",
        role: "Product Manager",
        company: "Klarna",
        linkedinUrl: "https://www.linkedin.com/in/stefano-giacone/",
        image: StefanoGiacone
    },
    {
        name: "Thaddeus Anim-Somuah",
        role: "Global Senior Manager Sustainability",
        company: "Philips",
        linkedinUrl: "https://www.linkedin.com/in/thaddeusanimsomuah1/",
        image: ThaddeusAnimSomuah

    },
    {
        name: "Pancrazio Auteri",
        role: "Accelerator Mentor",
        company: "Berkeley SkyDeck",
        linkedinUrl: "https://www.linkedin.com/in/pancrazioauteri/",
        image: PancrazioAuteri
    },
]

export const Mentors = () => {
  return (
    <div className="bg-backgroundLight tablet:py-[96px] py-[58px]">
      <div className="max-w-page m-auto">
      <div className="desktop:px-40 laptop:px-[5.75rem] px-6 tablet:mb-16 mb-5">
        <div className="flex justify-between">
        <h2 className="tracking-tight font-bold tablet:text-[2rem] text-xl font-spaceGrotesk mb-5">
          Mentors
        </h2>
        </div>
        <p className="tablet:text-xl text-base">Hear from some of our amazing Mentors.</p>
      </div>

      <div className="desktop:px-40 laptop:px-[5.75rem] px-6  gap-x-8 flex overflow-x-auto no-scrollbar">
        {mentors.map((mentor) => (
            <MentorCard key={mentor.name} name={mentor.name} role={mentor.role} company={mentor.company} linkedinUrl={mentor.linkedinUrl} image={mentor.image}/>
        ))}
      </div>
    </div>
    </div>
  );
};
