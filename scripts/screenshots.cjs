const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const projects = [
  {
    id: "01",
    title: "Brass Harmony",
    link: "https://brass-harmony-trombonist-site.vercel.app/",
  },
  {
    id: "02",
    title: "Iron Addicts Gym",
    link: "https://iron-addicts-gym.vercel.app/",
  },
];

const outputDir = path.join(process.cwd(), "src/assets/projects");

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

(async () => {
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch();

  for (const project of projects) {
    const slug = slugify(project.title);
    const output = path.join(outputDir, `${slug}.png`);

    console.log(`\n📸 Capturing ${project.title}...`);

    const page = await browser.newPage({
      viewport: {
        width: 1440,
        height: 900,
      },
      deviceScaleFactor: 1,
    });

    try {
      await page.goto(project.link, {
        waitUntil: "networkidle",
        timeout: 60000,
      });

      await page.screenshot({
        path: output,
        fullPage: true,
      });

      console.log(`✅ Saved: ${output}`);
    } catch (error) {
      console.error(`❌ Failed: ${project.title}`);
      console.error(error.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  console.log("\n🎉 Screenshot generation complete.");
})();
