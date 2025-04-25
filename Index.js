import { fetchNews } from './newsFetcher.js';
import { generateScript } from './scriptGenerator.js';
import { uploadToYouTube } from './uploader.js';

async function main() {
  console.log("NewsBytes Automation Started...");
  
  const news = await fetchNews();
  await generateScript(news);
  await uploadToYouTube();

  console.log("NewsBytes Automation Finished!");
}

main();￼Enter
