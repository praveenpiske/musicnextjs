import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";


const Instructors = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Project Manager",
      image:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Emily Johnson",
      designation: "UI/UX Designer",
      image:
        "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Michael Brown",
      designation: "Data Scientist",
      image:
        "https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="relative h-[38.6rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-uto flex flex-col items-center justify-center h-full">
        <h2 className=" font-bold text-8xl mb-4 text-center mb-8">
          {" "}
          Meet Our Instructors
        </h2>
        <p className="text-base text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
