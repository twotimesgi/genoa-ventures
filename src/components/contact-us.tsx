"use client";
import Image from "next/image";
import ContactUsImage from "@/app/public/contact-us.png";
import { Button } from "./ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "Name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  email: z.string().email("Email is not valid"),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {};
  return (
    <div className="bg-backgroundLight m-auto px-[156px] py-[96px] flex justify-between gap-x-16">
      <div className="w-5/12 flex-shrink-0">
        <h2 className="tracking-tight text-4xl font-semibold font-spaceGrotesk mb-5">
          More Information
        </h2>
        <p className="text-xl mb-12">
          Our friendly team would love to hear from you.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-x-8 w-full">
            <div className="flex flex-col gap-y-1.5 w-full">
              <label className="text-sm">First name</label>
              <input
                className="py-2.5 px-3.5 placeholder:font-light text-sm focus:bg-backgroundLighter border border-[#D0D5DD] rounded-[4px] shadow-sm w-full"
                {...register("firstName")}
                placeholder="First name"
              />
              <p className="text-sm text-red-500 h-6">{errors.firstName?.message?.toString()}</p>
            </div>
            <div className="flex flex-col gap-y-1.5 w-full">
              <label className="text-sm">Last name</label>
              <input
                className="py-2.5 px-3.5 placeholder:font-light text-sm focus:bg-backgroundLighter border border-[#D0D5DD] rounded-[4px] shadow-sm w-full"
                {...register("lastName")}
                placeholder="Last name"
              />
              <p className="text-sm text-red-500 h-6">{errors.lastName?.message?.toString()}</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-1.5">
              <label className="text-sm">Email</label>
              <input
                className="py-2.5 px-3.5 placeholder:font-light text-sm focus:bg-backgroundLighter border border-[#D0D5DD] rounded-[4px] shadow-sm w-full"
                {...register("email")}
                placeholder="Email"
              />
              <p className="text-sm text-red-500 h-6">{errors.email?.message?.toString()}</p>
            </div>

            <div className="flex flex-col gap-y-1.5">
              <label className="text-sm">Message</label>
              <textarea 
          className="py-2.5 px-3.5 placeholder:font-light text-sm focus:bg-backgroundLighter border border-[#D0D5DD] rounded-[4px] shadow-sm resize-none w-full h-[134px]"
          {...register("message")} placeholder="Message" />
          <p className="text-sm text-red-500 h-6">{errors.message?.message?.toString()}</p>
            </div>

          
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >Send message
          </Button>
        </form>
      </div>
      <div className="w-7/12 flex-shrink-1">
        <Image
          className="h-full object-cover"
          alt="Person typing a message on a keyboard."
          src={ContactUsImage}
        />
      </div>
    </div>
  );
};
