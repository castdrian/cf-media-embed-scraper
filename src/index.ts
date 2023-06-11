import { getScraper } from "./scrapers";

export default {
    async fetch(request: Request, env: any): Promise<Response> {
		if (request.method !== "POST") {
			return new Response(
				"Invalid request.",
				{
					status: 400,
				}
			);
		}

		const { url, embedType } = await request.json();

        if (url && embedType) {
			const mediaUrl = await getScraper(embedType)?.fetchMedia(url, env);
			if (mediaUrl) {
				const responseBody = {
					success: true,
					data: {
					  url: url,
					  embed: embedType,
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
    },
};