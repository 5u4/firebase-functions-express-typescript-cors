import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

const app = express();

app.use(cors({ origin: true }));

app.get("/", (_, res) => res.status(200).send("ok"));
app.post("/", (_, res) => res.status(200).send("ok"));

exports.app = functions.https.onRequest(app);
