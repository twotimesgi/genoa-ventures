import Image from "next/image";
import ScholarshipsImage from "@/app/public/scholarships.jpeg";
import SiliconValleyImage from "@/app/public/silicon-valley.jpeg";
export const AfterTheProgram = () => {
  return (
    <div className="bg-white laptop:py-24 desktop:px-[9.75rem] laptop:px-[5.75rem] px-6 py-[3.625rem] laptop:p-[92px]">
      <div className="m-auto max-w-page flex flex-col gap-[40px] ">
        <div className="flex gap-5 w-full flex-col">
        <h2 className="tracking-tight font-bold tablet:text-[2.25rem] text-xl font-spaceGrotesk mb-5 text-center w-full tablet:text-left">
          After the program
        </h2>
        <p className="w-full text-center tablet:text-left tablet:text-xl">Travel to San Francisco to visit major tech headquarters, including Meta, Tesla, and Google, to learn the top founders&apos; secrets and expand your network.</p>
        </div>
        <div className="flex flex-col laptop:flex-row gap-[24px]">
        <div className="w-full laptop:w-5/12 desktop:mt-[8.125rem] laptop:mt-12 laptop:h-[34.375rem] h-[24rem] relative overflow-hidden rounded-[4px] flex-start">
          <Image
            src={ScholarshipsImage}
            alt={""}
            className="w-full h-full object-cover"
          />
          <div className="bg-gradient-to-t from-[#330A2D] to-transparent w-full h-full absolute inset-0 tablet:p-8 p-4 flex items-end">
            <div className="w-full border-primary border-[2px] rounded-[4px] text-white py-8 px-6 flex flex-col">
              <div className="flex items-baseline -mt-24 tablet:-ml-12 -ml-10 ">
                <span className="font-spaceGrotesk text-[6.25rem] font-bold">
                  3
                </span>
                <span className="tablet:text-4xl text-2xl font-bold font-spaceGrotesk">
                  Scholarships
                </span>
              </div>
              <p className="font-light">
                to join{" "}
                <span className="text-primary font-bold">
                  Silicon Valley Fellowships
                </span>{" "}
                for <span className="text-primary font-bold">FREE</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] w-full laptop:w-7/12 flex-col desktop:h-[37.5rem] laptop:h-[31rem] h-[26rem] relative laptop:mb-[5.3rem] overflow-hidden rounded-[4px]">
          <Image
            src={SiliconValleyImage}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="bg-gradient-to-t from-[#330A2D] to-transparent w-full h-full absolute  inset-0 tablet:p-8 p-4 flex items-end">
            <div className="w-full border-primary border-[2px] rounded-[4px] text-white py-8 px-6 flex flex-col">
            <div className="flex items-baseline -mt-24 -ml-8 laptop:mb-0 mb-8">

              <span className="font-spaceGrotesk text-[6.25rem] font-bold">
                1
              </span>
              <span className=" tablet:text-4xl text-2xl font-bold font-spaceGrotesk">
                Week in Silicon Valley
              </span>
              </div>
              <p className="font-light">
                After the program, travel to San Francisco to visit major tech
                headquarters, including{" "}
                <span className="text-primary font-bold">Meta</span>,{" "}
                <span className="text-primary font-bold">Tesla</span>, and{" "}
                <span className="text-primary font-bold">Google</span>, to learn
                the top founders&apos; secrets and expand your network.
              </p>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
