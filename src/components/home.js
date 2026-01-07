import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import src from "../assets/IMG_5685-modified.png";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const scrollBottom = () => {
    // smooth animated scroll to bottom
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // If navigated with a hash to the games section, scroll after loading finishes
    if (!loading && window.location.hash === "#games") {
      scrollBottom();
      // remove the hash so repeated navigation doesn't always auto-scroll
      try {
        window.history.replaceState(null, "", window.location.pathname);
      } catch (e) {}
    }
  }, [loading]);

  return (
    <div>
      {loading && (
        <div role="status" class="h-screen flex items-center justify-center">
          <svg
            aria-hidden="true"
            class="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
      <div class={loading ? "invisible" : "visible"}>
        <style>{`@keyframes spinBasket { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spin-basket { display: inline-block; animation: spinBasket 1.8s linear infinite; }
        `}</style>
        <div class="bg2">
          <header class="header">
            <div class="flex container mx-20">
              <img
                class="profile-image img-responsive flex justify-start"
                src={src}
                alt="Akshay Kumar"
                width="20%"
                height="20%"
                id="akshay"
                onLoad={() => setLoading(false)}
              />
              <div class="profile-content flex flex-row">
                <div class="flex flex-col items-start">
                  <h1 class="name font-custom">Akshay Kumar</h1>
                  <h2 class="desc font-custom">
                    Software Engineer | Technology Enthusiast | Basketball fan
                    <a
                      href="https://www.nba.com/lakers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                      aria-label="LA Lakers"
                      title="Open LA Lakers site"
                    >
                      <span className="spin-basket" aria-hidden="true">
                        🏀
                      </span>
                    </a>
                  </h2>
                  <ul class="social flex flex-row">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/welcome-to-akshays-profile/"
                        target="_blank"
                      >
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li class="ml-4">
                      <a href="https://github.com/imdoom" target="_blank">
                        <i class="fa fa-github-alt"></i>
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <button
                          onClick={() => scrollBottom()}
                          class="projects ml-4 font-custom border-4 p-1 border-indigo-500/50 border-solid"
                        >
                          Games
                        </button>
                        <button
                          onClick={() => scrollToProjects()}
                          class="projects ml-4 font-custom border-4 p-1 border-indigo-500/50 border-solid"
                        >
                          Projects
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div>
            <section class="about-me">
              <div class="about-me-heading font-custom flex justify-center items-center">
                About Me
              </div>
              <div class="excuse-me">
                <p class="font-custom">
                  Hi! I started my front-end journey 6 years ago when I was
                  asked to build a progress dashboard for my team at my first
                  job. Ever since I have been dabbling in banners, navbars,
                  buttons, dropdowns and the like. I am a visual person so the
                  allure of what you code is what you see was compeling enough
                  for me to keep tinkering with UI. I moved to the US about 6
                  years ago where I pursued my masters degree in Computer
                  Science at Northwestern University. Over there, I focused on
                  human computer interaction and took a bunch of UI focused
                  projects and courses. I learnt a lot about usability, rapid
                  prototyping, design thinking, accessibility, working with
                  sprint teams, React/JSX, etc. My career includes stints with
                  two multinational corporations. I'm looking for my next
                  venture where I can express myself creatively and work on
                  interesting collaborative projects.
                </p>
              </div>
            </section>
          </div>
        </div>
        <div class="bg-projects flex items-center" id="projects">
          <section class="nb-section">
            <heading class="nb-heading flex flex-start">
              ArcGIS Notebooks
            </heading>
            <div class="font-custom flex items-stretch">
              <img class="notebooks"></img>
              <div class="notebooks-section">
                ArcGIS Notebooks provides a Jupyter Notebook (data science tool) experience
                optimized for spatial analysis. Combine industry-leading spatial
                analysis algorithms with open-source Python libraries to build
                precise spatial data science models. Users ideate, iterate, and
                share workflows in a secure environment—accessible from anywhere and 
                convey results with beautiful, interactive maps and apps for
                data storytelling that drives insight and action. I worked as a lead developer
                on the ArcGIS Notebooks team at Esri where I helped build key features
                like tasks scheduler, jupyterlab extension, internationalization, assessibility, etc.
              </div>
            </div>
          </section>
        </div>
        <div class="bg">
          <div class="flex games-container">
            <Link to="/clickspeed">
              <a
                class="block mx-10 max-w-sm p-6 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-green-500 px-4 text-white ml-4 rounded-full">
                    Click Speed Tester
                  </button>
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Test your clicking speed in 10 seconds and save your best
                  score.
                </p>
              </a>
            </Link>
            <Link to="/password">
              <a
                class="block max-w-sm p-6 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-blue-500 px-4 text-white ml-4 rounded-full">
                    The password game
                  </button>
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  How good are you at creating strong passwords?
                </p>
              </a>
            </Link>
            <Link to="/memory">
              <a
                class="block mx-10 max-w-sm p-6 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-pink-500 px-4 text-white ml-4 rounded-full">
                    Memory Sequence
                  </button>
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Classic Simon-like memory game — repeat the color sequence.
                </p>
              </a>
            </Link>
          </div>
          <div class="flex justify-center mt-6">
            <div
              class="block mx-10 max-w-sm p-6 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <button className="bg-yellow-500 px-4 text-white ml-4 rounded-full">
                  Adding more games...
                </button>
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                I'm constantly adding new mini-games — check back soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
