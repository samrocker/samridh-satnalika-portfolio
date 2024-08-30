"use client";

import { cn } from "@/lib/utils";
import { projectCardTypes } from "@/types";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import ShineBorder from "@/components/magicui/shine-border";

const ProjectCard = ({
  title,
  tags,
  imageUrl,
  description,
  className,
  Redirect,
}: projectCardTypes) => {
  return (
    <CardContainer className={cn("inter-var border-2 rounded-xl duration-300 hover:shadow-lg shadow-white/50 relative", className)}>
      <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-[600px] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-primary"
        >
          {title}
        </CardItem>

        <CardItem
          translateZ="60"
          as="div"
          className="w-full flex flex-wrap gap-3 items-center justify-start mt-3"
        >
          {tags.split(",").map((tag, index) => (
            <span
              key={index}
              className="py-2 px-5 bg-white text-xs font-bold rounded-full text-black"
            >
              {tag.trim()}
            </span>
          ))}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            alt={title}
            height={1000}
            width={1000}
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>

        <CardItem
          translateZ="60"
          as="p"
          className="text-sm text-primary font-semibold max-w-[450px] mt-5"
        >
          {description}
        </CardItem>

        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href={Redirect}
            target="_blank"
            className="py-2 px-5 bg-card text-primary text-lg font-bold rounded-full border-2 border-card-foreground/20 hover:bg-secondary"
          >
            Visit website
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
