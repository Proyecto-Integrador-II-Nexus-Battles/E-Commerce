import express from "express";
import paymentRoutes from "./routes/payment.routes.js";
import testingRoutes from "./routes/testing.routes.js";
import { PORT } from "./config.js";
import path from "path";

const app = express();
app.use(paymentRoutes);
app.use(testingRoutes);

app.use(express.static(path.resolve("public")));
app.set("views", path.resolve("views"));
app.set("view engine", "ejs");

app.listen(PORT);
console.log("Server on port", PORT);
