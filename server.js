import express from "express";
import axios from "axios";
import extractStats from "./services/extract-stats.js";
import svgGenerator from "./utils/svg-generator.js";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
	try {
		const { userId } = req.query;

		if (!userId) {
			return res.status(400).send("userId parameter is required");
		}

		const url = `https://stackoverflow.com/users/${userId}?tab=profile`;

		const { data: rawUserData } = await axios.get(url);

		const extractedStatsData = extractStats(rawUserData);
		const svg = await svgGenerator(extractedStatsData);

		res.setHeader("Content-Type", "image/svg+xml");
		res.send(svg);
	} catch (error) {
		console.error("Error fetching data:", error);
		res.status(500).send("Internal Server Error");
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
