// src/server.ts
import express from "express";
import hellowRoutes from "./routes/hellow";
import goodBYRoutes from "./routes/goodBY"
import userRoutes from "./routes/user"
import postsRoutes from "./routes/post"
import mongoose from "mongoose";
const app = express();

app.use(express.json());

app.use("/hello", hellowRoutes);
app.use("/goodBY", goodBYRoutes)
app.use("/users", userRoutes)
// app.use("/posts", postRoutes)
app.use("/posts", postsRoutes )


  
mongoose
  .connect("mongodb://localhost:27017/typescript_nodejs")
  .then(() => {
    app.listen(3000, () => console.log("✅ Server is running on port 3000"));
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// });