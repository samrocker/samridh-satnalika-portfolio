import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section>
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col lg:flex-row gap-10">
          <div className="flex-[1] w-full flex-center flex-col gap-5">
            <h1 className="text-3xl md:text-5xl text-primary font-bold underline uppercase">
              About Me
            </h1>
            <Image
              src="/images/3D_Face.png"
              alt="face"
              width={1000}
              height={1000}
              className="w-full max-w-[300px]"
            />
          </div>
          <div className="flex-[1] lg:flex-[1.5] w-full flex-center flex-col">
            <p className="text-lg lg:text-2xl text-primary font-bold uppercase max-w-[1000px]">
              With 4+ years as a Full-Stack Web Developer, I specialize in
              crafting intuitive, high-performance applications. My front-end
              work leverages Next.js with TypeScript, while I build robust
              back-end systems using Node.js. Passionate about clean code and
              seamless user experiences, I’m dedicated to turning innovative
              ideas into reality.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutSection;
