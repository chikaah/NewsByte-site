import { fetchNews } from './newsFetcher.js';

export async function generateVideoScript() {
  const newsArticles = await fetchNews();

  if (newsArticles.length === 0) {
    console.log("No news available.");
    return null;
  }

  // Take the first article for now
  const mainNews = newsArticles[0];

  // Format the text for subtitles
  const script = `
[Scene 1: Background music starts]
Breaking News: ${mainNews.title}

[Scene 2: Display related image or video]
${mainNews.description || "Stay tuned for more updates."}

[Scene 3: End screen with call to action]
Subscribe for the latest updates around the world.
`;

  return {
    title: mainNews.title,
    description: mainNews.description,
    image: mainNews.image,
    url: mainNews.url,
    script,
  };
}￼Enter
