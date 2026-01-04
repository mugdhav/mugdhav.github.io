// Search UI Handler - Connects header search to enhanced search system

class SearchUI {
    constructor() {
        this.searchInput = null;
        this.searchOverlay = null;
        this.resultsContainer = null;
        this.filtersContainer = null;
        this.searchInfo = null;
        this.debounceTimer = null;
        this.categories = [
            { id: 'all', label: 'All', icon: '🔍' },
            { id: 'technical-articles', label: 'Technical Articles', icon: '📖' },
            { id: 'ai-development', label: 'AI Projects', icon: '🤖' },
            { id: 'events', label: 'Tech Events', icon: '🎓' },
            { id: 'podcasts', label: 'Podcasts', icon: '🎙️' },
            { id: 'blog', label: 'Blog Posts', icon: '✍️' }
        ];
    }

    // Initialize search UI
    init() {
        this.createSearchOverlay();
        this.bindEvents();
    }

    // Create search overlay modal
    createSearchOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'search-overlay';
        overlay.innerHTML = `
            <div class="search-modal">
                <div class="search-modal-header">
                    <h3>Search Results</h3>
                    <button class="search-close" aria-label="Close search">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="search-filters" id="search-filters"></div>
                <div class="search-info" id="search-info"></div>
                <div class="search-results" id="search-results"></div>
            </div>
        `;

        document.body.appendChild(overlay);
        this.searchOverlay = overlay;
        this.resultsContainer = overlay.querySelector('#search-results');
        this.filtersContainer = overlay.querySelector('#search-filters');
        this.searchInfo = overlay.querySelector('#search-info');

