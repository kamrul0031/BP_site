"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { IconDirectionSign } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import authService from "@/appwrite/auth";

export function SignupFormDemo() {
  // State for storing form input values
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    password: ''
  });

  const [logSuccessAlertDialog, setLogSuccessAlertDialog] = useState(false)

  const router = useRouter();

  // Handle input change and update state
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  
    const getFullName = () => `${formData.firstname} ${formData.lastname}`;
  
    // Pass the form data, including phone
    authService.createAccount({
      email: formData.email,
      password: formData.password,
      name: getFullName(),
      phone: formData.contact // Include phone
    })
    .then(()=>{
      console.log(logSuccessAlertDialog)
      setLogSuccessAlertDialog((prev) => !prev)
      console.log(logSuccessAlertDialog)
    })
    
  };
  
  
  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Binary Point
      </h2>
      <span className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Sign up & Become a Binary Bit <br />{" "}
        <b>
          <p className="text-red-500">
            * Submitting a pointless signup may result in penalties
          </p>
        </b>
      </span>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input 
              id="firstname" 
              placeholder="Binary" 
              type="text" 
              value={formData.firstname}
              onChange={handleChange}  // Capture input change
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input 
              id="lastname" 
              placeholder="Bit" 
              type="text" 
              value={formData.lastname}
              onChange={handleChange}  // Capture input change
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            placeholder="email@binarypoint.com" 
            type="email" 
            value={formData.email}
            onChange={handleChange}  // Capture input change
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="contact">Contact Number</Label>
          <Input 
            id="contact" 
            placeholder="+880 1234567890" 
            type="text" 
            value={formData.contact}
            onChange={handleChange}  // Capture input change
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            placeholder="• • • • • • • •" 
            type="password" 
            value={formData.password}
            onChange={handleChange}  // Capture input change
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br mb-7 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <span
          className="cursor-pointer text-sm hover:text-slate-300 dark:text-white flex items-center"
          onClick={() => {
            router.replace("/");
          }}
        >
          <IconDirectionSign className="rotate-180" /> Back to the{" "}
          <b>Home page</b>
        </span>
      </form>


      {logSuccessAlertDialog && <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
}



    </div>
  );
}

// Reusable container component for Label and Input
const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
