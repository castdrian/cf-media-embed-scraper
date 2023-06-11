import puppeteer from "@cloudflare/puppeteer";

export default {
	type: "streamtape",
	async fetchMedia(url: string, env: any): Promise<string|undefined> {
		const browser = await puppeteer.launch(env.MYBROWSER);
		const page = await browser.newPage();
		await page.goto(url, { waitUntil: "domcontentloaded" });

		const mainVideo = await page.$("#mainvideo");
		const mainVideoSrc = await mainVideo?.evaluate((node) => node.getAttribute("src"));
		await browser.close();
		
		if (!mainVideoSrc) {
			return undefined;
		}

		const videoURL = `https:${mainVideoSrc}`;
		return videoURL;
	}
}