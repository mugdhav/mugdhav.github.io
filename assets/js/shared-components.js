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
    const showSearch = options.showSearch || false;
    const showMobileMenu = options.showMobileMenu !== false;

    // Determine logo href based on location
    const path = window.location.pathname;
    const isRootLevel = path.endsWith('index.html') ||
                        path.endsWith('/') ||
                        path === '/' ||
                        (!path.includes('/pages/') && !path.includes('/blog/'));

    const logoHref = isRootLevel ? '#home' : '../index.html';

    // Build navigation menu from portfolioData
    const navItems = portfolioData.navigation.map(item => {
        const adjustedHref = adjustNavPath(item.href);
        return `<li><a href="${adjustedHref}">${item.text}</a></li>`;
    }).join('');

    // Search button (only for index.html)
    const searchButton = showSearch ? `
        <button id="search-toggle" class="search-toggle-btn" aria-label="Search site">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
        </button>` : '';

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
                <a href="${logoHref}" class="logo" aria-label="Go to homepage">Mugdha's Portfolio</a>
                <div class="nav-right">
                    ${searchButton}
                    <button id="theme-toggle" class="theme-toggle" data-tooltip="Switch to dark mode" onclick="toggleTheme()">
                        <span class="theme-icon">🌙</span>
                    </button>
                    ${mobileMenuToggle}
                </div>
                <ul class="nav-links" id="navLinks">
                    ${navItems}
                </ul>
            </nav>
        </header>
    `;
}

// Render Footer Component
function renderFooter() {
    const currentYear = new Date().getFullYear();
    return `
        <footer role="contentinfo">
            <p>&copy; ${currentYear} ${portfolioData.personal.name}. All rights reserved.</p>
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
