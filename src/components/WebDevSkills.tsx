import React from "react";
import Image from "next/image";
import webDevSkills from "../data/webDevSkills.json";

interface WebDevSkill {
  technology: string;
  proficiency: string;
  concepts: string[];
  image: string;
}

const WebDevSkills = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Web Development Skills 🌐
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {webDevSkills.map((skill: WebDevSkill) => (
          <div
            key={skill.technology}
            className="flex flex-col p-4 bg-white text-black rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            <Image
              src={skill.image}
              alt={`${skill.technology} logo`}
              width={40}
              height={40}
              className="mb-4"
            />
            <div className="font-bold text-xl mb-2">{skill.technology}</div>
            <div className="mb-2">Proficiency: {skill.proficiency}</div>
            <div className="mb-2">Concepts: {skill.concepts.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevSkills;
