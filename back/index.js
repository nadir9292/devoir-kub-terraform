import express from "express";
import cors from "cors";
import allRoutes from "./src/routes/allRoutes.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const port = 3000;

allRoutes({ app });

app.listen(port, () => {
  console.log("App listening on port : " + port);
});
