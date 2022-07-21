import { getSkoloDb } from "../../lib/mongodb";

// handler invoked by nexjs when /api/signup is requested.  
export default async function handler(req, res) {
// creates a request with an error in it
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Only Post is supported." });
  }
// destructure email from req.body
  const { email } = req.body;
// getting a mongo db client that's bound to the skolo database
  const skoloDb = await getSkoloDb();
// creating an object to serve as a mongo document
  const emailDoc = {
    email,
    updatedOn: new Date(),
  };
//  upsert that document into the collection of emails
  const resultMeta = await skoloDb
    .collection("Emails")
    .updateOne({ email }, { $set: emailDoc }, { upsert: true });
  console.log(resultMeta);
// return 200 if everything is cool.
  return res.status(400).send();
}
