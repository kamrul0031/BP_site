"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { Button } from "../ui/moving-border";

const loadingStates = [
  {
    text: "Binary Bit -> be a part of Binary Point",
  },
  {
    text: "Learn -> understanding code & concepts in depth",
  },
  {
    text: "Apply -> application in the basis of learning",
  },
  {
    text: "Solve -> after apply Solve your Problems",
  },
  {
    text: "Exam -> Judge your Self & get Discount on Fees",
  },
  {
    text: "HSC ICT -> Beat the Exam by getting Topper level Marks",
  },
  
];

export default function ListLoader() {
  const [loading, setLoading] = useState(false);
  return (
    (<div className=" flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <Button
        onClick={() => setLoading(true)}
        >
        <b className="p-4">Your's HSC ICT roadmaP </b>
      </Button>
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}>
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>)
  );
}
