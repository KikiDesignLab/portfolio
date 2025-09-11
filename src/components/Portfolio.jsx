import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 py-4 px-6 md:px-12 sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Fátima Rodrigues
          </div>
          <div className="flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
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
                <li>
                  <a
                    href="#contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
                  >
                    Contact
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-100 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Crafting Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm Fátima, a product designer focused on creating intuitive and
            delightful user experiences that solve real problems.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="works"
        className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src="https://picsum.photos/seed/project1/400/250"
                alt="Onboarding"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Onboarding Redesign
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Designed the new onboarding for a Scanner app to help users
                  quickly familiarize with core features of the app leading to
                  an increase on conversion rates by 23%.
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Case Study →
                </a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src="https://picsum.photos/seed/project2/400/250"
                alt="Mobile Banking App"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Mobile Banking App
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Designed a new mobile banking experience focusing on
                  accessibility and simplicity, resulting in a 40% increase in
                  daily active users.
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Case Study →
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
              I specialize in creating user-centered solutions that balance
              business goals with user needs. I believe in the power of
              collaboration and continuous learning to drive innovation.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I’m eager to work in a field where I can think deeply about a
              topic and come up with an efficient and pleasing solution to solve
              it, having people’s experience at the forefront. I enjoy painting
              in watercolour, I’m an avid reader and appreciate long walks with
              some music on.
            </p>
            <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-3 px-8 rounded-full transition duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Let's Connect
          </h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-12 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p>&copy; 2025 Fátima Rodrigues. All rights reserved.</p>
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
