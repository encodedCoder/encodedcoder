import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCardGame from "../components/ProjectCardGame";
import projectsDataGame from "../data/projects-games.json";
import GameDevSkills from "@/components/GameDevSkills";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>gameDev · Suresh</title>
        <meta
          name="description"
          content="Explore the projects by EncodedCoder."
        />
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">
            Unity Game Development Projects
          </h1>
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
          <GameDevSkills />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
