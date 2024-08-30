import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import GradualSpacing from "@/components/magicui/gradual-spacing";

const HeroSection = () => {
  return (
    <section className="w-full">
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col lg:flex-row gap-10 relative">
          <div className="flex-[1] flex w-full flex-col gap-5 items-start justify-center">
            <div className="flex flex-col items-start justify-center">
              <GradualSpacing className="text-primary text-lg md:text-xl lg:text-2xl font-semibold rounded-full flex uppercase"
                text="Hey I'am"
                />
              <GradualSpacing
                className="text-primary text-4xl md:text-5xl lg:text-8xl font-extrabold"
                text="SAMRIDH"
              />
              <GradualSpacing
                className="text-primary text-4xl md:text-5xl lg:text-8xl font-extrabold"
                text="SATNALIKA"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-sm text-primary font-extrabold uppercase max-w-[565px]">
                Full-Stack Web Developer with
                4+ years of experience, crafting robust applications using
                Next.js with TypeScript and Node.js. Let's bring your ideas to
                life with clean, efficient code.
              </p>
            </div>
            <div className="flex gap-5">
              <Button className="py-6 px-5 text-xl font-bold text-primary bg-secondary rounded-full border-2 border-primary/50 hover:text-secondary uppercase">
                Hire Me
              </Button>
            </div>
          </div>
          <div className="flex-[1] flex-end w-full gap-5">
            <Image
              src="/images/myPicture.JPG"
              alt="Samridh"
              width={1000}
              height={1000}
              className="w-full max-w-[550px] rounded-3xl border-2 border-primary/50"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
