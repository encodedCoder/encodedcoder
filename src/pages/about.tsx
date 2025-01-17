import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedCoder from "../components/AnimatedCoder";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Me - EncodedCoder</title>
        <meta name="description" content="Learn more about EncodedCoder." />
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            About Me
          </h1>
          {/* <h1>I&apos;m Suresh</h1> */}
          <AnimatedCoder />
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            I am a web developer with experience in game development, writing
            Python scripts, and solving LeetCode problems. I am passionate about
            technology and love to learn new things.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            My Journey
          </h2>
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            My journey in the tech world started when I was a teenager. I was
            fascinated by how websites and games were made, which led me to
            learn HTML, CSS, and JavaScript. Over the years, I have expanded my
            skill set to include various programming languages and frameworks.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h2>
          <ul className="list-disc list-inside text-lg mb-6 text-gray-700 leading-relaxed">
            <li>Web Development: HTML, CSS, JavaScript, React, Next.js</li>
            <li>Game Development: Unity, C#</li>
            <li>Programming Languages: Python, JavaScript, TypeScript</li>
            <li>Problem Solving: LeetCode, HackerRank</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Projects
          </h2>
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            I have worked on various projects ranging from web applications to
            games. Some of my notable projects include a link shortener, a
            sorting algorithm visualizer, and a space shooter game.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hobbies</h2>
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            When I am not coding, I enjoy reading tech blogs, playing video
            games, and exploring new technologies. I also love to travel and
            experience different cultures.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact</h2>
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            Feel free to reach out to me via email at encodedcoder@example.com
            or connect with me on LinkedIn.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
