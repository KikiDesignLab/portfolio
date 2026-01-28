import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  return (
    <>
      <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Fátima Rodrigues | Portfolio</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
          <link rel="icon" type="image/svg+xml" href="/portfolio/favicon.svg" />
        </Helmet>

      {/* Header */}
      <header className="bg-bg py-4 px-6 lg:px-12 sticky top-0 z-50 border-b border-line">
        <div className="container mx-auto flex justify-between items-center">
          {/* Name */}
          <span className="text-nav font-mono text-main">
            Fátima Rodrigues
          </span>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#works"
                  className="text-nav font-mono text-grey hover:text-main transition duration-300"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="./about-me/"
                  className="text-nav font-mono text-grey hover:text-main transition duration-300"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-9 lg:pt-60 bg-bg px-6 lg:px-12">
        <div className="container mx-auto flex flex-col text-left">
          <h1 className="text-hero font-hero mb-4 text-main">
            Hello,
          </h1>
          <p className="text-body font-primary text-main max-w-2xl">
            I'm Fátima, a product designer shaped at the intersection of people and product.
          </p>
        </div>
      </section>

      { }
      {/* Works Section */}
      <section id="works" className="bg-bg px-6 lg:px-12 pt-8 lg:pt-12 pb-9 lg:pb-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Project 1 */}
            <a
              href="./case-study/gf-app/"
              className="group rounded-lg overflow-hidden relative block"
            >
              <img
                src="/portfolio/images/projects/gf-app.png"
                alt="Find Me Gluten Free Redesign"
                className="w-full aspect-[3/2] object-cover"
              />
              {/* Info box */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-4 gap-2">
                <p className="text-body font-primary text-main">
                  Redesigning for Trust
                </p>
                <span className="text-meta font-primary uppercase tracking-wider text-grey">
                  Find Me Gluten Free • 2025
                </span>
              </div>
            </a>

            {/* Project 2 */}
            <a
              href="./case-study/onboarding-redesign/"
              className="group rounded-lg overflow-hidden relative block"
            >
              <img
                src="/portfolio/images/projects/onboarding-redesign.png"
                alt="Onboarding"
                className="w-full aspect-[3/2] object-cover"
              />
              {/* Info box */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-4 gap-2">
                <p className="text-body font-primary text-main">
                  Onboarding for Monetisation
                </p>
                <span className="text-meta font-primary uppercase tracking-wider text-grey">
                  Scanner Air • 2025
                </span>
              </div>
            </a>

            {/* Project 3 */}
            <a
              href="./case-study/mobile-banking-app/"
              className="group rounded-lg overflow-hidden relative block"
            >
              <img
                src="/portfolio/images/projects/mobile-banking-app.png"
                alt="Mobile Banking App"
                className="w-full aspect-[3/2] object-cover"
              />
              {/* Info box */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-4 gap-2">
                <p className="text-body font-primary text-main">
                  Mobile Banking App
                </p>
                <span className="text-meta font-primary uppercase tracking-wider text-grey">
                  Moey • 2024
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg text-grey py-4 border-t border-line px-6 lg:px-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-left text-left md:text-left">

          {/* Designed with ♡ by Fátima */}
          <p className="flex items-center gap-2 text-meta font-primary uppercase tracking-wider mb-4 md:mb-0">
            Designed + coded with
            <span className="text-main text-xl heartbeat-animation">♡</span>
            by Fátima
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/fatimamnrodrigues/"
              className="text-grey hover:text-main transition duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.behance.net/fmrodrigues"
              className="text-grey hover:text-main transition duration-300"
            >
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};



export default Portfolio;
