// src/server.ts
import express from "express";
import hellowRoutes from "./routes/hellow";
import goodBYRoutes from "./routes/goodBY"
const app = express();

app.use(express.json());

app.use("/hello", hellowRoutes);
app.use("/goodBY", goodBYRoutes)
app.listen(4000, () => {
  console.log("Server running on http://localhost:3000");
});