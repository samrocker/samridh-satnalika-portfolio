import { HeaderContent } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeChangerButton } from "../reuseable/ThemeChangerButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderSection = () => {
  return (
    <section className="w-full sticky top-0 bg-background shadow-2xl dark:shadow-white/30 rounded-b-3xl">
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full flex-between">
          <div className="flex-[1] flex-start">
            <h1 className="text-primary text-xl md:text-2xl font-bold">AYO_SAM</h1>
          </div>
          <div className="flex-[1] hidden lg:flex-center gap-7">
            {HeaderContent.map((item, key) => (
              <div className="flex-center gap-5" key={key}>
                <Link
                  href={item.path}
                  className="text-primary text-lg font-bold"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex-[1] hidden lg:flex-end gap-5">
            <div className="flex-center gap-3">
              <h1 className="text-primary text-lg font-bold uppercase">
                theme
              </h1>
              <ThemeChangerButton />
            </div>
            <Link
              href="/"
              className="py-3 px-5 flex-center gap-2 border-2 border-primary/50 rounded-full backdrop-blur-lg bg-primary/10"
            >
              <h1 className="text-sm text-primary font-extrabold uppercase">
                Resume
              </h1>
              <Image
                src="/icons/download-line.svg"
                width={20}
                height={20}
                alt="download icon"
                className="dark:invert"
              />
            </Link>
          </div>
          <div className="flex-[1] flex-end lg:hidden gap-5">
              <ThemeChangerButton />
            <Sheet>
              <SheetTrigger asChild>
                <Image src='/icons/menu-line.svg' width={27} height={27} alt="" className="dark:invert" />
              </SheetTrigger>
              <SheetContent side="left">
                <div className="h-screen w-full flex gap-10 flex-col items-end justify-center">
                  <div className="flex-center flex-col gap-7">
                    {HeaderContent.map((item, key) => (
                      <div className="flex-end gap-5" key={key}>
                        <Link
                          href={item.path}
                          className="text-primary text-3xl font-normal"
                        >
                          {item.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="flex-end flex-col gap-5">
                    <Link
                      href="/"
                      className="py-3 px-5 flex-center gap-2 border-2 border-primary rounded-full backdrop-blur-lg bg-primary/10"
                    >
                      <h1 className="text-sm text-primary font-extrabold uppercase">
                        Resume
                      </h1>
                      <Image
                        src="/icons/download-line.svg"
                        width={20}
                        height={20}
                        alt="download icon"
                        className="dark:invert"
                      />
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeaderSection;
