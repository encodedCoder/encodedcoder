import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  image,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={image}
        alt={title}
        layout="responsive"
        width={700}
        height={475}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={link} className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
