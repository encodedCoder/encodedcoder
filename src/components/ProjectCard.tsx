import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:shadow-2xl text-black">
      <Image
        src={image}
        alt={`${title} - ${description}`}
        title={title}
        layout="responsive"
        width={700}
        height={475}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="mb-4">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex justify-between">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
