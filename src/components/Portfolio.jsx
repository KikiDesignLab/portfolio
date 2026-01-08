import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (!isClient) return;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, isClient]);

  useEffect(() => {
    if (!isClient) return;

    const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/svg+xml";

    favicon.href = isDarkMode
      ? `${import.meta.env.BASE_URL}Favicon-dark.svg`
      : `${import.meta.env.BASE_URL}Favicon-light.svg`;

    // Append if not already in document
    if (!document.head.contains(favicon)) {
      document.head.appendChild(favicon);
    }

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, isClient]);

  return (
    <>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 py-4 px-6 lg:px-12 sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={
                isDarkMode
                  ? `${import.meta.env.BASE_URL}Favicon-dark.svg`
                  : `${import.meta.env.BASE_URL}Favicon-light.svg`
              }
              alt="Logo"
              className="w-7 h-7 lg:w-8 lg:h-8"
            />
            <span className="text-xl text-gray-800 dark:text-gray-100">
              Fátima Rodrigues
            </span>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 ml-4 sm:ml-6">
            <nav>
              <ul className="flex space-x-4 sm:space-x-6 lg:space-x-8">
                <li>
                  <a
                  href="#works"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
            >
                  Works
                </a>
              </li>
              <li>
                <a
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
            >
                About
              </a>
            </li>
          </ul>
        </nav>
        <label className="theme-toggle">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div >
</header >

      {/* Hero Section */}
      {/* 
      <section  className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Hi, I'm Fátima,
          </h1>
          <p className="text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            An HR Specialist turned Product Designer, bringing curiosity, empathy, and a drive to learn to every project.
          </p>
        </div>
      </section>
      */}


{/* Career Section */}
<section
  id="career"
  className="pt-64 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
>
  <div className="container mx-auto px-6 md:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20 md:items-center">
      {/* Left Column - Introduction */}
        <div>
          <h1
            className="text-4xl font-noto-serif md:text-5xl text-gray-900 dark:text-gray-100"
            style={{ lineHeight: '1.2' }}
          >
            I'm Fátima, a Product Designer with roots in HR.
          </h1>
        </div>
      {/* Right Column - Experience */}
      <div className="space-y-3 text-sm md:text-base">
        {/* Air Apps */}
        <div className="flex items-baseline gap-8">
          <span className="text-gray-600 dark:text-gray-400 min-w-[100px] ">
            2024 – 2025
          </span>
          <a
            href="https://airapps.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100  hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 min-w-[100px] shrink-0"
          >
            Air Apps
          </a>
          <span className="text-gray-600 dark:text-gray-400">
            Junior Product Designer
          </span>
        </div>

        {/* Farfetch - Business Partner */}
        <div className="flex items-baseline gap-8">
          <span className="text-gray-600 dark:text-gray-400 min-w-[100px]">
            2021 – 2023
          </span>
          <a
            href="https://farfetch.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 min-w-[100px] shrink-0"
          >
            Farfetch
          </a>
          <span className="text-gray-600 dark:text-gray-400">
            People Partner
          </span>
        </div>

        {/* Farfetch - Talent Acquisition */}
        <div className="flex items-baseline gap-8">
          <span className="text-gray-600 dark:text-gray-400 min-w-[100px]">
            2017 – 2021
          </span>
          <a
            href="https://farfetch.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 min-w-[100px] shrink-0"
          >
            Farfetch
          </a>
          <span className="text-gray-600 dark:text-gray-400">
            Talent Acquisition Specialist
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Case Studies Section */}
      <section
        id="works"
        className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src="/portfolio/images/projects/GF-app.png"
                alt="Find Me Gluten Free Redesign"
                className="w-full aspect-[3/2] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Find Me Gluten Free Redesign
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Redesigned the home experience and interaction flow of the app to improve clarity,
                  discoverability, and user trust through simplified navigation and better safety education.
                </p>
                <a
                  href="./case-study/GF-app/"
                  className="text-blue-600 dark:text-blue-300 hover:underline font-medium"
                >
                  <strong>View Case Study</strong>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src="/portfolio/images/projects/onboarding-redesign.png"
                alt="Onboarding"
                className="w-full aspect-[3/2] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Onboarding for Monetisation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Designed a new onboarding for a Scanner app to help users quickly familiarise with
                  core features, leading to improved conversion.
                </p>
                <a
                  href="./case-study/onboarding-redesign/"
                  className="text-blue-600 dark:text-blue-300 hover:underline font-medium"
                >
                  <strong>View Case Study</strong>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src="/portfolio/images/projects/mobile-banking-app.png"
                alt="Mobile Banking App"
                className="w-full aspect-[3/2] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Mobile Banking App
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Designed a mobile banking experience that helps people demystify financial
                  insecurities and take ownership of their finances.
                </p>
                <a
                  href="./case-study/mobile-banking-app/"
                  className="text-blue-600 dark:text-blue-300 hover:underline font-medium"
                >
                  <strong>View Case Study</strong>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              In the mix of HR and Product, I’ve always found myself at the intersection
              of listening to people and solving problems. Being a learner at heart, I keep my curiosity
              alive by constantly exploring, reading, and experimenting, trying to become a little better
              with each project. I bring a unique blend of human-centered skills and design curiosity to every
              challenge I tackle, striving to create thoughtful, user-centered solutions that balance business goals with real human needs.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I lose sleep to books, painting and silly little side quests. I've been actively exploring the intersection of design and development through personal projects, such as this
              little corner of the web, and discovering the power of "vibe coding" that allows rapidly prototyping and refining
              user experiences directly in code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I'm drawn to challenges where I can think deeply about a topic and merge aesthetics with functionality to craft clear, purposeful experiences.
            </p>
            {/* <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-3 px-8 rounded-full transition duration-300">
              Download Resume
            </button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-12 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="flex items-center gap-2">
                Designed with
                <button
                  className="group relative inline-flex items-center justify-center p-1 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
                  aria-label="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart w-[15px] h-[15px] transition-all duration-300 transform text-foreground-light hover:text-primary relative z-10 heart-hover"
                    aria-hidden="true"
                    style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </button>
                by Fátima
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/fatimamnrodrigues/"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.behance.net/fmrodrigues"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition duration-300"
              >
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
