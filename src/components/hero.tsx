"use client" 
import Image from "next/image";
import HeroImage from "@/app/public/hero.png"

export const Hero = () => {
  return (
    <div className="m-auto px-[156px] py-[140px] flex gap-x-[39px]">
        <div className="flex gap-y-6 flex-col w-1/2 justify-center">
            <h1 className="tracking-tight font-bold text-foreground text-[50px] uppercase font-spaceGrotesk leading-[51px] ">Backing the next generation of Europe’s entrepreneurs</h1>
            <p className="max-w-[484px]">Selecting, training, and promoting european talents to turn their ideas into real start up.</p>
        </div>
        <Image src={HeroImage} className="w-1/2" alt="People attending a startup presentation at Talent Garden, with logos of Google, Synopsys, and Tesla on the screen."/>
    </div>
  );
};
