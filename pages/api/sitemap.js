import {SitemapStream, streamToPromise } from "sitemap";
import {Readable } from "stream";


export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/blog/my-first-blog-post/", changefreq: "daily", priority: 0.3 },
    { url: "/blog/my-second-blog-post", changefreq: "daily", priority: 0.3 },
    { url: "/blog/my-third-blog-post/", changefreq: "daily", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};



{/*<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://tuomokankaanpaa.com/blog/13-keyboard-shortcuts-you-should-be-using-to-increase-your-productivity</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://tuomokankaanpaa.com/blog/5-tips-for-successful-remote-work</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://tuomokankaanpaa.com/blog/6-things-every-beginner-react-developer-should-know</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset> */}