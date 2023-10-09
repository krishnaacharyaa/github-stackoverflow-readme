import Handlebars from "handlebars";
import loadSvgData from "./svg-loader.js";
async function svgGenerator(extractedStatsData) {
	try {
		const { svgData } = await loadSvgData();

		extractedStatsData = {
			...extractedStatsData,
			stackoverflowLogo: svgData.stackoverflowLogoSvgData,
			goldBadgeSvg: svgData.goldBadgeSvgData,
			silverBadgeSvg: svgData.silverBadgeSvgData,
			bronzeBadgeSvg: svgData.bronzeBadgeSvgData,
		};

		const template = Handlebars.compile(svgData.htmlTemplate);
		const renderedHtml = template(extractedStatsData);

		return `
      <svg xmlns="http://www.w3.org/2000/svg" width="500" height="230" >
        <style>
          ${svgData.styleCssData}
          ${svgData.themeCssData}
          ${svgData.styleGuideCssData}
        </style>
        <foreignObject x="0" y="0" width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            ${renderedHtml}
          </div>
        </foreignObject>
      </svg>
    `;
	} catch (error) {
		console.error("Error generating SVG:", error);
		throw error;
	}
}

export default svgGenerator;
