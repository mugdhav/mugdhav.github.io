// Blog Post Viewer with Table of Contents
// Handles markdown parsing, ToC generation, and scroll spy

// Get slug from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug');

// Track heading IDs to avoid duplicates
const headingIds = new Map();

// Initialize post viewer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (!slug) {
        showError('No blog post specified', 'Please select a post from the blog listing.');
        return;
    }

    loadBlogPost(slug);
});

/**
 * Load and render blog post
 */
async function loadBlogPost(slug) {
    try {
        const response = await fetch(`posts/${slug}.md`);

        if (!response.ok) {
            throw new Error(`Post not found: ${slug}`);
        }

        const content = await response.text();

        // Parse frontmatter and markdown
        const { frontmatter, markdown } = parseFrontmatter(content);

        // Update page metadata
        updatePageMetadata(frontmatter);

        // Configure marked.js with custom renderer
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });

        // Render markdown with custom heading renderer
        const renderer = createCustomRenderer();
        const html = marked.parse(markdown, { renderer });

        // Inject rendered content
        renderPostContent(frontmatter, html);

        // Generate and inject ToC
        setTimeout(() => {
            generateTableOfContents();
            initScrollSpy();
            initMobileToC();
        }, 100); // Small delay to ensure DOM is ready

    } catch (error) {
        console.error('Error loading blog post:', error);
        showError('Failed to Load Post', error.message);
    }
}

/**
 * Parse YAML frontmatter from markdown
 */
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);

    if (!match) {
        return {
            frontmatter: {},
            markdown: content
        };
    }

    const frontmatterText = match[1];
    const markdown = match[2];

    // Parse YAML frontmatter (simple key: value format)
    const frontmatter = {};
    frontmatterText.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();

            // Remove quotes if present
            value = value.replace(/^["']|["']$/g, '');

            frontmatter[key] = value;
        }
    });

    return { frontmatter, markdown };
}

/**
 * Create custom marked.js renderer for heading IDs
 */
function createCustomRenderer() {
    const renderer = new marked.Renderer();

    // Override heading renderer to add IDs
    renderer.heading = function(text, level) {
        const slug = generateSlug(text);
        return `<h${level} id="${slug}">${text}</h${level}>`;
    };

    // Override link renderer to add target="_blank" for external links
    renderer.link = function(href, title, text) {
        const isExternal = href.startsWith('http://') || href.startsWith('https://');
        const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
        const titleAttr = title ? ` title="${title}"` : '';
        return `<a href="${href}"${titleAttr}${target}>${text}</a>`;
    };

    return renderer;
}

/**
 * Generate URL-friendly slug from heading text
 */
