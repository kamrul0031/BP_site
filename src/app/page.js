"use client"

import { LampContainer } from "@/components/ui/lamp";
import {motion} from 'framer-motion';


import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconBrandFacebook,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
const words = ["code","concepts"];
const words1 = ["concepts","code"];
const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: (
      <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="dark flex justify-center">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <b>Binary Point </b> <br /> <span className="text-2xl">The right way to</span><br /><span className="text-3xl">Understanding <FlipWords words={words}/> and <FlipWords words={words1}/> in depth</span>
      </motion.h1>
    </LampContainer>
    <FloatingDock
        desktopClassName="fixed bottom-5 "
        mobileClassName="fixed bottom-12 left-5" // only for demo, remove for production
        items={links}
      />    
    </div>
  );
}
