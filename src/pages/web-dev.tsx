import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCardWeb from "../components/ProjectCardWeb";
import projectsDataWeb from "../data/projects-web.json";
import WebDevSkills from "@/components/WebDevSkills";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>webDev · Suresh</title>
        <meta
          name="description"
          content="Explore the projects by EncodedCoder."
        />
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">
            Web Development
          </h1>
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
          <WebDevSkills />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
