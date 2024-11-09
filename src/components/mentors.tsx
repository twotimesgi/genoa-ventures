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
    <div className="bg-backgroundLight m-auto py-[96px]">
      <div className="px-[156px] mb-16">
        <div className="flex justify-between">
        <h2 className="tracking-tight font-bold text-4xl font-spaceGrotesk mb-5">
          Mentors
        </h2>
        </div>
        <p className="text-xl">Hear from some of our amazing Mentors.</p>
      </div>

      <div className="pl-[156px] gap-x-8 flex overflow-x-auto no-scrollbar">
        {mentors.map((mentor) => (
            <MentorCard key={mentor.name} name={mentor.name} role={mentor.role} company={mentor.company} linkedinUrl={mentor.linkedinUrl} image={mentor.image}/>
        ))}
      </div>
    </div>
  );
};
