import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TestimonialCards = () => {
  const testimonials = [
    {
      quote:
        "Joining this music school was the best decision I made! The instructors are passionate and incredibly skilled, making every class enjoyable.",
      name: "Alice Brown",
      title: "Piano Student",
      id:1,
    },
    {
      quote:
        "I’ve learned so much in just a few months. The lessons are well-structured, and the personal attention I received was outstanding.",
      name: "Tom Davis",
      title: "Guitar Enthusiast",
      id:2,
    },
    {
      quote:
        "This school transformed my love for music into real skills. The vocal training program boosted my confidence and refined my voice.",
      name: "Sophia Martinez",
      title: "Vocalist",
      id:3,
    },
    {
      quote:
        "The instructors not only teach music but also inspire a deep appreciation for it. The courses are worth every penny!",
      name: "Jake Wilson",
      title: "Music Theory Student",
      id:4,
    },
    {
      quote:
        "A wonderful place to learn and grow as a musician. The supportive environment and expert guidance make all the difference.",
      name: "Emma Clark",
      title: "Violin Student",
      id:5,
    },
  ];

  return (
    <div className="dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl text-black dark:text-white font-bold text-center mb-10">
        Hear Our Harmony : Voices of Success
      </h2>

      <div >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default TestimonialCards;
