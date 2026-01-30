const fs = require("fs");
const path = require("path");

const DORK_PACKS_DIR = path.join(__dirname, "../docs/dork-packs");
const OUTPUT_FILE = path.join(__dirname, "../tools/dork-explorer/dork-data.js");

// Helper to clean text
const cleanText = (text) => (text ? text.replace(/^> /, "").trim() : "");

// Main processing function
const processFiles = () => {
  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs
    .readdirSync(DORK_PACKS_DIR)
    .filter((file) => file.endsWith(".md") && file !== "README.md");
  const dorkDatabase = [];

  console.log(`Found ${files.length} dork packs. Processing...`);

  files.forEach((file) => {
    const content = fs.readFileSync(path.join(DORK_PACKS_DIR, file), "utf-8");
    const lines = content.split("\n");

    let currentPack = {
      id: file.replace(".md", ""),
      title: "",
      description: "",
      dorks: [],
    };

    let currentCategory = "General";
    let currentDork = null;
    let captureCode = false;
    let codeBuffer = [];
    let captureExplanation = false;
    let explanationBuffer = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // 1. Pack Metadata (Title & Description)
      if (line.startsWith("# ") && !currentPack.title) {
        currentPack.title = line.replace("# ", "").trim();
        // Look ahead for description (blockquote)
        let nextLineIdx = i + 1;
        while (nextLineIdx < lines.length && lines[nextLineIdx].trim() === "") nextLineIdx++;
        if (nextLineIdx < lines.length && lines[nextLineIdx].startsWith("> ")) {
          currentPack.description = cleanText(lines[nextLineIdx]);
        }
        continue;
      }

      // 2. Categories (H2)
      if (line.startsWith("## ") && !line.startsWith("### ")) {
        // If we were capturing a dork's explanation, finish it
        if (currentDork) {
          if (explanationBuffer.length > 0)
            currentDork.explanation = explanationBuffer.join("\n").trim();
          currentPack.dorks.push(currentDork);
          currentDork = null;
          captureExplanation = false;
          explanationBuffer = [];
        }
        currentCategory = line
          .replace("## ", "")
          .replace(/🟢|🟡|🔴|⚡|📊|🔬|🏛️|🎓|💊|📍|🔗|🌏|alert/g, "")
          .trim(); // Strip emojis
        continue;
      }

      // 3. Dork Title (H3)
      if (line.startsWith("### ")) {
        // Save previous dork if exists
        if (currentDork) {
          if (explanationBuffer.length > 0)
            currentDork.explanation = explanationBuffer.join("\n").trim();
          currentPack.dorks.push(currentDork);
          explanationBuffer = [];
        }

        currentDork = {
          title: line.replace("### ", "").trim(),
          category: currentCategory,
          query: "",
          explanation: "",
        };
        captureExplanation = false;
        continue;
      }

      // 4. Code Blocks (The Dork)
      if (line.startsWith("```")) {
        if (!captureCode) {
          // Start of code block
          if (currentDork) {
            captureCode = true;
            codeBuffer = [];
          }
        } else {
          // End of code block
          captureCode = false;
          if (currentDork) {
            currentDork.query = codeBuffer.join("\n").trim();
            // Start capturing explanation after code block
            captureExplanation = true;
          }
        }
        continue;
      }

      if (captureCode) {
        codeBuffer.push(lines[i]); // Keep raw indentation
        continue;
      }

      // 5. Explanation text
      if (captureExplanation && currentDork) {
        // Stop capturing if we hit a new header or horizontal rule
        if (line.startsWith("#") || line.startsWith("---")) {
          captureExplanation = false;
          i--; // re-process this line
          continue;
        }

        // Skip empty lines at start of explanation
        if (explanationBuffer.length === 0 && line === "") continue;

        // Stop if we hit a "Back to" link or similar footer noise
        if (line.includes("[← Back to")) continue;
        if (/\[[^\]]*Run[^\]]*Search[^\]]*\]\([^\)]+\)/i.test(line)) continue;

        explanationBuffer.push(line);
      }
    }

    // Push the last dork if exists
    if (currentDork) {
      if (explanationBuffer.length > 0)
        currentDork.explanation = explanationBuffer.join("\n").trim();
      currentPack.dorks.push(currentDork);
    }

    dorkDatabase.push(currentPack);
  });

  // Post-processing
  const cleanDatabase = dorkDatabase.map((pack) => ({
    ...pack,
    dorks: pack.dorks.filter(
      (d) => d.query && d.query.length > 0 && !d.query.includes("| State | Query |")
    ),
  }));

  // Output as JS Variable for local file access (bypassing CORS)
  const fileContent = `window.DORK_DATA = ${JSON.stringify(cleanDatabase, null, 2)};`;

  fs.writeFileSync(OUTPUT_FILE, fileContent);
  console.log(`Success! Dorkbase generated at ${OUTPUT_FILE}`);
  console.log(`Total Packs: ${cleanDatabase.length}`);
  console.log(`Total Dorks: ${cleanDatabase.reduce((acc, pack) => acc + pack.dorks.length, 0)}`);
};

processFiles();
