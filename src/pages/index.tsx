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
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">Showcasing my projects, skills, and more.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
