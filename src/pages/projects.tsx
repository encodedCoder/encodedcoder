import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

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
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard
            title="Project 1"
            description="Description of project 1"
            link="#"
          />
          <ProjectCard
            title="Project 2"
            description="Description of project 2"
            link="#"
          />
          <ProjectCard
            title="Project 3"
            description="Description of project 3"
            link="#"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
