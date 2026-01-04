// Scroll to Content and Highlight - Search Result Navigation
// This script automatically scrolls to and highlights content when navigating from search results

(function() {
    'use strict';

    // Wait for DOM to be ready
    function initScrollToContent() {
        const hash = window.location.hash;

        if (!hash) {
            return;
        }

        // Wait for content to load (especially dynamic content)
        setTimeout(() => {
            const target = document.querySelector(hash);

            if (target) {
                // Scroll to element with smooth behavior
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                // Add highlight animation class
                target.classList.add('search-highlight-target');

                // Remove highlight after 3 seconds
                setTimeout(() => {
                    target.classList.remove('search-highlight-target');
                }, 3000);
            }
        }, 300); // 300ms delay to allow dynamic content to render
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollToContent);
    } else {
        // DOM already loaded
        initScrollToContent();
    }
})();
