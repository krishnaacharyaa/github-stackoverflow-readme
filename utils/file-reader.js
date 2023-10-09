import { promises as fs } from "fs";

async function readFile(filePath) {
	try {
		const response = await fs.readFile(filePath, "utf-8");
		return response;
	} catch (error) {
		console.log(`Error reading file ${filePath}:`, error);
		return "Error rendering file";
	}
}

export default readFile;
