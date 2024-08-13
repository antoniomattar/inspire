import { Button } from "@/components/ui/button";

interface Interest {
  label: string;
  img: string;
  selected?: boolean;
}

export default function Explore() {
  const interests: Interest[] = [
    {
      label: "FITNESS",
      img: "/assets/interests/fitness.avif",
      selected: true,
    },
    {
      label: "DESIGN",
      img: "/assets/interests/design.jpeg",
      selected: true,
    },
    {
      label: "EDUCATION",
      img: "/assets/interests/education.jpeg",
      selected: true,
    },
    { label: "DIY CRAFTS", img: "/assets/interests/diy.png" },
    { label: "HOME", img: "/assets/interests/home.avif" },
    { label: "FOOD&DRINK", img: "/assets/interests/food.avif" },
    { label: "HAIR&BEAUTY", img: "/assets/interests/hair-and-beauty.jpeg" },
    { label: "GARDENING", img: "/assets/interests/gardening.webp" },
    {
      label: "CARS",
      img: "/assets/interests/cars.webp",
      selected: true,
    },
    { label: "TRAVEL", img: "/assets/interests/travel.png" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="flex items-center justify-center space-x-6">
        <div className="flex flex-col items-center space-y-2">
          <UserIcon className="w-12 h-12 text-yellow-400" />
          <span className="text-white">Create account</span>
        </div>
        <div className="h-0.5 w-16 bg-gray-300" />
        <div className="flex flex-col items-center space-y-2">
          <CameraIcon className="w-12 h-12 text-yellow-400" />
          <span className="text-white">Set your Interests</span>
        </div>
        <div className="h-0.5 w-16 bg-gray-300" />
        <div className="flex flex-col items-center space-y-2">
          <UsersIcon className="w-12 h-12 text-gray-300" />
          <span className="text-gray-300">Customize your Profile</span>
        </div>
      </div>
      <div className="bg-white p-8 mt-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-center text-xl font-semibold mb-6">
          Choose your interests
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="relative">
                <img
                  src={interest.img}
                  alt={interest.label}
                  className="w-20 h-20 rounded-full"
                />
                {interest.selected && (
                  <CheckIcon className="absolute w-6 h-6 text-white bg-blue-500 rounded-full top-2 right-2" />
                )}
              </div>
              <span className="text-sm font-medium">{interest.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Button
            variant="default"
            className="px-6 py-2 bg-slate-300 hover:bg-slate-400"
          >
            Next
            <RightArrowIcon className="w-6 h-6 ml-2 text-slate-500" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function CameraIcon(props: any) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
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

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

function RightArrowIcon(props: any) {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
