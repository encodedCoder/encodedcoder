import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>contact · Suresh</title>
        <meta name="description" content="Get in touch with EncodedCoder." />
      </Head>
      <Header />

      <main className="flex items-center justify-center md:min-h-screen bg-gray-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-black p-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-center text-black">
              Get in Touch
            </h1>
            <p className="max-w-sm mx-auto">
              Reach out for web development projects, collaborations, or just to
              say hi!!!
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md hover:bg-gray-100 hover:shadow-xl transition duration-300">
            <h1 className="text-4xl font-bold mb-4 text-center text-black">
              Contact
            </h1>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 text-black"
                  rows={4}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
