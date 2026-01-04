/**
 * Theme Manager - Dual Theme System (Jazzy vs Calm)
 * Handles theme switching, persistence, and UI updates
 */

(function() {
    'use strict';

    // ============================================
    // INITIALIZATION
    // ============================================

    /**
     * Initialize theme system on page load
     */
    function initializeThemeSystem() {
        // Set dynamic footer year
        updateFooterYear();

        // Load saved theme style (default: calm)
        const savedThemeStyle = localStorage.getItem('themeStyle') || 'calm';
        applyThemeStyle(savedThemeStyle);

        // Wait for DOM to load before updating buttons
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                updateThemeButtons(savedThemeStyle);
                attachEventListeners();
            });
        } else {
            updateThemeButtons(savedThemeStyle);
            attachEventListeners();
        }
    }

    // ============================================
    // THEME SWITCHING
    // ============================================

    /**
     * Switch to a specific theme style
     * @param {string} theme - 'jazzy' or 'calm'
     */
    window.switchThemeStyle = function(theme) {
        if (theme !== 'jazzy' && theme !== 'calm') {
            console.error('Invalid theme:', theme);
            return;
        }

        applyThemeStyle(theme);
        localStorage.setItem('themeStyle', theme);
        updateThemeButtons(theme);

        // Dispatch custom event for other scripts to react to
        window.dispatchEvent(new CustomEvent('themeStyleChanged', {
            detail: { theme: theme }
        }));
    };

    /**
     * Apply theme style to document
     * @param {string} theme - Theme to apply
     */
    function applyThemeStyle(theme) {
        document.documentElement.setAttribute('data-theme-style', theme);
    }

    /**
     * Update theme switcher button states
     * @param {string} theme - Active theme
     */
    function updateThemeButtons(theme) {
        const buttons = document.querySelectorAll('.theme-option');

        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        const activeButton = document.querySelector(`.${theme}-option`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    /**
     * Get current theme style
     * @returns {string} Current theme ('jazzy' or 'calm')
     */
    window.getCurrentThemeStyle = function() {
        return document.documentElement.getAttribute('data-theme-style') || 'calm';
    };

    /**
     * Toggle between themes
     */
    window.toggleThemeStyle = function() {
        const currentTheme = getCurrentThemeStyle();
        const newTheme = currentTheme === 'jazzy' ? 'calm' : 'jazzy';
        switchThemeStyle(newTheme);
    };

    // ============================================
    // FOOTER YEAR
    // ============================================

    /**
     * Update footer copyright year to current year
     */
    function updateFooterYear() {
        // Try to update immediately if element exists
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }

        // Also set up listener for when DOM loads
        document.addEventListener('DOMContentLoaded', function() {
            const yearElement = document.getElementById('current-year');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear();
            }
        });
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================

    /**
     * Attach keyboard shortcuts and other event listeners
     */
    function attachEventListeners() {
        // Keyboard shortcuts
        document.addEventListener('keydown', handleKeyboardShortcuts);

        // Handle hash changes (for theme links)
        window.addEventListener('hashchange', handleHashChange);
    }

    /**
     * Handle keyboard shortcuts for theme switching
     * @param {KeyboardEvent} e - Keyboard event
     */
    function handleKeyboardShortcuts(e) {
        // Ctrl+J or Cmd+J: Switch to Jazzy theme
        if ((e.ctrlKey || e.metaKey) && e.key === 'j') {
            e.preventDefault();
            switchThemeStyle('jazzy');
        }

        // Ctrl+K or Cmd+K: Switch to Calm theme
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            switchThemeStyle('calm');
        }

        // Ctrl+Shift+T or Cmd+Shift+T: Toggle theme
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            toggleThemeStyle();
        }
    }

    /**
     * Handle URL hash changes for theme switching
     */
    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash === 'theme-jazzy') {
            switchThemeStyle('jazzy');
        } else if (hash === 'theme-calm') {
            switchThemeStyle('calm');
        }
    }

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================

    /**
     * Check if user prefers reduced motion
     * @returns {boolean}
     */
    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    /**
     * Smooth scroll to top when theme changes (optional)
     */
    function scrollToTop() {
        if (!prefersReducedMotion()) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    // ============================================
    // THEME PERSISTENCE ACROSS PAGES
    // ============================================

    /**
     * Sync theme across tabs/windows
     */
    window.addEventListener('storage', function(e) {
        if (e.key === 'themeStyle' && e.newValue) {
            applyThemeStyle(e.newValue);
            updateThemeButtons(e.newValue);
        }
    });

    // ============================================
    // DEBUGGING HELPERS
    // ============================================

    /**
     * Debug function to log theme info
     */
    window.debugTheme = function() {
        console.log('=== Theme Debug Info ===');
        console.log('Current theme style:', getCurrentThemeStyle());
        console.log('Saved in localStorage:', localStorage.getItem('themeStyle'));
        console.log('HTML attribute:', document.documentElement.getAttribute('data-theme-style'));
        console.log('Active button:', document.querySelector('.theme-option.active')?.textContent);
    };

    // ============================================
    // AUTO-INITIALIZE
    // ============================================

    // Initialize theme system immediately
    initializeThemeSystem();

    // Log initialization in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Theme Manager initialized. Keyboard shortcuts:');
        console.log('  Ctrl+J (Cmd+J): Switch to Jazzy theme');
        console.log('  Ctrl+K (Cmd+K): Switch to Calm theme');
        console.log('  Ctrl+Shift+T (Cmd+Shift+T): Toggle theme');
        console.log('Current theme:', getCurrentThemeStyle());
    }

})();
