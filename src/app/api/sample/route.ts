import { client } from "@/app/_lib/mongodb/mongo";

export async function POST(request: Request) {
  await client.connect();
  const database = client.db("sample_mflix");
  const collection = await database.collection("movies").find({}).toArray();
  await client.close();
  return Response.json("Successs");
}
