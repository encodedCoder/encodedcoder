import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <Image
        src={image}
        alt={`${title} - ${description}`}
        title={title}
        layout="responsive"
        width={700}
        height={475}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {/* <p className="text-gray-700 mb-4">{description}</p> */}
      </div>
    </div>
  );
};

export default ProjectCard;
