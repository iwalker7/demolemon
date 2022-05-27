import express, { Router } from "express";

const router = express.Router();

const mCategories = [{ id: 1, name: "Cat1" }];

/**
 * @openapi
 * /category:
 *   get:
 *     summary: Categories
 *     description: all categories
 *     responses:
 *       200:
 *         description: Categories in a json format
 *       500:
 *         description: Error parsing ...
 */
router.get("/", (req, res) => {
    res.send(mCategories);
});

export default router;
