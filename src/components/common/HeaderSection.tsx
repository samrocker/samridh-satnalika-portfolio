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
    <section className="w-full sticky top-0">
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full flex-between">
          <div className="flex-[1] flex-start">
            <h1 className="text-primary text-lg md:text-2xl font-bold">SAM</h1>
          </div>
          <div className="flex-[1] hidden lg:flex-center gap-7">
            {HeaderContent.map((item, key) => (
              <div className="flex-center gap-5" key={key}>
                <Link
                  href={item.path}
                  className="text-primary text-lg font-normal"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex-[1] hidden lg:flex-end gap-5">
            <div className="flex-center gap-3">
              <h1 className="text-primary text-lg font-normal uppercase">
                theme
              </h1>
              <ThemeChangerButton />
            </div>
            <Link
              href="/"
              className="py-3 px-5 flex-center gap-2 border-2 border-primary rounded-full backdrop-blur-lg bg-primary/20"
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
          <div className="flex-[1] flex-end lg:hidden">
            <Sheet>
              <SheetTrigger>Open</SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeaderSection;
