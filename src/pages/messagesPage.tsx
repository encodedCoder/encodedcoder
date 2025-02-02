import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const MessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/messages");
        const data = await res.json();
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          setMessages([]);
        }
      } catch (error) {
        console.error("Failed to fetch messages:", error);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <Head>
        <title>messages · Suresh</title>
        <meta
          name="description"
          content="View messages sent to EncodedCoder."
        />
      </Head>
      <Header />

      <main className="flex items-center justify-center md:min-h-screen bg-gray-100">
        <div className="flex flex-col items-center space-y-4 pb-6">
          <div className="text-black p-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-center text-black">
              Messages
            </h1>
            <h2 className="text-2xl mb-4 text-center text-black">
              Message count: {messages.length}
            </h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl hover:shadow-xl transition duration-300">
            {loading ? (
              <p className="text-center text-black">Loading...</p>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date and Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {messages.map((msg) => (
                    <tr key={msg._id}>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-black"
                        title={msg.name}
                      >
                        {msg.name}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-black"
                        title={msg.email}
                      >
                        {msg.email}
                      </td>
                      <td className="px-6 py-4 text-black" title={msg.message}>
                        {msg.message}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap  text-black"
                        title={new Date(msg.createdAt).toLocaleString()}
                      >
                        {new Date(msg.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MessagesPage;
