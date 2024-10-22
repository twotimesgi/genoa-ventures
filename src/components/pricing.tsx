"use client";

import { Button } from "./ui/button";
import { CheckIcon } from "./ui/check-icon";
import { SubHeading } from "./ui/subheading";

export const Pricing = () => {
  return (
    <div className="m-auto px-[156px] py-[96px] flex gap-x-[88px]">
      <div className="w-1/2 border border-[#EAECF0] rounded-lg shadow-lg">
        <div className="p-8 border-b">
          <div className="font-semibold text-lg mb-4">6 Months Program</div>
          <div className="font-spaceGrotesk font-bold tracking-tight text-6xl">
            €599
          </div>
        </div>
        <div className="p-8">
          <div className="font-semibold mb-4">First 3 Months</div>
          <div className="flex gap-3 mb-8">
            <CheckIcon className="shrink-0" />
            <p>Our mentors guide you through a start up-focused program.</p>
          </div>
          <div className="font-semibold mb-4">Second 3 Months</div>
          <div className="flex gap-3">
            <CheckIcon className="shrink-0" />
            <p>Dive into ia real start up, join an existing team or initiate you venture.</p>
          </div>
        </div>
      </div>
      <div className="px-8 flex flex-col justify-center">
        <SubHeading className="mb-3">Pricing</SubHeading>
        <h2 className="font-bold font-spaceGrotesk text-4xl mb-5 tracking-tight">Plans that fit your scale</h2>
          <div className="text-xl mb-11">
          <div className="font-medium">Pay in 3 installments or €100 per month.</div>
          <div className="font-normal">Start your journey with Genoa Ventures now.</div>
          </div>
        <div className="my-8">
        <Button className="w-full mb-3" size="md" variant="primary" onClick={() => {}}>Download the brochure</Button>
        <Button className="w-full" size="md" variant="secondary" onClick={() => {}}>Contact us</Button>
        </div>
      </div>
    </div>
  );
};
