# cf-media-embed-scraper

serverlessly scrape media embeds for their video source

## Important

Usage requires access to the [Cloudflare Workers Browser Beta](https://blog.cloudflare.com/introducing-workers-browser-rendering-api/). Your account must be whitelisted to use this feature, either by [requesting access](https://www.cloudflare.com/lp/workers-browser-rendering-api/) or by being added by a Cloudflare admin on their [Discord guild](https://discord.gg/cloudflaredev).

## Usage

```text
curl "https://cf-media-embed-scraper.subdomain.workers.dev?embed=streamtape&videoid=id"
```

```json
{
  "success": true,
  "data": {
    "video": "https://streamtape.com/get_video?id=videoId&expires=expiresip=ip&token=tokenY&stream=1"
  }
}
```

## Supported Embeds

- streamtape
