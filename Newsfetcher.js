const API_KEY = '1953c48ff7ef4f97ac6b41dcc926bc42';
const NEWS_URL = `https://newsapi.org/v2/top-headlines?language=en&pageSize=5&apiKey=${API_KEY}`;

export async function fetchNews() {
  try {
    const response = await fetch(NEWS_URL);
    const data = await response.json();

    const articles = data.articles.map(article => ({
      title: article.title,
      description: article.description,
      image: article.urlToImage,
      url: article.url,
    }));

    return articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}￼Enter
