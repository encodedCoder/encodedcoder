import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import programmingLanguages from "../data/programmingLanguages.json";

const ProgrammingLanguages = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Programming Languages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {programmingLanguages.map((language) => (
          <div
            key={language.language}
            className="flex flex-col p-4 bg-white text-black rounded-lg shadow-lg"
          >
            <Image
              src={language.image}
              alt={`${language.language} logo`}
              width={40}
              height={40}
              className="mb-4"
            />
            <div className="font-bold text-xl mb-2">{language.language}</div>
            <div className="mb-2">Proficiency: {language.proficiency}</div>
            <div className="mb-2">Concepts: {language.concepts.join(", ")}</div>
            <div>
              <a
                href={language.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition duration-300"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
