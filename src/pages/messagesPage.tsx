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

      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center space-y-4 pb-6 w-full px-4 md:px-0">
          <div className="flex text-left">
            <span className="text-2xl font-bold text-black display-inline">
              Messages
            </span>
            <span className="text-xl text-black py-1">: {messages.length}</span>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-4xl hover:shadow-xl transition duration-300">
            {loading ? (
              <p className="text-center text-black">Loading...</p>
            ) : (
              <>
                {/* Table for desktop devices */}
                <div className="hidden md:block">
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
                          <td
                            className="px-6 py-4 text-black"
                            title={msg.message}
                          >
                            {msg.message}
                          </td>
                          <td
                            className="px-6 py-4 whitespace-nowrap text-black"
                            title={new Date(msg.createdAt).toLocaleString()}
                          >
                            {new Date(msg.createdAt).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Cards for mobile devices */}
                <div className="block md:hidden">
                  {messages.map((msg) => (
                    <div
                      key={msg._id}
                      className="bg-white p-4 mb-4 rounded-lg shadow-md"
                    >
                      <div className="text-sm text-gray-500">Date and Time</div>
                      <div className="text-black mb-2">
                        {new Date(msg.createdAt).toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Name</div>
                      <div className="text-black mb-2">{msg.name}</div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="text-black mb-2">{msg.email}</div>
                      <div className="text-sm text-gray-500">Message</div>
                      <div className="text-black">{msg.message}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MessagesPage;
