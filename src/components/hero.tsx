"use client";
import Image from "next/image";
import HeroImage from "@/app/public/hero.png";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="bg-white desktop:px-40 laptop:px-[5.75rem] px-6 laptop:py-[8.75rem] pt-[2.25rem] pb-[2.6875rem] ">
      <div className="flex flex-col laptop:flex-row m-auto gap-[39px]  max-w-page">
        <div className="flex laptop:gap-y-6 gap-y-4  flex-col laptop:w-1/2 w-full justify-center">
          <h1 className="tracking-tight font-bold text-foreground text-[2.5rem]  laptop:text-[3.125rem] uppercase font-spaceGrotesk laptop:leading-[3.125rem] leading-[2.5rem]">
            Backing the next generation of Europe’s entrepreneurs
          </h1>
          <p className="max-w-[450px] laptop:text-base text-sm">
            Selecting, training, and promoting european talents to turn their
            ideas into real start up.
          </p>
        </div>
        <Image
          src={HeroImage}
          className="laptop:w-1/2 w-full"
          alt="People attending a startup presentation at Talent Garden, with logos of Google, Synopsys, and Tesla on the screen."
        />
        <Button
          size="sm"
          variant="primary"
          onClick={() => {}}
          className="w-full laptop:hidden"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};
