"use client"
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {

const upcoming = [
    {
      isFeatured: true,
      title: "Classical Piano Recital",
      description: "An enchanting evening showcasing the talent of our advanced piano students.",
      slug: "classical-piano-recital",
      id:1,
    },
    {
      isFeatured: true,
      title: "Guitar Masterclass with John Doe",
      description: "A special session with renowned guitarist John Doe, focusing on advanced techniques.",
      slug: "guitar-masterclass-john-doe",
      id:2,
    },
    {
      isFeatured: false,
      title: "Jazz Improvisation Workshop",
      description: "Learn the art of jazz improvisation in this hands-on workshop led by industry professionals.",
      slug: "jazz-improvisation-workshop",
      id:3,
    },
    {
      isFeatured: true,
      title: "Vocal Harmony Showcase",
      description: "A captivating performance by our vocal students, featuring beautiful harmonies and melodies.",
      slug: "vocal-harmony-showcase",
      id:4,
    },
    {
      isFeatured: false,
      title: "Beginner's Drumming Camp",
      description: "A fun and engaging camp introducing beginners to the fundamentals of drumming.",
      slug: "beginners-drumming-camp",
      id:5,
    },
    
    {
      isFeatured: false,
      title: "Songwriting Workshop",
      description: "Learn how to write impactful songs with guidance from experienced songwriters.",
      slug: "songwriting-workshop",
      id:6,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINAR
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="m-10">
            <HoverEffect
            items={upcoming.map(webinar=>({
                title: webinar.title,
                description: webinar.description,
                link:"/"
            }))}
            
            />


        </div>
        <div className="m-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded-2xl border border-neutral-600 text-neutral-700 bg-white hover:bg-teal-600 hover:text-white transition duration-300"
          >
            View ALL Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
