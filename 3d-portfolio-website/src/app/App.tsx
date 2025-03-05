"use client";

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import Feedbacks from "@/components/Feedbacks";
import Contact from "@/components/Contact";
import { StarsCanvas } from "@/components/canvas";

export default function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-[url('/herobg.png')] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
