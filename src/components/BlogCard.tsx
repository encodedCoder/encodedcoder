// filepath: /C:/Users/theCode/OneDrive/Desktop/portfolio-website/src/components/BlogCard.tsx
import React from "react";

interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  content: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  author,
  date,
  content,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">by {author}</p>
        <p className="text-gray-600 text-sm mb-4">
          {new Date(date).toDateString()}
        </p>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
