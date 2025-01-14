import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div>
      <Head>
        <title>Blog - EncodedCoder</title>
        <meta
          name="description"
          content="Read the latest blog posts by EncodedCoder."
        />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg">Coming soon...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
