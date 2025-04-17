"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
  const ourcontent = [
    {
      id: 1,
      title: "Beginner Guitar Lessons",
      description:
        "Learn the basics of playing the guitar, including chords, strumming patterns, and simple songs. Perfect for absolute beginners looking to start their musical journey.",
    },
    {
      id: 2,
      title: "Piano for Beginners",
      description:
        "Discover the fundamentals of piano playing, from understanding keys and scales to playing your first melody. Ideal for those with little to no prior experience.",
    },
    {
      id: 3,
        title: "Vocal Training Essentials",
      description:
        "Enhance your singing skills with professional vocal techniques, breathing exercises, and pitch training. Suitable for aspiring singers of all levels.",
    },
    {
      id: 4,
        title: "Music Theory Made Easy",
      description:
        "Explore the foundation of music theory, including reading sheet music, understanding chords, and building melodies. Great for musicians of any instrument.",
    },
  ];

  return <div>
    <StickyScroll content={ourcontent} />
  </div>;
};

export default WhyChooseUs;
