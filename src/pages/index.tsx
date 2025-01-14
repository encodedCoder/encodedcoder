import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>EncodedCoder - Portfolio</title>
        <meta
          name="description"
          content="Welcome to EncodedCoder's portfolio website."
        />
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            Showcasing my projects, skills, and more.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
