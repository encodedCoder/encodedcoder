import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../utils/db";
import { ObjectId } from "mongodb";

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

      console.log("Fetched messages:", messages); // Add logging

      res.status(200).json(messages);
    } catch (error) {
      console.error("Failed to load messages:", error);
      res.status(500).json({ message: "Failed to load messages" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      console.log("Deleting message with id:", id); // Add logging
      const client = await clientPromise;
      const db = client.db("myDatabase"); // Replace 'myDatabase' with your database name
      const collection = db.collection("contacts");

      const result = await collection.deleteOne({
        _id: new ObjectId(id as string),
      });

      if (result.deletedCount === 1) {
        res.status(200).json({ message: "Message deleted successfully" });
      } else {
        console.error("Message not found with id:", id); // Add logging
        res.status(404).json({ message: "Message not found" });
      }
    } catch (error) {
      console.error("Failed to delete message:", error); // Add logging
      res.status(500).json({ message: "Failed to delete message" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
