"use client";

import { cn } from "@/lib/utils";
import { projectCardTypes } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const ProjectCard = ({
  title,
  tags,
  imageUrl,
  description,
  className,
  Redirect,
}: projectCardTypes) => {
  return (
    <div
      className={cn(
        "px-5 py-7 min-h-fit lg:min-h-[630px] max-h-[630px] w-full max-w-[600px] flex-between flex-col gap-5 bg-card rounded-xl border  -[1px] border-card-foreground shadow-2xl hover:shadow-white/50 duration-300",
        className
      )}
    >
      <div className="w-full flex flex-col gap-5 items-start justify-center">
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        <div className="w-full flex flex-wrap gap-3 items-center justify-start">
          {tags.split(",").map((tag, index) => (
            <span
              key={index}
              className="py-2 px-5 bg-secondary text-xs font-bold rounded-full"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full flex-center">
        <Image
          src={imageUrl}
          alt={title}
          height={1000}
          width={1000}
          className="w-full object-cover rounded-xl"
        />
      </div>
      <div className="w-full flex flex-col gap-5 items-start justify-center">
        <p className="text-sm text-primary font-semibold max-w-[450px]">
          {description}
        </p>
        <Link
          className="py-2 px-5 bg-card text-primary text-lg font-bold rounded-full border-[1px] border-card-foreground hover:bg-secondary"
          target="_blank"
          href={Redirect}
        >
          Visit website
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
