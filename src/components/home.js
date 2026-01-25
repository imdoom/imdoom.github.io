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
                          Mini-Games
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
                  asked to build a CI/CD progress dashboard for my team at my
                  first job. Ever since I have been dabbling in banners,
                  navbars, buttons, dropdowns and the like. I am a visual person
                  so the allure of what you code is what you see was compeling
                  enough for me to keep tinkering with UI/UX. I moved to the US
                  about 6 years ago where I pursued my masters degree in
                  Computer Science at Northwestern University. Over there, I
                  focused on human computer interaction and took a bunch of UI
                  focused projects and courses. I learnt a lot about usability,
                  rapid prototyping, design thinking, accessibility, working in
                  sprints, React/JSX, etc. My career includes stints with two
                  multinational corporations. I'm looking for my next venture
                  where I can express myself creatively and work on user-centric
                  cutting edge projects.
                </p>
              </div>
            </section>
          </div>
        </div>
        <div class="project flex items-center" id="projects">
          <section class="nb-section">
            <heading class="nb-heading flex flex-start">
              ArcGIS Notebooks
            </heading>
            <div class="font-custom flex items-stretch">
              <img class="notebooks"></img>
              <div class="notebooks-section">
                Integrated jupyter notebook (data science tool) with entrprize
                software. Users ideate, iterate, and share workflows in a secure
                environment—accessible from anywhere and convey results with
                beautiful, interactive maps and apps for data storytelling that
                drives insight and action. I lead the UI/UX development on the
                ArcGIS Notebooks team at Esri where I helped build key features
                like tasks scheduler, jupyterlab extension, collboration &
                sharing, spacial data analysis, etc. and implemented inclusive
                design principles like localization, internationalization,
                assessibility, responsive design etc.
              </div>
            </div>
          </section>
        </div>
        <div class="project flex items-center" id="projects">
          <section class="nb-section">
            <heading class="md-heading flex flex-start">Mortgage Diary</heading>
            <div class="font-custom flex items-stretch">
              <div class="md-section flex justify-center">
                Mortgage diary is an application for booking appointments by
                customers for their regular mortgage and loan needs for both
                brands of the bank, RBS and Natwest. I worked on this app
                extensisvely from design to production level development. We
                used feedback from our users and stakeholders to sucessfully
                iterate over multiple versions of the app to reach the final
                product which was widely used across our customer
                division(mortgage). Built using React and Redux.
              </div>
              <img class="md"></img>
            </div>
          </section>
        </div>
        <div class="project flex items-center" id="projects">
          <section class="nb-section">
            <heading class="nb-heading flex flex-start">
              Courses Scheduler
            </heading>
            <div class="font-custom flex items-stretch">
              <img class="cs"></img>
              <div class="notebooks-section">
                Course scheduler schedules time conflicting courses with various
                and to create and modify schedules for the semeseter and saves
                the schedule in the student's login. Implemented SSO using
                google API. Built with modern React and JavaScript. I worked as
                in a group to build this app as part of my university course
                callled rapid prototyping at Northwestern University. Built with
                React/TypeScript and Firebase for authentication,
                fetching/updating live data and hosting.
              </div>
            </div>
          </section>
        </div>
        <div class="project flex items-center" id="projects">
          <section>
            <heading class="md-heading flex flex-start">Product finder</heading>
            <div class="font-custom flex items-stretch">
              <div class="pf-section flex justify-center">
                Product finder is a legacy banking application which aims to
                find products based on customer requirements and previous
                purshases. I worked on both web and mobile versions keeping in
                mind the responsiveness and custom components requirements for
                tablets. Various UX considerations were implemented such as
                checkbox labels working in tandem with the checkbox, nearest
                value rounding for denominations, progress panels highlighting
                completed steps, breadcrumb progress bars showing mid steps,
                responsive scaling in vertical as well as horizontal display in
                iPad and scaling with screen size in the desktop application.
                The technology stack used was HTML5/Css3 and Bootstrap in
                front-end side and ASP.NET for back-end.
              </div>
              <img class="md"></img>
            </div>
          </section>
        </div>
        <div class="bg">
          <div class="flex games-container justify-center gap-4 flex-wrap px-4">
            <Link to="/clickspeed">
              <a
                class="block p-4 w-56 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-green-500 px-4 text-white ml-4 rounded-full">
                    ⚡ Click Speed Tester
                  </button>
                </h5>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                  Test your clicking speed in 10 seconds and save your best
                  score.
                </p>
              </a>
            </Link>
            <Link to="/password">
              <a
                class="block p-4 w-56 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-blue-500 px-4 text-white ml-4 rounded-full">
                    🔐 The password game
                  </button>
                </h5>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                  How good are you at creating strong passwords?
                </p>
              </a>
            </Link>
            <Link to="/memory">
              <a
                class="block p-4 w-56 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-pink-500 px-4 text-white ml-4 rounded-full">
                    🧠 Memory Sequence
                  </button>
                </h5>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                  Classic Simon-like memory game — repeat the color sequence.
                </p>
              </a>
            </Link>
            <Link to="/tictactoe">
              <a
                class="block p-4 w-56 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-purple-500 px-4 text-white ml-4 rounded-full">
                    ⭕ Tic Tac Toe
                  </button>
                </h5>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                  Classic Tic Tac Toe game — Challenge yourself against AI
                  opponent.
                </p>
              </a>
            </Link>
            <Link to="/flappybird">
              <a
                class="block p-4 w-56 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-red-500 px-4 text-white ml-4 rounded-full">
                    🎮 Flappy Bird
                  </button>
                </h5>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                  Navigate through obstacles and beat your high score.
                </p>
              </a>
            </Link>
            <Link to="/guessthenumber">
              <a
                class="block p-4 w-56 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-orange-500 px-4 text-white ml-4 rounded-full">
                    🎲 Guess the Number
                  </button>
                </h5>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                  Guess the random number with minimum attempts possible.
                </p>
              </a>
            </Link>
            <Link to="/whackamole">
              <a
                class="block p-4 w-56 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-indigo-500 px-4 text-white ml-4 rounded-full">
                    🔨 Whack-a-Mole
                  </button>
                </h5>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                  Click fast to hit the moles and rack up your score.
                </p>
              </a>
            </Link>
            <Link to="/reactiontime">
              <a
                class="block p-4 w-56 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-cyan-500 px-4 text-white ml-4 rounded-full">
                    💪 Reaction Time
                  </button>
                </h5>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                  Test your reflexes and measure your reaction speed.
                </p>
              </a>
            </Link>
            <Link to="/2048">
              <a
                class="block p-4 w-56 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <button className="bg-lime-500 px-4 text-white ml-4 rounded-full">
                    🎯 2048 Game
                  </button>
                </h5>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
                  Slide tiles to combine them and reach the 2048 tile.
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
