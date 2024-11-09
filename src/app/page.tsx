"use client" 
import { Clients } from "@/components/clients";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
   <main>
    <Hero/>
    <Clients/>
    <Pricing/>
     </main>
  );
}
