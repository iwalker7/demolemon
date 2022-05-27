import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";

import category from "./routes/category.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Demo Lemon",
            version: "1.0.0",
        },
    },
    apis: ["./index.js", "./routes/*.js"],
};

const openapiSpecification = swaggerJsdoc(options);

app.use(express.json());
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(openapiSpecification, {
        explorer: true,
    })
);
app.use("/category", category);

/**
 * @openapi
 * /:
 *   get:
 *     summary: Home
 *     description: Home Screen
 *     responses:
 *       200:
 *         description: Success
 */
app.get("/", (req, res) => {
    res.send("Hello Lemon Press Demo");
});

app.listen(port, () =>
    console.log(`> Server is up and running on port: localhost://${port}`)
);
