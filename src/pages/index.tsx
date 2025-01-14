import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import blogsData from "../data/blogs.json";

const Blogs = () => {
  return (
    <div>
      <Head>
        <title>Blogs - EncodedCoder</title>
        <meta
          name="description"
          content="Read the latest blogs by EncodedCoder."
        />
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Blogs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogsData.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                author={blog.author}
                date={blog.date}
                content={blog.content}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
