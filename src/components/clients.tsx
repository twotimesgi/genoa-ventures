"use client" 
import Image from "next/image";
import { SubHeading } from "./ui/subheading";
import RevolutLogo from "@/app/public/revolut-logo.png"
export const Clients = () => {
  return (
    <div className="bg-backgroundLighter m-auto px-[156px] py-[61px] flex flex-col items-center">
    <SubHeading className="mb-3">Clients</SubHeading>
    <h2 className="tracking-tight font-bold text-4xl font-spaceGrotesk mb-9 max-w-[768px] text-center">How Genoa Ventures can practically help European’s talents</h2>
    <div className="flex gap-x-11 items-center">
        <Image alt="Logo" width={112} src={RevolutLogo}/>
        <div className="h-[81px] w-[1px] bg-[#FFE0D6]"/>
        <Image alt="Logo" width={112} src={RevolutLogo}/>
        <div className="h-[81px] w-[1px] bg-[#FFE0D6]"/>
        <Image alt="Logo" width={112} src={RevolutLogo}/>
        <div className="h-[81px] w-[1px] bg-[#FFE0D6]"/>
        <Image alt="Logo" width={112} src={RevolutLogo}/>
        <div className="h-[81px] w-[1px] bg-[#FFE0D6]"/>
        <Image alt="Logo" width={112} src={RevolutLogo}/>
    </div>
    </div>
  );
};
