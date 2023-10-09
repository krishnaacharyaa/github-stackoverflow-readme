import readFile from "./file-reader.js";
import path from "path";

async function loadSvgData() {
	try {
		const htmlTemplatePath = "src/templates/index.handlebars";
		const styleCssPath = "src/assets/css/styles.css";
		const themeCssPath = "src/assets/css/theme.css";
		const styleGuideCssPath = "src/assets/css/styleguide.css";
		const stackoverflowLogoSvgPath =
			"src/assets/svg/logo/stackoverflow-logo.svg";
		const goldBadgeSvgPath = "src/assets/svg/badges/gold-badge.svg";
		const silverBadgeSvgPath = "src/assets/svg/badges/silver-badge.svg";
		const bronzeBadgeSvgPath = "src/assets/svg/badges/bronze-badge.svg";

		const [
			htmlTemplate,
			styleCssData,
			themeCssData,
			styleGuideCssData,
			stackoverflowLogoSvgData,
			goldBadgeSvgData,
			silverBadgeSvgData,
			bronzeBadgeSvgData,
		] = await Promise.all([
			readFile(path.join(process.cwd(), htmlTemplatePath)),
			readFile(path.join(process.cwd(), styleCssPath)),
			readFile(path.join(process.cwd(), styleGuideCssPath)),
			readFile(path.join(process.cwd(), themeCssPath)),
			readFile(path.join(process.cwd(), stackoverflowLogoSvgPath)),
			readFile(path.join(process.cwd(), goldBadgeSvgPath)),
			readFile(path.join(process.cwd(), silverBadgeSvgPath)),
			readFile(path.join(process.cwd(), bronzeBadgeSvgPath)),
		]);

		return {
			svgData: {
				htmlTemplate,
				styleCssData,
				themeCssData,
				styleGuideCssData,
				stackoverflowLogoSvgData,
				goldBadgeSvgData,
				silverBadgeSvgData,
				bronzeBadgeSvgData,
			},
		};
	} catch (error) {
		console.error("Error loading SVG data:", error);
		throw error;
	}
}

export default loadSvgData;
