"use client";
import Image from "next/image";
import ContactUsImage from "@/app/public/contact-us.png";
import { Button } from "./ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendMail } from "@/lib/send-mail";
import toast from "react-hot-toast";

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "Required",
  }),
  lastName: z.string().min(1, {
    message: "Required",
  }),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, {
    message: "Required",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;


export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit : SubmitHandler<FormSchemaType> = async (data) => {
    const mailText = `Name: ${data.firstName} ${data.lastName}\n  Email: ${data.email}\nMessage: ${data.message}`;
    const response = await sendMail({
      email: data.email,
      subject: 'New Contact Us Form',
      text: mailText,
    });
    if (response?.messageId) {
      toast.success('Message sent.');
    } else {
      toast.error('Failed to send message.');
    }
  };
  return (
    <section id="contactus" className="bg-backgroundLight tablet:px-[92px] px-[24px] desktop:px-[156px] tablet:py-[96px] py-[80px] flex gap-x-16 m-auto justify-between">
      <div className="tablet:w-5/12 w-full flex-shrink-0">
        <h2 className="tracking-tight text-4xl font-semibold font-spaceGrotesk mb-5">
          More Information
        </h2>
        <p className="text-xl mb-12">
          Our friendly team would love to hear from you.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-x-8 w-full mb-6 flex-col tablet:flex-row">
            <div className="flex flex-col gap-y-1.5 w-full ">
            <div className="flex justify-between items-center">
                <label className="text-sm">First Name</label>
                <p className="text-sm text-red-500">{errors.firstName?.message?.toString()}</p>
              </div>
              <input
                className="py-2.5 px-3.5 placeholder:font-light text-sm focus:bg-backgroundLighter border border-[#D0D5DD] rounded-[4px] shadow-sm w-full"
                {...register("firstName")}
                placeholder="First name"
              />
            </div>
            <div className="flex flex-col gap-y-1.5 w-full">
            <div className="flex justify-between items-center">
                <label className="text-sm">Last Name</label>
                <p className="text-sm text-red-500">{errors.lastName?.message?.toString()}</p>
              </div>
              <input
                className="py-2.5 px-3.5 placeholder:font-light text-sm focus:bg-backgroundLighter border border-[#D0D5DD] rounded-[4px] shadow-sm w-full"
                {...register("lastName")}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-1.5 mb-6">
          <div className="flex justify-between items-center">
                <label className="text-sm">Email</label>
                <p className="text-sm text-red-500">{errors.email?.message?.toString()}</p>
              </div>
              <input
                className="py-2.5 px-3.5 placeholder:font-light text-sm focus:bg-backgroundLighter border border-[#D0D5DD] rounded-[4px] shadow-sm w-full"
                {...register("email")}
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col gap-y-1.5 mb-6">
              <div className="flex justify-between items-center">
                <label className="text-sm">Message</label>
                <p className="text-sm text-red-500">{errors.message?.message?.toString()}</p>
              </div>
              <textarea 
          className="py-2.5 px-3.5 placeholder:font-light text-sm focus:bg-backgroundLighter border border-[#D0D5DD] rounded-[4px] shadow-sm resize-none w-full h-[134px]"
          {...register("message")} placeholder="Message" />
            </div>

          
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >Send message
          </Button>
        </form>
      </div>
      <div className="w-7/12 flex-shrink-1 tablet:flex hidden  justify-end">
        <Image
          className="h-full object-cover"
          alt="Person typing a message on a keyboard."
          src={ContactUsImage}
        />
      </div>
    </section>
  );
};
