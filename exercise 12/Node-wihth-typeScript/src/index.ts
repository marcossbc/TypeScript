// src/server.ts
import express from "express";
import hellowRoutes from "./routes/hellow";
import goodBYRoutes from "./routes/goodBY"
import userRoutes from "./routes/user"
const app = express();

app.use(express.json());

app.use("/hello", hellowRoutes);
app.use("/goodBY", goodBYRoutes)
app.use("/users", userRoutes)
app.listen(4000, () => {
  console.log("Server running on http://localhost:3000");
});