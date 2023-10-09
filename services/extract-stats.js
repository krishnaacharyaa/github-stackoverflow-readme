import * as cheerio from "cheerio";

function extractStats(html) {
	const $ = cheerio.load(html);

	const detailsDiv = $("div.d-flex.flex__fl-equal.fw-wrap.gs24").first();
	const badgeDivs = detailsDiv.find("div.fs-title");

	return {
		username: $(".flex--item.mb12.fs-headline2.lh-xs").text().trim(),
		reputation: $(".fs-body3.fc-dark").eq(0).text().trim(),
		peopleReached: $(".fs-body3.fc-dark").eq(1).text().trim(),
		answers: $(".fs-body3.fc-dark").eq(2).text().trim(),
		goldBadges: badgeDivs.eq(0).text().trim(),
		silverBadges: badgeDivs.eq(1).text().trim(),
		bronzeBadges: badgeDivs.eq(2).text().trim(),
	};
}

export default extractStats;
