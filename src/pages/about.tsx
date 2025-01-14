import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Me - EncodedCoder</title>
        <meta name="description" content="Learn more about EncodedCoder." />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          I am a web developer with experience in game development, writing
          Python scripts, and solving LeetCode problems...
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
