---
name: update-portfolio
description: Update portfolio website data for www.vmugdha.in. Adds new entries, updates existing entries, reorders items, and renumbers IDs in portfolio data files. Always presents a plan before making changes.
user-invocable: true
disable-model-invocation: true
allowed-tools: Read, Edit, Glob, Grep, Bash, WebFetch, AskUserQuestion
argument-hint: [description of what to add/update]
---

# Portfolio Data Updater for www.vmugdha.in

You are updating portfolio data for Mugdha Vairagade's personal website (www.vmugdha.in).

## Data Files

| File | Sections |
|------|----------|
| `assets/js/portfolio_data.js` | personal, skills, portfolio (technical-articles, ai-development), navigation, ctaButtons, events, podcasts, blogs |
| `assets/js/linkedin-posts.js` | LinkedIn posts array |

## Section Schemas

### Technical Articles (`portfolioData.portfolio["technical-articles"]`)
- **ID pattern**: `tech-article-{N}` (sequential, 0-based)
- **Fields**: `id`, `icon` (emoji), `svgIcon` (SVG markup string), `title`, `description`, `buttonText`, `buttonLink`, `category`, `year`

### AI Development (`portfolioData.portfolio["ai-development"]`)
- **ID pattern**: `ai-dev-{N}` (sequential, 0-based)
- **Fields**: `id`, `image` (path: `/assets/images/portfolio/{filename}`), `title`, `description`, `buttonText`, `buttonLink`, `category`, `year`

### Events (`portfolioData.events`)
- **ID pattern**: descriptive kebab-case (e.g., `pie-ai-pune-run-models-locally`)
- **Fields**: `id`, `title`, `startDate` (ISO 8601 with +05:30), `endDate`, `date` (human-readable), `location`, `organization`, `description`, `icon` (FontAwesome class), `linkedInLink`, `blogLink` (optional), `podcastLink` (optional), `videoLink` (optional), `searchTerms`
- **Ordering**: by date (upcoming first)

### Podcasts (`portfolioData.podcasts`)
- **ID pattern**: `conversation-{guest-name-kebab-case}`
- **Fields**: `id`, `title`, `date` (e.g., "December 2025"), `host`, `description` (can contain HTML), `banner`, `audioFile`, `transcriptFile`, `slidesPath`, `slideCount`, `duration`, `topics` (array)
- **Ordering**: most recent first

### Blogs (`portfolioData.blogs`)
- **ID pattern**: kebab-case slug
- **Fields**: `id`, `title`, `excerpt`, `date` (YYYY-MM-DD), `category`, `readTime`, `slug`, `url` (external URL), `featured` (boolean)
- **Ordering**: most recent first

### LinkedIn Posts (`linkedinPosts` in `linkedin-posts.js`)
- **ID pattern**: `post-{N}` (sequential, 1-based)
- **Fields**: `id`, `date` (YYYY-MM-DD), `content`, `thumbnail` (emoji), `link` (URL), `engagement` (`likes`, `comments`, `shares`)

## Workflow

Follow this exact workflow for every invocation:

### Step 1: Understand the Request
Parse `$ARGUMENTS` to determine:
- **Target section**: Which section of which data file to modify
- **Operation**: Add new entry, update existing entry, remove entry, or reorder entries
- **Content details**: Title, description, links, category, etc.

If the request mentions a URL to a Hugging Face Space, external app, article, or video, use WebFetch to gather information about it (title, description, what it does) to auto-generate accurate field values.

### Step 2: Read Current State
- Read the relevant data file to understand the current entries, their order, and ID numbering.
- For sequential ID sections (technical-articles, ai-development), note the current ID range.

### Step 3: Present the Plan
Present a concise plan to the user using this format:

```
PORTFOLIO UPDATE PLAN
=====================
File: <filename>
Section: <section name>
Operation: <Add / Update / Remove / Reorder>

Changes:
- <bullet point description of each change>
- <if adding: position, new ID, title, description one-liner, link, category, year>
- <if reordering: old order -> new order>
- <if IDs need renumbering: list affected ID changes>

Entry preview:
{
  <the new/updated entry as it will appear in the file>
}

Note: <any assets needed, e.g., thumbnail images to add>
```

Then ask: "Approve this plan, or provide edits?"

### Step 4: Execute on Approval
Once the user approves (with or without edits):
1. Apply the edits to the data file using the Edit tool
2. If adding with sequential IDs, renumber all subsequent entries to maintain sequential order
3. Verify the changes by reading the modified section back
4. Report completion with a summary

### Step 5: Suggest llms.txt and sitemap.xml Update
After Step 4 is complete, **if the user did not already ask for this**, suggest updating the discovery files:

> "Would you also like me to update `llms.txt` and `sitemap.xml` to reflect this change?"

If the user agrees (or if they proactively requested it earlier), do the following:

**llms.txt** (`llms.txt` in project root):
- Add a one-line entry for the new/updated item in the appropriate section of `llms.txt`.
- Format: `- [Title](URL): One-sentence summary`
- Insert it in the correct section (e.g., "AI Development Projects", "Technical Articles", "Blog Posts", etc.) and at the matching position relative to the data file.
- If updating an existing entry, find and replace the corresponding line.

**sitemap.xml** (`sitemap.xml` in project root):
- Only update `sitemap.xml` if the new entry points to a page hosted on `www.vmugdha.in` (not external URLs like LinkedIn, YouTube, GitHub, or Hugging Face).
- If applicable, add a `<url>` block with the page's `<loc>`, today's date as `<lastmod>`, appropriate `<changefreq>`, and `<priority>`.
- Also update the `<lastmod>` of the parent page (e.g., homepage for portfolio items, TechEvents.html for events) to today's date.

## Rules

1. ALWAYS present the plan BEFORE making any changes. Never skip the plan step.
2. For sequential ID sections, ALWAYS renumber all subsequent IDs when inserting at a position other than the end.
3. Match the exact code style of existing entries (indentation, quote style, trailing commas, spacing).
4. For AI Development entries, the `image` field should reference `/assets/images/portfolio/<slug>-thumbnail.png` and remind the user to add the image file.
5. When generating descriptions, create a concise one-liner that captures what the project/article does.
6. If the user provides a URL, fetch it to auto-populate fields (title, description) where possible.
7. Default `year` to the current year unless specified otherwise.
8. Default `buttonText` based on the type: "Try It Out" for apps/tools, "View Article" for articles, "View Demo" for demos, "View Tutorial" for tutorials.
9. Keep the plan brief - no more than what's needed to understand the change.
10. If the user's input is ambiguous about which section to update, ask for clarification using AskUserQuestion.
