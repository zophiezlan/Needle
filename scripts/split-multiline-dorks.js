const fs = require("fs");
const path = require("path");

const DORK_PACKS_DIR = path.join(__dirname, "../docs/dork-packs");

// Helper to generate a meaningful suffix from a query
const generateSuffix = (query, index, totalLines) => {
  // If only 2-3 lines, use simple numbering
  if (totalLines <= 3) {
    return index + 1;
  }

  // Try to extract meaningful keywords from the query
  const keywords = query.match(/"([^"]+)"/g);
  if (keywords && keywords.length > 0) {
    const keyword = keywords[0].replace(/"/g, "");
    // Capitalize first letter and truncate if needed
    const cleaned = keyword.charAt(0).toUpperCase() + keyword.slice(1);
    return cleaned.length > 30 ? `${cleaned.substring(0, 27)}...` : cleaned;
  }

  // Extract site: domain if present
  const siteMatch = query.match(/site:([^\s]+)/);
  if (siteMatch) {
    const domain = siteMatch[1].replace(/\*/g, "");
    return domain.split(".")[0] || `Query ${index + 1}`;
  }

  // Extract filetype if present
  const filetypeMatch = query.match(/filetype:([^\s]+)/);
  if (filetypeMatch) {
    return filetypeMatch[1].toUpperCase();
  }

  // Fallback to simple numbering
  return index + 1;
};

// Process a single file
const processFile = (filename) => {
  const filepath = path.join(DORK_PACKS_DIR, filename);
  const content = fs.readFileSync(filepath, "utf-8");
  const lines = content.split("\n");

  let modified = false;
  const newLines = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check if this is a dork title (###)
    if (line.trim().startsWith("### ")) {
      const title = line.replace("### ", "").trim();
      const titleLine = line;
      i++;

      // Collect empty lines between title and code block
      const emptyLines = [];
      while (i < lines.length && lines[i].trim() === "") {
        emptyLines.push(lines[i]);
        i++;
      }

      // Check if next line is start of code block
      if (i < lines.length && lines[i].trim().startsWith("```")) {
        const codeBlockStart = i;
        i++; // Move past opening ```

        // Collect code lines
        const codeLines = [];
        while (i < lines.length && !lines[i].trim().startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }

        // i now points to closing ```
        const codeBlockEnd = i;

        // Filter out empty lines
        const nonEmptyLines = codeLines
          .map((l, idx) => ({ line: l, index: idx }))
          .filter((item) => item.line.trim() !== "");

        // If multiple non-empty lines, split them
        if (nonEmptyLines.length > 1) {
          modified = true;
          console.log(`  Splitting "${title}": ${nonEmptyLines.length} dorks`);

          // Create separate dork entries for each line
          nonEmptyLines.forEach((item, idx) => {
            const suffix = generateSuffix(item.line.trim(), idx, nonEmptyLines.length);
            const newTitle = `### ${title} - ${suffix}`;

            if (idx > 0) {
              newLines.push(""); // Add blank line between dorks
            }
            newLines.push(newTitle);
            newLines.push("");
            newLines.push(lines[codeBlockStart]); // Opening ```
            newLines.push(item.line); // The query
            newLines.push(lines[codeBlockEnd]); // Closing ```
          });

          i++; // Move past closing ```
          continue;
        } else {
          // Single line or empty - keep as is
          newLines.push(titleLine);
          emptyLines.forEach((l) => newLines.push(l));
          newLines.push(lines[codeBlockStart]); // Opening ```
          codeLines.forEach((l) => newLines.push(l));
          newLines.push(lines[codeBlockEnd]); // Closing ```
          i++; // Move past closing ```
          continue;
        }
      } else {
        // No code block found, keep title and empty lines
        newLines.push(titleLine);
        emptyLines.forEach((l) => newLines.push(l));
        continue;
      }
    }

    newLines.push(line);
    i++;
  }

  if (modified) {
    fs.writeFileSync(filepath, newLines.join("\n"));
    return true;
  }

  return false;
};

// Main execution
const main = () => {
  const files = fs
    .readdirSync(DORK_PACKS_DIR)
    .filter((file) => file.endsWith(".md") && file !== "README.md");

  console.log(`Processing ${files.length} dork pack files...\n`);

  let modifiedCount = 0;
  files.forEach((file) => {
    console.log(`Processing ${file}...`);
    const wasModified = processFile(file);
    if (wasModified) {
      modifiedCount++;
      console.log(`  ✓ Modified\n`);
    } else {
      console.log(`  - No multi-line dorks found\n`);
    }
  });

  console.log(`\nCompleted! Modified ${modifiedCount} files.`);
};

main();
