const fs = require("fs");
const path = require("path");

const DOCS_DIR = path.join(__dirname, "../docs");

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalRemoved = 0;
  let filesModified = 0;

  items.forEach((item) => {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
      const result = processDirectory(itemPath);
      totalRemoved += result.totalRemoved;
      filesModified += result.filesModified;
    } else if (item.endsWith(".md")) {
      const result = processFile(itemPath);
      if (result > 0) {
        totalRemoved += result;
        filesModified++;
      }
    }
  });

  return { totalRemoved, filesModified };
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  const originalContent = content;

  // Patterns to match the "Run this Search" links
  // Match lines that contain the run search link pattern
  const patterns = [
    // Generic "Run ... Search" links with 👉 or 🔍 (angle brackets)
    /^\[(👉|🔍) \*\*Run[^\]]*Search\*\*\]\(<[^>]+>\)\s*$/gm,
    // Generic "Run ... Search" links with 👉 or 🔍
    /^\[(👉|🔍) \*\*Run[^\]]*Search\*\*\]\([^\)]+\)\s*$/gm,
    // Catch any remaining run search links with angle brackets
    /^\[[^\]]*[Rr]un[^\]]*[Ss]earch[^\]]*\]\(<[^>]+>\)\s*$/gm,
    // Catch any remaining run search links
    /^\[[^\]]*[Rr]un[^\]]*[Ss]earch[^\]]*\]\([^\)]+\)\s*$/gm,
    // Generic "Run" links (e.g., [👉 **Run**](...))
    /^\[(👉|🔍) \*\*Run[^\]]*\*\*\]\([^\)]+\)\s*$/gm,
    /^\[(👉|🔍) \*\*Run[^\]]*\*\*\]\(<[^>]+>\)\s*$/gm,
  ];

  let removedCount = 0;

  patterns.forEach((pattern) => {
    const matches = content.match(pattern);
    if (matches) {
      removedCount += matches.length;
    }
    content = content.replace(pattern, "");
  });

  // Clean up any double blank lines that result from removal
  content = content.replace(/\n{3,}/g, "\n\n");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    const relativePath = path.relative(path.join(__dirname, ".."), filePath);
    console.log(`Cleaned: ${relativePath} (${removedCount} links removed)`);
    return removedCount;
  }

  return 0;
}

console.log("Removing 'Run this Search' links from markdown files...\n");
const result = processDirectory(DOCS_DIR);
console.log(`\nDone! Removed ${result.totalRemoved} links from ${result.filesModified} files.`);
