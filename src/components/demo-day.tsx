import Image from "next/image";
import DemoImage from "@/app/public/demo.jpeg";
export const DemoDay = () => {
  return (
    <div className="bg-white laptop:py-24 desktop:px-[9.75rem] laptop:px-[5.75rem] px-6 py-[3.625rem] laptop:p-[92px]">
      <div className="m-auto max-w-page flex flex-col-reverse tablet:flex-row gap-x-[28px] gap-y-[24px] desktop:gap-[88px]">
        <Image
          src={DemoImage}
          alt={"Two guests presenting on the stage during the demo day."}
          className="rounded-tl-[80px] rounded-tr-[8px] rounded-br-[80px] rounded-bl-[8px] w-full tablet:w-1/2 tablet:h-auto h-[25rem] object-cover brightness-75"
        />
        <div className="flex gap-[10px] w-full tablet:w-1/2 flex-col">
          <div className="flex flex-col latop:gap-y-4 gap-y-1 laptop:py-8">
            <span className="desktop:text-lg font-semibold laptop:text-base text-sm">30th May</span>
            <h2 className="text-primary desktop:text-[3.5rem] laptop:text-[2rem] text-[1.5rem] font-spaceGrotesk font-bold">
              Demo day
            </h2>
          </div>
          <div className="shadow-lg laptop:px-9 px-5 laptop:py-[3.625rem] py-[2.5rem] flex flex-col gap-y-[60px] border border-[#EAECF0] rounded-lg">
            <p className=" font-spaceGrotesk desktop:text-[1.75rem] laptop:text-[1.5rem] text-xl">
              Pitch to <span className="text-primary font-bold">investors</span> and <span className="text-primary font-bold">mentor</span> your idea or your startup
              experience.
            </p>
            <p className=" font-spaceGrotesk  desktop:text-[1.75rem] laptop:text-[1.5rem] text-[1.375rem]">
              Receive your <span className="text-primary font-bold">Certificate</span> of accomplishment from our mentors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
