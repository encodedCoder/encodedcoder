import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Code2, Terminal, Globe } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import portfolioProjects from "../data/portfolioProjects.json";
import webDevSkills from "../data/webDevSkills.json"; // Import the webDevSkills JSON file
import gameDevSkills from "../data/gameDevSkills.json"; // Import the gameDevSkills JSON file
import styles from "./portfolio.module.css"; // Import the CSS module
// import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";

const Portfolio = () => {
  const [stats, setStats] = useState({
    leetcode: {
      solved: 500,
      easy: 250,
      medium: 200,
      hard: 50,
      reputation: 90,
      profile: "https://leetcode.com/encodedcoder",
    },
  });

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/encodedcoder")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setStats({
            leetcode: {
              solved: data.totalSolved,
              easy: data.easySolved,
              medium: data.mediumSolved,
              hard: data.hardSolved,
              reputation: data.reputation,
              profile: "https://leetcode.com/encodedcoder",
            },
          });
        }
      })
      .catch((error) => console.error("Error fetching LeetCode stats:", error));
  }, []);

  return (
    <div>
      <Head>
        <title>portfolio · Suresh</title>
        <meta
          name="description"
          content="Read the latest blogs by EncodedCoder."
        />
      </Head>
      <Header />
      <div
        className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white ${styles["custom-width"]}`}
      >
        {/* Hero Section */}
        <header className="section-container text-center">
          <h1 className="text-4xl font-bold">Full Stack Developer</h1>
          <p className="mt-4 text-xl">
            Building experiences with Next.js, Unity, and Python
          </p>
        </header>

        {/* Projects Grid */}
        <section className="section-container">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioProjects.map((project) => (
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
                  target="_blank"
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* WebDevSkills Section */}
        <section className="section-container">
          <h2 className="text-2xl font-bold mb-8">WebDevSkills</h2>
          <div className="grid grid-cols-3 md:grid-cols-10 gap-6">
            {webDevSkills.map((skill) => (
              <div
                key={skill.technology}
                className="skill-card relative group flex flex-col items-center cursor-pointer"
              >
                <Image
                  width={80}
                  height={80}
                  src={skill.image}
                  alt={skill.technology}
                  className="transition-transform transform group-hover:scale-110"
                />
                {/* <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded px-2 py-1">
                  {skill.concepts.join(", ")}
                </div> */}
                <div className="mt-2 text-center text-gray-900 dark:text-white">
                  {skill.technology}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GameDevSkills Section */}
        <section className="section-container">
          <h2 className="text-2xl font-bold mb-8">GameDevSkills</h2>
          <div className="grid grid-cols-3 md:grid-cols-10 gap-6">
            {gameDevSkills.map((skill) => (
              <div
                key={skill.technology}
                className="skill-card relative group flex flex-col items-center cursor-pointer"
              >
                <Image
                  width={80}
                  height={80}
                  src={skill.image}
                  alt={skill.technology}
                  className="transition-transform transform group-hover:scale-110"
                />
                {/* <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded px-2 py-1">
                  {skill.concepts.join(", ")}
                </div> */}
                <div className="mt-2 text-center text-gray-900 dark:text-white">
                  {skill.technology}
                </div>
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
              <div className="text-3xl font-bold">{stats.leetcode.solved}</div>
              <div className="text-gray-600 dark:text-gray-400">
                Problems Solved (Easy: {stats.leetcode.easy} Medium:{" "}
                {stats.leetcode.medium} Hard: {stats.leetcode.hard})
              </div>
            </div>
            <div className="stats-card">
              <div className="text-3xl font-bold">
                {stats.leetcode.reputation}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Reputation Points
              </div>
            </div>
            <div className="stats-card">
              <a
                href={stats.leetcode.profile}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                View Profile →
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
