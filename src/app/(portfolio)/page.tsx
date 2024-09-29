"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Education from "./_components/Education";
import Header from "./_components/Header";
import Projects from "./_components/Projects";
import Skill from "./_components/Skill";

const sectionVariants = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

function SectionWrapper({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <section className="mx-auto flex h-full w-full overflow-hidden bg-gray-300 px-5 py-20 text-black dark:bg-[#0A0A0A] dark:text-white sm:w-[640px]">
      <div className="flex flex-col gap-10 overflow-hidden">
        <SectionWrapper>
          <Header />
        </SectionWrapper>
        <SectionWrapper>
          <About />
        </SectionWrapper>
        <SectionWrapper>
          <Education />
        </SectionWrapper>
        <SectionWrapper>
          <Skill />
        </SectionWrapper>
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </div>
    </section>
  );
}
