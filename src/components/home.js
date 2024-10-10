import React from "react";
import { Link } from "react-router-dom";
import myImg from "../assets/IMG_5685-modified.png";

const Home = () => {
  return (
    // <header>
    //   <div class="color-blue font-custom text-7xl p-4">Akshay's site</div>
    //   <div class="font-custom text-3xl">A bunch of mini projects</div>
    //   <div class="flex mx-48">
    //     <a
    //       href="google.com"
    //       class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow
    //        hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    //     >
    //       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         <Link to="/password">
    //           <button className="bg-blue-500 px-4 text-white ml-4 rounded-full">
    //             The password game
    //           </button>
    //         </Link>
    //       </h5>
    //       <p class="font-normal text-gray-700 dark:text-gray-400">&^$#(@*#()</p>
    //     </a>
    //   </div>
    // </header>
    <div>
      <div class="bg2">
        <header class="header">
          <div class="flex container mx-20">
            <img
              class="profile-image img-responsive flex justify-start"
              src={myImg}
              alt="Akshay Kumar"
              width="20%"
              height="20%"
            />
            <div class="profile-content flex flex-row">
              <div class="flex flex-col items-start">
                <h1 class="name font-custom">Akshay Kumar</h1>
                <h2 class="desc font-custom">
                  Software Engineer | Technology Enthusiast | Basketball fan
                </h2>
                <ul class="social flex flex-row">
                  <li>
                    <a href="https://www.linkedin.com/in/welcome-to-akshays-profile/">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li class="ml-4">
                    <a href="https://github.com/imdoom">
                      <i class="fa fa-github-alt"></i>
                    </a>
                  </li>
                  <li>
                    <div class="projects ml-4 font-custom">Projects</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div>
          <section class="about-me">
            <div class="about-me-heading font-custom  mt-8">About Me</div>
            <div>
              <p class="font-custom">
                Hi! I started my front-end journey 6 years ago when I was asked
                to build a progress dashboard for my team at my first job. Ever
                since I have been dabbling in banners, navbars, buttons,
                dropdowns and the like. I am a visual person so the allure of
                what you code is what you see was compeling enough for me to
                keep tinkering with UI. I moved to the US about 5 years ago
                where I pursued my masters degree in Computer Science at
                Northwestern University. Over there, I focused on human computer
                interaction and took a bunch of UI focused projects and courses.
                I learnt a lot about usability, rapid prototyping, design,
                working in sprint teams, React/JSX, etc. My career includes
                stints with two multinational corporations. I'm looking for my
                next venture where I can express myself creatively and work on
                interesting collaborative projects.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div class="bg">
        <div class="flex games-container">
          <div>
            <a
              class="block mx-10 max-w-sm p-6 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <button className="bg-yellow-100 px-4 text-gray-800 ml-4 rounded-full">
                  More games incoming...
                </button>
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                More games incoming...
              </p>
            </a>
          </div>
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
                &^$#(@*#()
              </p>
            </a>
          </Link>
          <div>
            <a
              class="block mx-10 max-w-sm p-6 border border-black bg-white rounded-lg shadow
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <button className="bg-yellow-100 px-4 text-gray-800 ml-4 rounded-full">
                  More games incoming...
                </button>
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                More games incoming...
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
