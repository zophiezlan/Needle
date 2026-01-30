import { defineConfig } from "vitepress";
import markdownItGitHubAlerts from "markdown-it-github-alerts";
import { fileURLToPath, URL } from "node:url";

const toolsPublicDir = fileURLToPath(new URL("../../tools", import.meta.url));

export default defineConfig({
  title: "Harm Reduction Google Dork Guide",
  description: "Advanced search operators, workflows, and dork packs for harm reduction work.",
  base: "/harm-reduction-google-dork-guide/",
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: [
    "_sidebar.md",
    "_navbar.md",
    "_assets/**",
    "index.html",
    ".nojekyll",
    "dork-explorer.md",
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/README" },
      { text: "Dork Explorer", link: "/dork-explorer/" },
      {
        text: "Modes",
        items: [
          { text: "Beginner", link: "/modes/beginner" },
          { text: "Practitioner", link: "/modes/practitioner" },
          { text: "Expert", link: "/modes/expert" },
        ],
      },
      { text: "Templates", link: "/templates/README" },
    ],
    sidebar: {
      "/": [
        {
          text: "Getting Started",
          items: [
            { text: "Quick Start", link: "/01-quick-start" },
            { text: "Core Operators", link: "/02-core-operators" },
            { text: "Advanced Operators", link: "/03-advanced-operators" },
            { text: "Domain Map", link: "/04-domain-map" },
            { text: "Synonym Blocks", link: "/05-synonym-blocks" },
          ],
        },
        {
          text: "Dork Packs",
          items: [{ text: "All Dork Packs", link: "/dork-packs/README" }],
        },
        {
          text: "Workflows",
          items: [
            { text: "Overview", link: "/workflows/README" },
            { text: "Research Workflow", link: "/workflows/research-workflow" },
            { text: "Monitoring", link: "/workflows/monitoring" },
            { text: "Peer-Centered", link: "/workflows/peer-centered" },
            { text: "Verification", link: "/workflows/verification" },
          ],
        },
        {
          text: "Tools & Resources",
          items: [
            { text: "Tools Overview", link: "/tools/README" },
            { text: "Browser Extensions", link: "/tools/browser-extensions" },
            { text: "Google Alerts", link: "/tools/google-alerts" },
            { text: "Custom Search", link: "/tools/custom-search" },
            { text: "OSINT", link: "/tools/osint" },
            { text: "Privacy & Security", link: "/tools/privacy-security" },
            { text: "Cheat Sheet", link: "/resources/cheat-sheet" },
            { text: "Substance Categories", link: "/substance-categories" },
            { text: "Substance Databases", link: "/resources/substance-databases" },
            { text: "Academic Access", link: "/resources/academic-access" },
            { text: "Organizations", link: "/resources/organizations" },
            { text: "Australian OSINT", link: "/resources/australian-osint" },
          ],
        },
        {
          text: "Templates",
          items: [
            { text: "Templates Overview", link: "/templates/README" },
            { text: "Briefing Template", link: "/templates/briefing-template" },
            { text: "Evidence Log Template", link: "/templates/evidence-log-template" },
          ],
        },
        {
          text: "Extras",
          items: [
            { text: "Troubleshooting", link: "/troubleshooting" },
            { text: "Dork Explorer", link: "/dork-explorer/" },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/zophiezlan/harm-reduction-google-dork-guide",
      },
    ],
    search: {
      provider: "local",
    },
    outline: [2, 3],
  },
  markdown: {
    config: (md) => {
      md.use(markdownItGitHubAlerts);
    },
  },
  vite: {
    publicDir: toolsPublicDir,
  },
});
