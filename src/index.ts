import { getScraper } from "./scrapers";

export default {
    async fetch(request: Request, env: any): Promise<Response> {
		// TODO: receive post request with url and embed type and respond with json body
        const { searchParams } = new URL(request.url);
		const embedType = searchParams.get("embed");
        const url = searchParams.get("url");

        if (url && embedType) {
			const mediaUrl = await getScraper(embedType)?.fetchMedia(url, env);
			if (mediaUrl) {
				return new Response(
					mediaUrl,
					{
						status: 200,
					}
				);
			}
			else {
				return new Response(
					"Scraper not found.",
					{
						status: 404,
					}
				);
			}
        } else {
            return new Response(
                "Invalid request.",
				{
					status: 400,
				}
            );
        }
    },
};