"use client";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoMdSunny, IoMdMoon } from "react-icons/io"; // Icons for light and dark mode
import { TiHomeOutline } from "react-icons/ti";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";

function DockMenu() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Define your icons
  const icons = [
    { id: 1, icon: <TiHomeOutline />, tooltip: "Home", href: "/" },
    {
      id: 2,
      icon: <IoDocumentTextOutline />,
      tooltip: "Resume",
      href: "resume",
    },
    {
      id: 3,
      icon: <FaGithub />,
      tooltip: "GitHub",
      href: "https://github.com/DanteTerry",
    },
    {
      id: 4,
      icon: <FaLinkedin />,
      tooltip: "LinkedIn",
      href: "https://www.linkedin.com/in/arpityadav0",
    },
    {
      id: 5,
      icon: <FaXTwitter />,
      tooltip: "Twitter",
      href: "https://x.com/DanteTerry_",
    },
  ];

  return (
    <div className="fixed bottom-3 w-full">
      <div className="mx-auto flex w-max items-center gap-4 rounded-full border bg-white/80 px-6 py-3 shadow-lg backdrop-blur-lg transition-all duration-300 dark:border-none dark:bg-[#171718]/80">
        <TooltipProvider>
          {/* Map through icons array */}
          {icons.map(({ id, icon, tooltip, href }, index) => (
            <div key={id} className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger>
                  <Link href={href} target={href !== "/" ? "_blank" : "_self"}>
                    <div className="text-xl text-gray-800 transition-transform duration-200 hover:scale-110 dark:text-gray-200">
                      {icon}
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="top-5 mb-4">
                  <p className="text-white-700 font-semibold dark:text-black">
                    {tooltip}
                  </p>
                </TooltipContent>
              </Tooltip>

              {(index === 1 || index === 4) && (
                <div className="h-[24px] w-[1.5px] bg-gray-400 dark:bg-gray-500"></div>
              )}
            </div>
          ))}

          {/* Dark mode toggle button */}
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={toggleDarkMode}
                className="cursor-pointer text-xl text-gray-800 transition-transform duration-200 hover:scale-110 dark:text-gray-200"
              >
                {isDarkMode ? <IoMdSunny /> : <IoMdMoon />}
              </div>
            </TooltipTrigger>
            <TooltipContent className="top-5 mb-4">
              <p className="font-semibold text-white dark:text-black">
                {isDarkMode ? "Light mode" : "Dark mode"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

export default DockMenu;
