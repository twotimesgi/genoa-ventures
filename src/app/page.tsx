"use client" 
import { Clients } from "@/components/clients";
import { ContactUs } from "@/components/contact-us";
import { DemoDay } from "@/components/demo-day";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
   <main>
    <Hero/>
    <Clients/>
    <DemoDay/>
    <Pricing/>
    <ContactUs/>
     </main>
  );
}
