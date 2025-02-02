import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
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

  const handleDelete = (id: string) => {
    // Add your delete logic here, e.g., make an API call to delete the message from the database
    const deleteMessage = async (id: string) => {
      try {
        const res = await fetch(`/api/messages/${id}`, {
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

    deleteMessage(id);
    console.log(`Delete message with id: ${id}`);
  };

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
        <div className="flex flex-col items-center space-y-4 w-full px-4 md:px-0">
          <div className="flex text-left pt-8">
            <span className="text-2xl font-bold text-black display-inline py">
              Messages
            </span>
            <span className="text-xl text-black py-1">: {messages.length}</span>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-4xl hover:shadow-xl transition duration-300">
            {loading ? (
              <p className="text-center text-black">Loading...</p>
            ) : (
              <>
                <div className="">
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
                      <div className="text-black mb-2">{msg.message}</div>
                      <div className="text-right">
                        <button onClick={() => handleDelete(msg._id)}>
                          <FaTrash className="text-red-500" />
                        </button>
                      </div>
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
