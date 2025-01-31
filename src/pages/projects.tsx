import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCardWeb from "../components/ProjectCardWeb";
import ProjectCardGame from "../components/ProjectCardGame";
import projectsDataWeb from "../data/projects-web.json";
import projectsDataGame from "../data/projects-games.json";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>projects · Suresh</title>
        <meta
          name="description"
          content="Explore the projects by EncodedCoder."
        />
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">
            Projects
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Web Development Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {projectsDataWeb.map((project, index) => (
              <ProjectCardWeb
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Unity Game Development Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectsDataGame.map((project, index) => (
              <ProjectCardGame
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubLink={project.githubLink}
                itchioLink={project.itchioLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
