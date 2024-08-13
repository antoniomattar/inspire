"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import CountrySelect from "./CountryDropdown";
import Image from "next/image";
import { useState } from "react";

export function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    console.log("Selected country:", countryCode);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gradient-to-b from-[#6a11cb] to-[#2575fc] flex flex-col justify-center items-center p-8 text-white">
        <div className="w-[300px] h-[300px] overflow-hidden mb-8">
          <Image
            src="/assets/hero-sign-in.png"
            alt="Illustration"
            className="w-full h-full"
            width={300}
            height={300}
          />
        </div>
        <h1 className="text-2xl font-bold mb-4">
          Join Our Community of Passionate Learners and Experienced Mentor
        </h1>
        <p className="text-center max-w-md font-extralight">
          Discover a platform where your interests and hobbies connect you with
          like-minded individuals. Whether you are looking to learn from experts
          or share your knowledge, our community is here to support your growth.
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <Image src="/assets/logo.png" alt="Logo" width={200} height={100} />

        <div className="space-y-4 w-full max-w-md">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="jack_challita"
              defaultValue="jack_challita"
            />
          </div>
          <div className="flex space-x-4 mb-8">
            {/* Mentor Option */}
            <input
              type="radio"
              id="mentor"
              name="role"
              value="mentor"
              defaultChecked
              className="radio-button"
            />
            <Label
              htmlFor="mentor"
              className="text-sm font-medium leading-none"
            >
              Register as Mentor
            </Label>

            {/* Mentee Option */}
            <input
              type="radio"
              id="mentee"
              name="role"
              value="mentee"
              className="radio-button"
            />
            <Label
              htmlFor="mentee"
              className="text-sm font-medium leading-none"
            >
              Register as Mentee
            </Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="jackchallita@email.com"
              defaultValue="jackchallita@email.com"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="*************"
                type={passwordVisible ? "text" : "password"}
                defaultValue="*************"
              />
              <EyeIcon
                className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" placeholder="25" defaultValue="25" type="number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <br />
            <CountrySelect
              value={selectedCountry}
              onChange={handleCountryChange}
            />
            {selectedCountry && <p>You have selected: {selectedCountry}</p>}
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" defaultChecked />
            <Label htmlFor="terms" className="text-sm font-medium leading-none">
              I accept the terms & conditions
            </Label>
          </div>
          <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
            SIGN UP
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Own an Account?{" "}
          <a href="#" className="font-bold text-black">
            JUMP RIGHT IN
          </a>
        </p>
      </div>
    </div>
  );
}

function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
