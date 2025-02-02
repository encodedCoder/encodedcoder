import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "message" && value.length > 200) {
      setFormData({
        ...formData,
        [name]: value.slice(0, 200),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div>
      <Head>
        <title>contact · Suresh</title>
        <meta name="description" content="Get in touch with EncodedCoder." />
      </Head>
      <Header />

      <main className="flex items-center justify-center md:min-h-screen bg-gray-100">
        <div className="flex flex-col items-center space-y-4 pb-6">
          <div className="text-black p-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-center text-black">
              Get in Touch
            </h1>
            <p className="max-w-sm mx-auto">
              Reach out for web development projects, collaborations, or just to
              say hi!!!
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md hover:shadow-xl transition duration-300">
            <h1 className="text-4xl font-bold mb-4 text-center text-black">
              Contact
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
            {status && <p className="mt-4 text-center text-black">{status}</p>}
          </div>
        </div>
      </main>
      <div className="flex justify-center bg-gray-100 pb-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <SocialMediaLinks />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
