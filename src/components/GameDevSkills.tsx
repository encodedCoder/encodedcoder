import React from "react";
import Image from "next/image";
import gameDevSkills from "../data/gameDevSkills.json";

interface GameDevSkill {
  technology: string;
  proficiency: string;
  concepts: string[];
  image: string;
}

const GameDevSkills = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Game Development Skills 🎮
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gameDevSkills.map((skill: GameDevSkill) => (
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
            <h3 className="text-xl font-semibold mb-2">{skill.technology}</h3>
            <p className="mb-2">{skill.proficiency}</p>
            <div className="mb-2">{skill.concepts.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameDevSkills;
