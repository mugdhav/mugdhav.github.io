// Shared Header and Footer Components
// Eliminates duplication across pages

// Path adjustment for navigation links based on current page location
function adjustNavPath(href) {
    // Don't adjust external links
    if (href.startsWith('http')) {
        return href;
    }

    // Detect if we're at root level (index.html)
    const path = window.location.pathname;
    const isRootLevel = path.endsWith('index.html') ||
                        path.endsWith('/') ||
                        path === '/' ||
                        (!path.includes('/pages/') && !path.includes('/blog/'));

    // Handle anchors (links to sections on index.html)
    if (href.startsWith('#')) {
        // From index.html: keep as-is (#home, #about, etc.)
        // From other pages: prefix with ../index.html
        return isRootLevel ? href : '../index.html' + href;
    }

    // Handle regular links
    // If at root: use as-is (blog/blog.html, pages/TechEvents.html)
    // If not at root: prepend ../ (../blog/blog.html, ../pages/TechEvents.html)
    return isRootLevel ? href : '../' + href;
}

// Render Header Component
function renderHeader(options = {}) {
    const showSearch = options.showSearch !== false; // Default to true (show on all pages)
    const showMobileMenu = options.showMobileMenu !== false;

    // Determine logo href based on location
    const path = window.location.pathname;
    const isRootLevel = path.endsWith('index.html') ||
                        path.endsWith('/') ||
                        path === '/' ||
                        (!path.includes('/pages/') && !path.includes('/blog/'));

    const logoHref = isRootLevel ? '#home' : '../index.html';

    // Adjust asset paths based on location
    const assetPath = isRootLevel ? 'assets/' : '../assets/';

    // Build navigation menu from portfolioData
    const navItems = portfolioData.navigation.map(item => {
        const adjustedHref = adjustNavPath(item.href);
        return `<li><a href="${adjustedHref}">${item.text}</a></li>`;
    }).join('');

    // Theme style switcher (Jazzy vs Calm)
    const themeStyleToggle = `
        <div class="theme-style-toggle" role="group" aria-label="Theme style selection">
            <button class="theme-option jazzy-option"
                    onclick="switchThemeStyle('jazzy')"
                    aria-label="Switch to Jazzy theme"
                    title="Vibrant & Colorful">
                <img src="${assetPath}images/icons/JazzIcon.png" alt="Jazz" class="theme-icon-img"> Jazzy
            </button>
            <button class="theme-option calm-option"
                    onclick="switchThemeStyle('calm')"
                    aria-label="Switch to Calm theme"
                    title="Minimal & Professional">
                <img src="${assetPath}images/icons/CalmIcon.png" alt="Calm" class="theme-icon-img"> Calm
            </button>
        </div>
    `;

    // Search input field (visible on all pages by default)
    const searchField = showSearch ? `
        <div class="header-search-container">
            <button id="header-search-submit-btn" class="search-icon-button" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
            </button>
            <input type="text"
                   id="header-search-input"
                   class="header-search-input"
                   placeholder="Search this site"
                   aria-label="Search this site">
            <button id="header-search-clear-btn" class="header-search-clear-btn" style="display: none;" aria-label="Clear search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>` : '';

    /* ============================================
       LIGHT/DARK MODE TOGGLE - CURRENTLY HIDDEN
       ============================================
       Hidden on: 1 Jan 2026
       Reason: Website theme refinement - clash with other header items
       This toggle switches between light and dark color modes.
       Uncomment the code below and add ${lightDarkToggle} to nav-right div to restore.

    const lightDarkToggle = `
        <button id="theme-toggle" class="theme-toggle" data-tooltip="Switch to dark mode" onclick="toggleTheme()">
            <span class="theme-icon">🌙</span>
        </button>
    `;
    ============================================ */

    // Mobile menu toggle
    const mobileMenuToggle = showMobileMenu ? `
        <div class="mobile-menu-toggle" onclick="toggleMobileMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>` : '';

    return `
        <header role="banner">
            <nav role="navigation" aria-label="Main navigation">
                <div class="nav-row-1">
                    <a href="${logoHref}" class="logo" aria-label="Go to homepage">Mugdha's Portfolio</a>
                    ${themeStyleToggle}
                    ${mobileMenuToggle}
                </div>
                <div class="nav-row-2">
                    <ul class="nav-links" id="navLinks">
                        ${navItems}
                    </ul>
                    ${searchField}
                </div>
            </nav>
        </header>
    `;
}

// Render Footer Component
function renderFooter() {
    return `
        <footer role="contentinfo">
            <p>&copy; <span id="current-year"></span> ${portfolioData.personal.name}. All rights reserved.</p>
        </footer>
    `;
}

// Initialize Components
function initializeComponents(options = {}) {
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    if (headerContainer) {
        headerContainer.innerHTML = renderHeader(options);
    }

    if (footerContainer) {
        footerContainer.innerHTML = renderFooter();
    }
}

// Auto-initialize when DOM is ready
// Check if we should initialize automatically (only if containers exist)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // Only auto-initialize if header-container exists
        if (document.getElementById('header-container')) {
            initializeComponents();
        }
    });
} else {
    // DOM already loaded, initialize if containers exist
    if (document.getElementById('header-container')) {
        initializeComponents();
    }
}
