import React from "react";
import { NextPageContext } from "next";
import Link from "next/link";

interface ErrorProps {
  statusCode: number;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">
          {statusCode ? `Error ${statusCode}` : "An error occurred"}
        </h1>
        <p className="text-gray-700 mb-4">
          {statusCode === 404
            ? "Sorry, the page you are looking for does not exist."
            : "Sorry, something went wrong."}
        </p>
        <Link href="/">
          <a className="text-blue-500 hover:underline">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
