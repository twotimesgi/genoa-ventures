import Image, { StaticImageData } from "next/image";
import { Button } from "./button";
interface MentorCardProps {
  image: StaticImageData;
  name: string;
  role: string;
  company: string;
  linkedinUrl: string;
}

export const MentorCard = ({
  image,
  name,
  role,
  company,
  linkedinUrl,
}: MentorCardProps) => {
  return (
    <div className="w-[360px] flex-shrink-0 flex-grow-0 bg-white border border-[#fff/50] rounded-[4px] overflow-hidden">
        <div className="w-[360px] h-[251px] relative">
            <div className="bg-gradient-to-b from-black/50 to-transparent absolute inset-0"/>
            <Image className="w-[360px] h-[251px] object-cover object-top" src={image} alt={name}/>
        </div>
      <div className="py-6 px-5 h-[218px] w-full flex flex-col justify-between">
        <div className="font-spaceGrotesk text-3xl font-bold line-clamp-2">{name}</div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="text-lg font-normal">{role}</div>
            <div className="font-light">@{company}</div>
          </div>
          <Button className="self-end" size="mentorButton" variant="secondary" onClick={() => console.log(linkedinUrl)}>
            Linkedin
          </Button>
        </div>
      </div>
    </div>
  );
};
