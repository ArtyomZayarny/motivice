// proxy.js
import express from "express";
import axios from "axios";
import cors from "cors";
import type { Request, Response } from "express";

const app = express();
app.use(cors());

app.get("/api/quote", async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://zenquotes.io/api/random");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

app.listen(3001, () =>
  console.log("Proxy server running on http://localhost:3001")
);
