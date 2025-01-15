import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects - EncodedCoder</title>
        <meta
          name="description"
          content="Explore the projects by EncodedCoder."
        />
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Web Development Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {projectsData.webDevelopment.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="block"
                target="_blank"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              </a>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Unity Game Development Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectsData.unityGameDevelopment.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="block"
                target="_blank"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
