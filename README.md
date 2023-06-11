# cf-media-embed-scraper

serverlessly scrape media embeds for their video source

## Important

Usage requires access to the [Cloudflare Workers Browser Beta](https://blog.cloudflare.com/introducing-workers-browser-rendering-api/). Your account must be whitelisted to use this feature, either by [requesting access](https://www.cloudflare.com/lp/workers-browser-rendering-api/) or by being added by a Cloudflare admin on their [Discord guild](https://discord.gg/cloudflaredev).

## Usage

```bash
curl -X POST https://cf-media-embed-scraper.subdomain.workers.dev/ -d '{ "embed": "streamtape", "url": "https://streamtape.com/v/videoId/video.mp4"}'
```

```json
{
  "success": true,
  "data": {
    "url": "https://streamtape.com/v/videoId/video.mp4",
    "embed": "streamtape",
    "video": "https://streamtape.com/get_video?video_id=videoId&ip=ip&token=token&expires=expires"
  }
}
```

## Supported Embeds

- streamtape
