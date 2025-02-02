import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("myDatabase"); // Replace 'myDatabase' with your database name
      const collection = db.collection("contacts");

      const messages = await collection
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

      res.status(200).json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to load messages" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
