import streamtape from "./streamtape";

const scrapers = [
	streamtape,
]

export function getScraper(type: string) {
	for (const scraper of scrapers) {
		if (scraper.type === type) {
			return scraper;
		}
		else throw new Error(`Scraper '${type}' not found.`);
	}
}