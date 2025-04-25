import { generateVideoScript } from './videoGenerator.js';
import fs from 'fs';

export async function makeVideo() {
  const newsData = await generateVideoScript();

  if (!newsData) {
    console.log("No video data to generate.");
    return;
  }

  const output = `
VIDEO TITLE:
${newsData.title}

DESCRIPTION:
${newsData.description}

SCRIPT:
${newsData.script}

SOURCE IMAGE:
${newsData.image}

SOURCE URL:
${newsData.url}
`;

  // Simulate saving this as a .txt or .md file
  fs.writeFileSync('output/videoScript.txt', output);
  console.log("Video script saved to output/videoScript.txt");
}￼Enter
