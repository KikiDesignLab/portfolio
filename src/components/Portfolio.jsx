import React from "react";

const Portfolio = () => {
  return (
    <>
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
                  href="#about"
                  className="text-nav font-mono text-grey hover:text-main transition duration-300"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="py-16 bg-bg">
        <div className="container mx-auto flex flex-col text-left">
          <h1 className="text-hero font-hero mb-4 text-main">
            Hello,
          </h1>
          <p className="text-body font-primary text-main mb-8 max-w-2xl">
            I'm Fátima, a product designer shaped at the intersection of people and product
          </p>
        </div>
      </section>

      { }
      <section id="works" className="py-12 bg-bg">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src="/portfolio/images/projects/GF-app.png"
                alt="Find Me Gluten Free Redesign"
                className="w-full aspect-[3/2] object-cover"
              />
              <div className="p-6">
                <h3 className="text-h3 font-primary mb-2 text-grey">
                  Find Me Gluten Free Redesign
                </h3>
                <p className="text-body mb-4 text-grey">
                  Redesigned the home and interaction flow to improve clarity, discoverability, and user trust through simplified navigation and better safety education.
                </p>
                <a
                  href="./case-study/GF-app/"
                  className="text-main hover:underline font-medium"
                >
                  View Case Study
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src="/portfolio/images/projects/onboarding-redesign.png"
                alt="Onboarding"
                className="w-full aspect-[3/2] object-cover"
              />
              <div className="p-6">
                <h3 className="text-h3 font-primary mb-2 text-grey">
                  Onboarding for Monetisation
                </h3>
                <p className="text-body mb-4 text-grey">
                  Designed a new onboarding for a Scanner app to help users quickly familiarise with core features, leading to improved conversion.
                </p>
                <a
                  href="./case-study/onboarding-redesign/"
                  className="text-main hover:underline font-medium"
                >
                  View Case Study
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src="/portfolio/images/projects/mobile-banking-app.png"
                alt="Mobile Banking App"
                className="w-full aspect-[3/2] object-cover"
              />
              <div className="p-6">
                <h3 className="text-h3 font-primary mb-2 text-grey">
                  Mobile Banking App
                </h3>
                <p className="text-body mb-4 text-grey">
                  Designed a mobile banking experience that helps people demystify financial insecurities and take ownership of their finances.
                </p>
                <a
                  href="./case-study/mobile-banking-app/"
                  className="text-main hover:underline font-medium"
                >
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-h2 font-primary font-bold mb-6 text-main">
            About Me
          </h2>

          <p className="text-body font-primary text-main mb-4 leading-relaxed">
            In the mix of HR and Product, I’ve always found myself at the intersection of listening to people and solving problems. Being a learner at heart, I keep my curiosity alive by constantly exploring, reading, and experimenting. I bring a unique blend of human-centered skills and design curiosity to every challenge I tackle, striving to create thoughtful, user-centered solutions that balance business goals with real human needs.
          </p>

          <p className="text-body font-primary text-main mb-4 leading-relaxed">
            I lose sleep to books, painting and silly little side quests.
          </p>

          <p className="text-body font-primary text-main mb-8 leading-relaxed">
            I'm drawn to challenges where I can think deeply about a topic and merge aesthetics with functionality to craft clear, purposeful experiences.
          </p>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-bg text-grey py-12 border-t border-line">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">

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
