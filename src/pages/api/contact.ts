import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("myDatabase"); // Replace 'myDatabase' with your database name

      const collection = db.collection("contacts");
      await collection.insertOne({
        name,
        email,
        message,
        createdAt: new Date(),
      });

      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error(error);

      res.status(500).json({ message: "Failed to save message" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
