"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { CheckIcon } from "./ui/check-icon";
import { SubHeading } from "./ui/subheading";

export const Pricing = () => {
  const router = useRouter();
  return (
    <div id="pricing" className="bg-backgroundLight laptop:py-24 desktop:px-[9.75rem] laptop:px-[5.75rem] px-6 py-[3.625rem]">
    <div className="m-auto max-w-page flex flex-col-reverse tablet:flex-row gap-[28px] desktop:gap-[88px]">
      <div className="tablet:w-1/2 w-full border border-[#EAECF0] rounded-lg shadow-lg bg-white">
        <div className="p-6 border-b">
          <div className="font-semibold text-sm tablet:text-lg tablet:mb-4 mb-2">
            6 Months Program
          </div>
          <div className="font-spaceGrotesk font-bold tracking-tight tablet:text-6xl text-[2.75rem]">
            €599
          </div>
        </div>
        <div className="p-6 tablet:p-8 tablet:text-base text-sm">
          <div className="font-semibold mb-4">First 3 Months</div>
          <div className="flex gap-3 mb-8">
            <CheckIcon className="shrink-0" />
            <p>Our mentors guide you through a start up-focused program.</p>
          </div>
          <div className="font-semibold mb-4">Second 3 Months</div>
          <div className="flex gap-3">
            <CheckIcon className="shrink-0" />
            <p>
              Dive into ia real start up, join an existing team or initiate you
              venture.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full tablet:w-1/2 laptop:px-8 flex flex-col justify-center items-center tablet:items-start desktop:py-[1.875rem] laptop:py-[0.9375rem]">
        <SubHeading className="mb-3 text-sm tablet:text-base">
          Pricing
        </SubHeading>
        <h2 className="font-bold font-spaceGrotesk tablet:text-[2.25rem] text-xl tablet:mb-5 mb-4 tracking-tight">
          Plans that fit your scale
        </h2>
        <div className="text-base tablet:text-xl tablet:mb-11 mb-[44px] flex flex-col items-center tablet:items-start">
          <div className="font-medium">Pay in 3 installments or €100 per month.</div>
          <div className="tablet:font-normal font-light">
            Start your journey with Genoa Ventures now.
          </div>
        </div>
        <div className="tablet:my-8 laptop-mb-7 mb-0 w-full">
          <Button
            className="w-full mb-3 hidden tablet:block"
            size="md"
            variant="primary"
            onClick={() => {
              window.open ('https://drive.google.com/file/d/1SNG6BAZDYp5aq7GB9wacC6hMSWSL4nwX/view?usp=sharing', '_ blank');
            }}
          >
            Download the brochure
          </Button>
          <Button
            className="w-full hidden tablet:block"
            size="md"
            variant="secondary"
            onClick={() => {
              router.push("#contactus")
            }}
          >
            Contact us
          </Button>
          <Button
            className="w-full block tablet:hidden mb-3"
            size="sm"
            variant="primary"
            onClick={() => {
              window.open ('https://drive.google.com/file/d/1SNG6BAZDYp5aq7GB9wacC6hMSWSL4nwX/view?usp=sharing', '_ blank');
            }}
          >
            Download the brochure
          </Button>
          <Button
            className="w-full block tablet:hidden "
            size="sm"
            variant="secondary"
            onClick={() => {
              router.push("#contactus")
            }}
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};
