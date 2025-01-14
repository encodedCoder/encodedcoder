import React from "react";
import { Github, Linkedin, Code2, Terminal, Globe } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Portfolio = () => {
  const projects = [
    {
      title: "Unity Game Project",
      description: "3D platformer built with Unity and C#",
      link: "#",
      type: "game",
    },
    {
      title: "Python Analytics Tool",
      description: "Data analysis script for processing large datasets",
      link: "#",
      type: "script",
    },
  ];

  const stats = {
    leetcode: {
      solved: 500,
      ranking: "Top 5%",
      profile: "https://leetcode.com/yourusername",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      {/* Hero Section */}
      <header className="section-container text-center">
        <h1 className="text-4xl font-bold">Full Stack Developer</h1>
        <p className="mt-4 text-xl">
          Building experiences with Next.js, Unity, and Python
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#" className="nav-link">
            <Github size={24} />
          </a>
          <a href="#" className="nav-link">
            <Linkedin size={24} />
          </a>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="section-container">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="flex items-center gap-2 mb-4">
                {project.type === "game" ? (
                  <Globe size={20} />
                ) : (
                  <Terminal size={20} />
                )}
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* LeetCode Stats */}
      <section className="section-container bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center gap-2 mb-6">
          <Code2 size={24} />
          <h2 className="text-2xl font-bold">LeetCode Stats</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="stats-card">
            <div className="text-3xl font-bold">{stats.leetcode.solved}+</div>
            <div className="text-gray-600 dark:text-gray-400">
              Problems Solved
            </div>
          </div>
          <div className="stats-card">
            <div className="text-3xl font-bold">{stats.leetcode.ranking}</div>
            <div className="text-gray-600 dark:text-gray-400">
              Global Ranking
            </div>
          </div>
          <div className="stats-card">
            <a
              href={stats.leetcode.profile}
              className="text-blue-600 hover:underline"
            >
              View Profile →
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
