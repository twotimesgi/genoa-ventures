"use client";
import Image from "next/image";
import { SubHeading } from "./ui/subheading";
import RevolutLogo from "@/app/public/revolut-logo.png";
import PhilipsLogo from "@/app/public/philips-logo.png"
import MicrosoftLogo from "@/app/public/microsoft-logo.png"
import CambridgeLogo from "@/app/public/cambridge-logo.png"
import MitLogo from "@/app/public/mit-logo.png"
export const Clients = () => {
  return (
    <div id="clients" className="bg-backgroundLighter desktop:px-40 laptop:px-[5.75rem] px-6 laptop:py-[8.75rem] pt-[2.25rem] pb-[2.6875rem] ">
      <div className="m-auto flex flex-col items-center gap-3  max-w-page">
        <SubHeading>Clients</SubHeading>
        <div className="flex flex-col gap-9 items-center">
          <h2 className="font-spaceGrotesk tracking-tight font-bold tablet:text-[2rem] tablet:leading-[2.375rem] text-[1.125rem] text-center max-w-[48rem] leading-[1.25rem] ">
            How Genoa Ventures can practically help European’s talents
          </h2>
          <div className="flex tablet:gap-x-11 gap-x-4 items-center">
          <Image alt="Logo" width={112} className="hidden laptop:block" src={RevolutLogo} />
          <div className="h-[81px] w-[1px] bg-[#FFE0D6] hidden laptop:block" />
          <Image alt="Logo" width={112} src={PhilipsLogo} />
          <div className="h-[81px] w-[1px] bg-[#FFE0D6]" />
          <Image alt="Logo" width={112} src={MicrosoftLogo} />
          <div className="h-[81px] w-[1px] bg-[#FFE0D6]" />
          <Image alt="Logo" width={112} src={CambridgeLogo} />
          <div className="h-[81px] w-[1px] bg-[#FFE0D6] hidden laptop:block" />
          <Image alt="Logo" width={112} className="hidden laptop:block" src={MitLogo} />
        </div> 
        </div>
      </div>
    </div>
  );
};
