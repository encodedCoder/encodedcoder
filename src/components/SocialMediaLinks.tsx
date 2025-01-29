import React from "react";
import Image from "next/image";
import socialMediaLinks from "../data/socialMediaLinks.json";

const SocialMediaLinks = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Connect with me on Social Media
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socialMediaLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white text-black rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            <Image
              src={link.logo}
              alt={`${link.platform} logo`}
              width={40}
              height={40}
              className="mr-4"
            />
            <div>
              <h3 className="text-xl font-bold">{link.platform}</h3>
              <p className="text-gray-700">@{link.username}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
