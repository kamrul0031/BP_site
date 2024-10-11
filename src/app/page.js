"use client";

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { IconArrowRampRight } from "@tabler/icons-react";
import Image from "next/image";

import { FlipWords } from "@/components/ui/flip-words";
import MacDock from "@/components/RM_Components/MacDock";
import ListLoader from "@/components/RM_Components/ListLoader";
import { Button } from "@/components/ui/moving-border";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import ProfilePic from "@/app/Profile.jpg";
const people = [
  {
    id: 1,
    name: "MKH Tamim",
    designation: "HSC ICT Instructor",
    image: ProfilePic, // Correct way to import image
  },
  // {
  //   id: 2,
  //   name: "John Doe",
  //   designation: "Software Engineer",
  //   image: ProfilePic, // Correct way to import image
  // },
  // {
  //   id: 3,
  //   name: "John Doe",
  //   designation: "Software Engineer",
  //   image: ProfilePic, // Correct way to import image
  // },
];

const words = ["code", "concepts"];
const words1 = ["concepts", "code"];

export default function Home() {
  return (
    <div className="dark flex justify-center">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br md:relative lg:bottom-0 md:bottom-44 sm:bottom-52 from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <b>Binary Point </b> <br />{" "}
          <span className="text-2xl">The right way to</span>
          <br />
          <span className="text-2xl sm:text-3xl">
            Understanding <FlipWords words={words} /> and{" "}
            <FlipWords words={words1} /> in depth
          </span>
        </motion.h1>
      </LampContainer>

      {/* <div
       className="bg-blue-400 absolute bottom-0 justify-center w-full flex gap-2"> */}
      <div className=" flex flex-col gap-3 absolute bottom-36">
        <Button className="p-3">Sign Up / Login</Button>
        <div className="flex ">
          <AnimatedTooltip items={people} />
          <ListLoader />
          <button className="border-2 bg-gradient-to-t from-cyan-800 to-slate-500/10 rounded-full w-16 h-16 grid place-items-center">
            <IconArrowRampRight color="white" size={40} />
          </button>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
