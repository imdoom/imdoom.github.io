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
    <div class="bg">
      <header class="header">
        <div class="flex container mx-20">
          <img
            class="profile-image img-responsive flex justify-start"
            src={myImg}
            alt="Akshay Kumar"
            width="250"
            height="250"
          />
          <div class="profile-content flex flex-col items-start">
            <h1 class="name">Akshay Kumar</h1>
            <h2 class="desc">
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
            </ul>
          </div>
        </div>
      </header>
      <div class="container">
        <section>
          <h2 class="heading about-me-heading font-custom">About Me</h2>
          <div class="about-me mt-3">
            <p class="font-custom">
              Hi! I started my front-end journey 6 years ago when I was asked to
              build a progress monitor dashboard for my team at my first job.
              Ever since I have been dabbling in banners, navbars, buttons,
              dropdowns and the like. I am a visual person so the allure of what
              you code is what you see was compeling enough for me to keep
              tinkering with UI. I moved to the US about 5 years ago where I
              pursued my masters degree in Computer Science from Northwestern
              University. Over there, I look a lot of UI/UX courses and did a
              bunch of group front-end projects. I learnt a lot of about coming
              up with new ideas quickly, prototyping, designing and quickly
              deploying websites. I have worked at two MNCs with customers
              across regions with sprint styled teams and delivered projects
              under under tight deadlines. I'm looking for my next venture where
              I can express myself creatively and work on complex and
              interesting projects.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
