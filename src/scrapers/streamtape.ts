import puppeteer from "@cloudflare/puppeteer";

export default {
	type: "streamtape",
	async fetchMedia(url: string, env: any): Promise<string> {
		const browser = await puppeteer.launch(env.MYBROWSER);
		const page = await browser.newPage();
		await page.goto(url);
		await browser.close();

		return url; // TODO: Implement scraper
	}
}