import { useEffect, useState } from "react";
// import { FaTrash } from "react-icons/fa";
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
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await res.json();
          console.log("Fetched messages:", data); // Add logging
          if (Array.isArray(data)) {
            setMessages(data);
          } else {
            setMessages([]);
          }
        } else {
          console.error("Received non-JSON response");
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

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/messages?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg._id !== id)
        );
      } else {
        console.error("Failed to delete message");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  if (loading) {
    return <p className="text-center text-black">Loading...</p>;
  }

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

      <main className="bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center w-full space-y-6 py-8">
          {messages.length > 0 && (
            <div className="flex">
              <div className="text-2xl font-bold text-black">Messages: </div>
              <div className="text-xl text-black pt-1 px-2">
                {" "}
                {messages.length}
              </div>
            </div>
          )}

          <div className="bg-white bg-opacity-75 md:p-8 md:rounded-lg shadow-md w-full max-w-4xl hover:shadow-xl transition duration-300">
            {messages.length === 0 ? (
              <div className="text-center text-black py-10">
                No messages yet 🥲
              </div>
            ) : (
              <div className="">
                {messages.map((msg) => (
                  <div
                    key={msg._id}
                    className="bg-white bg-opacity-50 p-4 mb-4 rounded-lg shadow-md"
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
                    <div className="text-black mb-2">{msg.message}</div>
                    <div className="text-right">
                      <button onClick={() => handleDelete(msg._id)}>
                        {/* <FaTrash className="text-red-500" /> */}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MessagesPage;
