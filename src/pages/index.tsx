import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DotFlashing from "../components/DotFlashing"; // Import the DotFlashing component
import EncodedCoder from "../components/EncodedCoder";
// import SocialIcons from "@/components/SocialIcons";
const Home = () => {
  return (
    <div>
      <Head>
        <title>encodedCoder · Suresh</title>
        <meta
          name="description"
          content="Welcome to EncodedCoder's portfolio website."
        />
      </Head>
      <Header />
      <main className="flex items-center justify-center md:min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <EncodedCoder />
          <div className="flex justify-center mb-6">
            <div className="circling-logo">
              <Image
                src="/images/suresh.png"
                alt="Suresh - Web Developer"
                title="Suresh - Web Developer"
                className="rounded-full w-32 h-32"
                width={128}
                height={128}
              />
            </div>
          </div>
          <div className="flex justify-center mt-6 mb-6">
            <DotFlashing />
          </div>
          <div style={{ textAlign: "center" }}>
            {/* <div className="mt-6 flex justify-center gap-4 color-gray-700">
              <SocialIcons />
            </div> */}
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              😎 Ambivert 🦜 Self Contained 🎉 Computer Nerd 💻...
            </p>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Hi, I&apos;m Suresh, a passionate developer with a love for
              creating innovative solutions. With a strong background in web
              development, I enjoy working on both front-end and back-end
              technologies.
            </p>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Showcasing my projects, skills, and more.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