function generateSlug(text) {
    // Remove markdown formatting
    const cleanText = text.replace(/[*_`]/g, '');

    // Create base slug
    let slug = cleanText
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-')      // Replace spaces with hyphens
        .replace(/-+/g, '-');      // Replace multiple hyphens with single

    // Handle duplicates
    if (headingIds.has(slug)) {
        const count = headingIds.get(slug) + 1;
        headingIds.set(slug, count);
        slug = `${slug}-${count}`;
    } else {
        headingIds.set(slug, 1);
    }

    return slug;
}

/**
 * Update page metadata (title, breadcrumbs)
 */
function updatePageMetadata(frontmatter) {
    // Update page title
    const pageTitle = `${frontmatter.title || 'Blog Post'} - Mugdha's Portfolio`;
    document.getElementById('page-title').textContent = pageTitle;
    document.title = pageTitle;

    // Update breadcrumb
    const breadcrumbTitle = document.getElementById('breadcrumb-title');
    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = frontmatter.title || 'Blog Post';
    }
}

/**
 * Render post content with header and markdown
 */
function renderPostContent(frontmatter, html) {
    const postContent = document.getElementById('post-content');

    const headerHTML = `
        <article class="post-article">
            <header class="post-header">
                <h1 id="post-title">${frontmatter.title || 'Untitled Post'}</h1>
                <div class="post-meta">
                    <span id="post-date">${formatDate(frontmatter.date)}</span>
                    <span id="post-category">${frontmatter.category || 'Uncategorized'}</span>
                    <span id="post-read-time">${frontmatter.readTime || '5 min read'}</span>
                </div>
            </header>
            <div class="markdown-content" id="post-body">
                ${html}
            </div>
        </article>
    `;

    postContent.innerHTML = headerHTML;
}

/**
 * Generate Table of Contents from headings
 */
function generateTableOfContents() {
    const contentArea = document.getElementById('post-body');
    const tocNav = document.getElementById('tocNav');
    const tocWidget = document.getElementById('tocWidget');

    if (!contentArea || !tocNav) return;

    // Get all headings (H2-H4 only)
    const headings = contentArea.querySelectorAll('h2, h3, h4');

    if (headings.length < 3) {
        // Hide ToC if too few headings
        tocWidget.classList.add('hidden');
        return;
    }

    // Build nested ToC structure
    const tocHTML = buildNestedToc(headings);
    tocNav.innerHTML = tocHTML;
}

/**
 * Build nested ToC HTML from headings
 */
function buildNestedToc(headings) {
    if (headings.length === 0) {
        return '<p style="color: var(--secondary-text-color); font-size: 0.9rem;">No headings found</p>';
    }

    let html = '<ul>';
    let currentLevel = 2; // Start at H2
    const stack = [];

    headings.forEach(heading => {
        const level = parseInt(heading.tagName.substring(1)); // H2 -> 2, H3 -> 3
        const text = heading.textContent;
        const id = heading.id;

        // Close nested lists if going back up levels
        while (currentLevel > level) {
            html += '</ul></li>';
            currentLevel--;
            stack.pop();
        }

        // Open nested lists if going deeper
        while (currentLevel < level) {
            html += '<ul>';
            currentLevel++;
            stack.push(currentLevel);
        }

        // Add ToC item
        html += `<li><a href="#${id}">${text}</a></li>`;
    });

    // Close remaining open lists
    while (currentLevel > 2) {
        html += '</ul></li>';
        currentLevel--;
    }

    html += '</ul>';
    return html;
}

/**
 * Initialize scroll spy using Intersection Observer
 */
function initScrollSpy() {
    const contentArea = document.getElementById('post-body');
    if (!contentArea) return;

    const headings = contentArea.querySelectorAll('h2, h3, h4');
    if (headings.length === 0) return;

    // Intersection Observer options
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -66%',
        threshold: 0
    };

    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all ToC links
                document.querySelectorAll('.toc-nav a').forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to current section
                const id = entry.target.id;
                const tocLink = document.querySelector(`.toc-nav a[href="#${id}"]`);
                if (tocLink) {
                    tocLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all headings
    headings.forEach(heading => {
        observer.observe(heading);
    });

    // Add smooth scroll behavior to ToC links
    document.querySelectorAll('.toc-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL hash without jumping
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

/**
 * Initialize mobile ToC collapse/expand
 */
function initMobileToC() {
    const tocWidget = document.getElementById('tocWidget');
    const tocTitle = tocWidget?.querySelector('.toc-title');

    if (!tocTitle) return;

    // Only enable on mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        tocTitle.style.cursor = 'pointer';

        tocTitle.addEventListener('click', () => {
            tocWidget.classList.toggle('collapsed');
        });
    }

    // Re-check on window resize
    window.addEventListener('resize', () => {
        const nowMobile = window.innerWidth <= 768;

        if (nowMobile) {
            tocTitle.style.cursor = 'pointer';
        } else {
            tocTitle.style.cursor = 'default';
            tocWidget.classList.remove('collapsed');
        }
    });
}

/**
 * Format date string
 */
function formatDate(dateString) {
    if (!dateString) return 'Unknown date';

    try {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (error) {
        return dateString;
    }
}

/**
 * Show error message
 */
function showError(title, message) {
    const postContent = document.getElementById('post-content');
    postContent.innerHTML = `
        <div class="error">
            <h2>${title}</h2>
            <p>${message}</p>
            <a href="blog.html" class="back-link">← Back to Blog</a>
        </div>
    `;

    // Hide ToC
    const tocWidget = document.getElementById('tocWidget');
    if (tocWidget) {
        tocWidget.classList.add('hidden');
    }
}
