import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import AnimatedCoder from "../components/AnimatedCoder";
// import SocialMediaLinks from "../components/SocialMediaLinks";
import ProgrammingLanguages from "../components/ProgrammingLanguages";
import WebDevSkills from "../components/WebDevSkills";
import GameDevSkills from "@/components/GameDevSkills";

const About = () => {
  return (
    <div>
      <Head>
        <title>about · Suresh</title>
        <meta name="description" content="Learn more about EncodedCoder." />
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            About Me
          </h1>
          {/* <AnimatedCoder /> */}
          <p className="text-lg mb-6 text-gray-700 leading-relaxed text-center">
            I am a web developer 🌐 with experience in game development 🎮,
            writing Python scripts 🐍, and solving LeetCode problems 🧑‍💻. I am
            passionate about technology ⚙️ and love to learn new things 👻.
          </p>
          <ProgrammingLanguages />
          <WebDevSkills />
          <GameDevSkills />
          {/* <SocialMediaLinks /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
