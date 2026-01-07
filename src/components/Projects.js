import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">Projects</h1>
          <Link to="/">
            <button className="bg-indigo-600 text-white px-3 py-1 rounded">
              Home
            </button>
          </Link>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Click Speed Tester</h2>
            <p className="text-sm text-gray-600 mb-4">
              A 10s click speed test with best score persistence.
            </p>
            <a href="/clickspeed" className="text-indigo-600 font-medium">
              Open demo →
            </a>
          </article>

          <article className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Memory Sequence</h2>
            <p className="text-sm text-gray-600 mb-4">
              Simon-like color memory game with progressive rounds.
            </p>
            <a href="/memory" className="text-indigo-600 font-medium">
              Open demo →
            </a>
          </article>

          <article className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Password Progression</h2>
            <p className="text-sm text-gray-600 mb-4">
              Progress through password rules interactively.
            </p>
            <a href="/password" className="text-indigo-600 font-medium">
              Open demo →
            </a>
          </article>

          <article className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-2">More to come</h2>
            <p className="text-sm text-gray-600 mb-4">
              I'm adding more small projects and games — check back soon.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Projects;