        this.renderFilters();
    }

    // Render category filter buttons
    renderFilters() {
        const filterButtons = this.categories.map(cat => `
            <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}"
                    data-category="${cat.id}"
                    aria-label="Filter by ${cat.label}">
                <span class="filter-icon">${cat.icon}</span>
                <span class="filter-label">${cat.label}</span>
            </button>
        `).join('');

        this.filtersContainer.innerHTML = filterButtons;

        // Bind filter click events
        this.filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleFilterClick(btn));
        });
    }

    // Handle filter button clicks
    handleFilterClick(button) {
        const category = button.dataset.category;

        if (window.portfolioSearch) {
            window.portfolioSearch.toggleFilter(category);

            // Update active states
            const activeFilters = window.portfolioSearch.getActiveFilters();
            this.filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
                if (activeFilters.includes(btn.dataset.category)) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Re-run search with current query
            if (this.searchInput && this.searchInput.value.trim()) {
                this.performSearch(this.searchInput.value);
            }
        }
    }

    // Bind event listeners
    bindEvents() {
        // Get header search input
        this.searchInput = document.getElementById('header-search-input');
        this.searchSubmitBtn = document.getElementById('header-search-submit-btn');
        this.searchClearBtn = document.getElementById('header-search-clear-btn');

        if (!this.searchInput) {
            console.warn('Header search input not found');
            return;
        }

        // Create autocomplete dropdown
        this.createAutocompleteDropdown();

        // Search input - show autocomplete while typing
        this.searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();

            clearTimeout(this.debounceTimer);

            if (query.length > 0) {
                // Show autocomplete suggestions
                this.debounceTimer = setTimeout(() => {
                    this.showAutocomplete(query);
                }, 200);
            } else {
                this.hideAutocomplete();
                // Hide clear button when input is empty
                if (this.searchClearBtn) {
                    this.searchClearBtn.style.display = 'none';
                }
            }
        });

        // Enter key - trigger search
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = e.target.value.trim();
                if (query.length > 0) {
                    this.hideAutocomplete();
                    this.triggerSearch(query);
                }
            }
        });

        // Search button click - trigger search
        if (this.searchSubmitBtn) {
            this.searchSubmitBtn.addEventListener('click', () => {
                const query = this.searchInput.value.trim();
                if (query.length > 0) {
                    this.hideAutocomplete();
                    this.triggerSearch(query);
                }
            });
        }

        // Clear button click - clear search
        if (this.searchClearBtn) {
            this.searchClearBtn.addEventListener('click', () => {
                this.searchInput.value = '';
                this.searchInput.focus();
                this.searchClearBtn.style.display = 'none';
                this.hideAutocomplete();
                this.hideOverlay();
            });
        }

        // Focus event - show autocomplete if has value
        this.searchInput.addEventListener('focus', (e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                this.showAutocomplete(query);
            }
        });

        // Close overlay on close button click
        const closeBtn = this.searchOverlay.querySelector('.search-close');
        closeBtn.addEventListener('click', () => this.hideOverlay());

        // Close overlay on backdrop click
        this.searchOverlay.addEventListener('click', (e) => {
            if (e.target === this.searchOverlay) {
                this.hideOverlay();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.autocompleteDropdown && this.autocompleteDropdown.style.display !== 'none') {
                    this.hideAutocomplete();
                } else if (this.searchOverlay.classList.contains('active')) {
                    this.hideOverlay();
                }
            }
        });

        // Hide autocomplete when clicking outside
        document.addEventListener('click', (e) => {
            if (this.autocompleteDropdown &&
                !this.searchInput.contains(e.target) &&
                !this.autocompleteDropdown.contains(e.target) &&
                !this.searchSubmitBtn.contains(e.target)) {
                this.hideAutocomplete();
            }
        });
    }

    // Trigger search and show overlay
    triggerSearch(query) {
        this.performSearch(query);
        this.showOverlay();
        // Show clear button after search is triggered
        if (this.searchClearBtn) {
            this.searchClearBtn.style.display = 'flex';
        }
    }

    // Perform search
    performSearch(query) {
        if (!window.portfolioSearch) {
            console.error('Portfolio search not initialized');
            return;
        }

        const { results, method } = window.portfolioSearch.search(query);
        this.displayResults(results, query, method);
    }

    // Display search results
    displayResults(results, query, method) {
        // Update info
        const activeFilters = window.portfolioSearch.getActiveFilters();
        const filterText = activeFilters.includes('all') ? 'all categories' : activeFilters.join(', ');

        if (results.length === 0) {
            this.searchInfo.innerHTML = `<span class="no-results">No results found for "${this.escapeHtml(query)}" in ${filterText}</span>`;
            this.resultsContainer.innerHTML = `
                <div class="search-empty">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <p>Try different keywords or filters</p>
                </div>
            `;
            return;
        }

        this.searchInfo.innerHTML = `
            <span class="result-count">${results.length} result${results.length !== 1 ? 's' : ''} found</span>
            <span class="result-method">using ${method} match</span>
        `;

        // Render results
        const resultsHtml = results.map(result => {
            const highlightedTitle = this.highlightText(result.title, query);
            const highlightedContent = this.highlightText(result.content.substring(0, 200), query);

            return `
                <div class="search-result-item"
                     data-internal-url="${this.escapeHtml(result.internalUrl)}"
                     data-external-url="${this.escapeHtml(result.externalUrl || '')}">
                    <div class="search-result-header">
                        <span class="search-result-type">${result.type}</span>
                        ${result.date ? `<span class="search-result-date">${result.date}</span>` : ''}
                    </div>
                    <h4 class="search-result-title">${highlightedTitle}</h4>
                    <p class="search-result-content">${highlightedContent}...</p>
                    ${result.externalUrl ? `
                        <a href="${this.escapeHtml(result.externalUrl)}"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="search-result-external-link"
                           onclick="event.stopPropagation()">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            View on ${this.getExternalPlatform(result.externalUrl)}
                        </a>
                    ` : ''}
                </div>
            `;
        }).join('');

        this.resultsContainer.innerHTML = resultsHtml;

        // Bind click events to results
        this.resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', (e) => {
                // If external link button clicked, don't navigate internally
                if (e.target.closest('.search-result-external-link')) {
                    return; // Let default behavior open external link
                }

                const internalUrl = item.dataset.internalUrl;
                if (internalUrl) {
                    window.location.href = internalUrl;
                }
            });
        });
    }

    // Get external platform name from URL
    getExternalPlatform(url) {
        if (!url) return 'External Site';

        if (url.includes('medium.com')) return 'Medium';
        if (url.includes('linkedin.com')) return 'LinkedIn';
        if (url.includes('youtube.com') || url.includes('youtu.be')) return 'YouTube';
        if (url.includes('spotify.com')) return 'Spotify';
        if (url.includes('github.com')) return 'GitHub';

        return 'External Site';
    }

    // Highlight search terms in text
    highlightText(text, query) {
        if (!query || !text) return this.escapeHtml(text);

        const escapedText = this.escapeHtml(text);
        const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);

        let highlightedText = escapedText;
        terms.forEach(term => {
            const regex = new RegExp(`(${this.escapeRegex(term)})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark class="search-highlight">$1</mark>');
        });

        return highlightedText;
    }

    // Escape HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Escape regex special characters
    escapeRegex(text) {
        return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Create autocomplete dropdown
    createAutocompleteDropdown() {
        const dropdown = document.createElement('div');
        dropdown.className = 'search-autocomplete-dropdown';
        dropdown.style.display = 'none';

        // Position dropdown relative to search container
        const searchContainer = this.searchInput.closest('.header-search-container');
        if (searchContainer) {
            searchContainer.style.position = 'relative';
            searchContainer.appendChild(dropdown);
        }

        this.autocompleteDropdown = dropdown;
    }

    // Show autocomplete suggestions
    showAutocomplete(query) {
        if (!this.autocompleteDropdown || !window.portfolioSearch) {
            return;
        }

        const suggestions = this.getAutocompleteSuggestions(query);

        if (suggestions.length === 0) {
            this.hideAutocomplete();
            return;
        }

        // Render suggestions
        this.autocompleteDropdown.innerHTML = suggestions.map(suggestion => `
            <div class="autocomplete-item" data-value="${this.escapeHtml(suggestion.text)}">
                <span class="autocomplete-icon">${suggestion.icon}</span>
                <div class="autocomplete-content">
                    <div class="autocomplete-text">${this.highlightMatch(suggestion.text, query)}</div>
                    <div class="autocomplete-category">${suggestion.category}</div>
                </div>
            </div>
        `).join('');

        // Bind click events to suggestions
        this.autocompleteDropdown.querySelectorAll('.autocomplete-item').forEach(item => {
            item.addEventListener('click', () => {
                const value = item.dataset.value;
                this.searchInput.value = value;
                this.hideAutocomplete();
                this.triggerSearch(value);
            });
        });

        this.autocompleteDropdown.style.display = 'block';
    }

    // Hide autocomplete dropdown
    hideAutocomplete() {
        if (this.autocompleteDropdown) {
            this.autocompleteDropdown.style.display = 'none';
        }
    }

    // Get autocomplete suggestions from search data
    getAutocompleteSuggestions(query) {
        if (!window.portfolioSearch || !window.portfolioSearch.searchData) {
            return [];
        }

        const lowerQuery = query.toLowerCase();
        const suggestions = [];
        const seen = new Set();
        const maxSuggestions = 8;

        // Search through all indexed content
        window.portfolioSearch.searchData.forEach(item => {
            // Check title match
            if (item.title.toLowerCase().includes(lowerQuery)) {
                const key = item.title.toLowerCase();
                if (!seen.has(key) && suggestions.length < maxSuggestions) {
                    suggestions.push({
                        text: item.title,
                        category: item.type,
                        icon: this.getCategoryIcon(item.category)
                    });
                    seen.add(key);
                }
            }

            // Check keywords match
            if (item.keywords && suggestions.length < maxSuggestions) {
                item.keywords.split(' ').forEach(keyword => {
                    if (keyword.toLowerCase().includes(lowerQuery)) {
                        const key = keyword.toLowerCase();
                        if (!seen.has(key) && suggestions.length < maxSuggestions) {
                            suggestions.push({
                                text: keyword,
                                category: item.type,
                                icon: this.getCategoryIcon(item.category)
                            });
                            seen.add(key);
                        }
                    }
                });
            }
        });

        return suggestions.slice(0, maxSuggestions);
    }

    // Get category icon
    getCategoryIcon(category) {
        const categoryMap = {
            'technical-articles': '📖',
            'ai-development': '🤖',
            'events': '🎓',
            'podcasts': '🎙️',
            'blog': '✍️',
            'about': '👤'
        };
        return categoryMap[category] || '🔍';
    }

    // Highlight matching text in suggestions
    highlightMatch(text, query) {
        const regex = new RegExp(`(${this.escapeRegex(query)})`, 'gi');
        return this.escapeHtml(text).replace(regex, '<strong>$1</strong>');
    }

    // Show search overlay
    showOverlay() {
        this.searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Hide search overlay (do NOT clear search input)
    hideOverlay() {
        this.searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize search UI when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.searchUI = new SearchUI();
        window.searchUI.init();
    });
} else {
    window.searchUI = new SearchUI();
    window.searchUI.init();
}
