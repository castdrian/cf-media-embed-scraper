import { getScraper } from "./scrapers";

export default {
    async fetch(request: Request, env: any): Promise<Response> {
		if (request.method !== "GET") {
			return new Response(
				"Invalid request.",
				{
					status: 400,
				}
			);
		}

		const url = new URL(request.url);
		const embedType = url.searchParams.get("embed");
		const videoId = url.searchParams.get("videoid");
		
        if (videoId && embedType) {
			const mediaUrl = await getScraper(embedType)?.fetchMedia(videoId, env);
			if (mediaUrl) {
				const responseBody = {
					success: true,
					data: {
					  video: mediaUrl,
					}
				};

				return new Response(
					JSON.stringify(responseBody),
					{
						status: 200,
					}
				);
			}
			else {
				return new Response(
					"Media not found.",
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
	}
};