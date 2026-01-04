// Enhanced Search System for Portfolio Website
// Builds comprehensive search index from all content sources with category filtering

class PortfolioSearch {
    constructor() {
        this.searchData = [];
        this.lunrIndex = null;
        this.fuseIndex = null;
        this.initialized = false;
        this.activeFilters = new Set(['all']);
    }

    // Build comprehensive search index from portfolio data
    buildSearchIndex() {
        const searchIndex = [];

        if (typeof portfolioData === 'undefined') {
            console.warn('Portfolio data not available');
            return searchIndex;
        }

        // Index Technical Articles
        if (portfolioData.portfolio && portfolioData.portfolio['technical-articles']) {
            portfolioData.portfolio['technical-articles'].items.forEach((item) => {
                const anchorId = item.id;
                searchIndex.push({
                    id: anchorId,
                    title: item.title,
                    content: item.description,
                    internalUrl: `index.html#${anchorId}`,
                    externalUrl: item.buttonLink || null,
                    anchorId: anchorId,
                    type: 'Technical Article',
                    category: 'technical-articles',
                    year: item.year,
                    keywords: this.extractKeywords(`${item.title} ${item.description} ${item.category || ''}`)
                });
            });
        }

        // Index AI Development Projects
        if (portfolioData.portfolio && portfolioData.portfolio['ai-development']) {
            portfolioData.portfolio['ai-development'].items.forEach((item) => {
                const anchorId = item.id;
                searchIndex.push({
                    id: anchorId,
                    title: item.title,
                    content: item.description,
                    internalUrl: `index.html#${anchorId}`,
                    externalUrl: item.buttonLink || null,
                    anchorId: anchorId,
                    type: 'AI Project',
                    category: 'ai-development',
                    year: item.year,
                    keywords: this.extractKeywords(`${item.title} ${item.description} ${item.category || ''}`)
                });
            });
        }

        // Index Tech Events
        if (portfolioData.events) {
            portfolioData.events.forEach(event => {
                const anchorId = event.id;
                searchIndex.push({
                    id: anchorId,
                    title: event.title,
                    content: `${event.description} ${event.location} ${event.organization} ${event.searchTerms || ''}`,
                    internalUrl: `pages/TechEvents.html#${anchorId}`,
                    externalUrl: event.linkedInLink || event.blogLink || null,
                    anchorId: anchorId,
                    type: 'Tech Event',
                    category: 'events',
                    date: event.date,
                    keywords: this.extractKeywords(`${event.title} ${event.description} ${event.searchTerms || ''}`)
                });
            });
        }

        // Index Podcasts
        if (portfolioData.podcasts) {
            portfolioData.podcasts.forEach(podcast => {
                const anchorId = podcast.id;
                searchIndex.push({
                    id: anchorId,
                    title: podcast.title,
                    content: `${podcast.description || ''} ${podcast.topics ? podcast.topics.join(' ') : ''} ${podcast.guest || ''}`,
                    internalUrl: `pages/Podcasts.html#${anchorId}`,
                    externalUrl: podcast.youtubeUrl || podcast.spotifyUrl || null,
                    anchorId: anchorId,
                    type: 'Podcast',
                    category: 'podcasts',
                    date: podcast.date,
                    keywords: this.extractKeywords(`${podcast.title} ${podcast.description || ''} ${podcast.topics ? podcast.topics.join(' ') : ''}`)
                });
            });
        }

        // Index Blog Posts
        if (portfolioData.blogs) {
            portfolioData.blogs.forEach(blog => {
                const anchorId = blog.id;
                searchIndex.push({
                    id: anchorId,
                    title: blog.title,
                    content: blog.excerpt || blog.content || '',
                    internalUrl: `blog/blog.html#${anchorId}`,
                    externalUrl: blog.url || null,
                    anchorId: anchorId,
                    type: 'Blog Post',
                    category: 'blog',
                    date: blog.date,
                    keywords: this.extractKeywords(`${blog.title} ${blog.excerpt || ''} ${blog.category || ''}`)
                });
            });
        }

        // Index About Section
        if (portfolioData.personal && portfolioData.personal.about) {
            const about = portfolioData.personal.about;
            const aboutContent = Object.values(about).join(' ');
            const anchorId = 'about';
            searchIndex.push({
                id: anchorId,
                title: 'About Mugdha Vairagade',
                content: aboutContent,
                internalUrl: `index.html#${anchorId}`,
                externalUrl: null,
                anchorId: anchorId,
                type: 'About',
                category: 'about',
                keywords: this.extractKeywords(aboutContent)
            });
        }

        return searchIndex;
    }

    // Extract keywords from text
    extractKeywords(text) {
        const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'that', 'this', 'these', 'those', 'is', 'are', 'was', 'were', 'be', 'been', 'being'];
        return text.toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 2 && !commonWords.includes(word))
            .slice(0, 15);
    }

    // Initialize search engines (Lunr.js and Fuse.js)
    initializeSearchEngines() {
        if (typeof lunr === 'undefined' || typeof Fuse === 'undefined') {
            console.error('Search libraries not loaded');
            return false;
        }

        // Build search data
        this.searchData = this.buildSearchIndex();

        // Initialize Lunr.js for exact matching
        try {
            this.lunrIndex = lunr(function() {
                this.ref('id');
                this.field('title', { boost: 10 });
                this.field('content', { boost: 5 });
                this.field('keywords', { boost: 8 });
                this.field('type', { boost: 3 });

                this.searchData.forEach(item => {
                    this.add({
                        id: item.id,
                        title: item.title,
                        content: item.content,
                        keywords: item.keywords.join(' '),
                        type: item.type
                    });
                }, this);
            }.bind(this));
        } catch (error) {
            console.error('Error initializing Lunr:', error);
        }

        // Initialize Fuse.js for fuzzy matching
        this.fuseIndex = new Fuse(this.searchData, {
            keys: [
                { name: 'title', weight: 0.4 },
                { name: 'content', weight: 0.3 },
                { name: 'keywords', weight: 0.2 },
                { name: 'type', weight: 0.1 }
            ],
            threshold: 0.4,
            includeScore: true,
            minMatchCharLength: 2
        });

        this.initialized = true;
        return true;
    }

    // Search with Lunr.js (exact matching)
    searchWithLunr(query) {
        if (!this.lunrIndex) return [];

        try {
            const results = this.lunrIndex.search(query);
            return results.map(result => {
                const item = this.searchData.find(d => d.id === result.ref);
                return item ? { ...item, score: result.score } : null;
            }).filter(Boolean);
        } catch (error) {
            console.error('Lunr search error:', error);
            return [];
        }
    }

    // Search with Fuse.js (fuzzy matching)
    searchWithFuse(query) {
        if (!this.fuseIndex) return [];

        const results = this.fuseIndex.search(query);
        return results.map(result => ({
            ...result.item,
            score: 1 - result.score
        }));
    }

    // Apply category filters to results
    filterByCategory(results) {
        if (this.activeFilters.has('all')) {
            return results;
        }

        return results.filter(result => this.activeFilters.has(result.category));
    }

    // Main search function
    search(query) {
        if (!this.initialized) {
            const success = this.initializeSearchEngines();
            if (!success) return { results: [], method: 'none' };
        }

        if (!query || query.trim().length < 2) {
            return { results: [], method: 'none' };
        }

        // Try Lunr first (exact matching)
        let results = this.searchWithLunr(query);
        let method = 'exact';

        // Fallback to Fuse if no results
        if (results.length === 0) {
            results = this.searchWithFuse(query);
            method = 'fuzzy';
        }

        // Apply category filters
        results = this.filterByCategory(results);

        // Sort by score (higher is better)
        results.sort((a, b) => (b.score || 0) - (a.score || 0));

        return { results, method };
    }

    // Set active category filters
    setFilters(filters) {
        this.activeFilters = new Set(filters);
    }

    // Toggle a specific filter
    toggleFilter(category) {
        if (category === 'all') {
            this.activeFilters.clear();
            this.activeFilters.add('all');
        } else {
            this.activeFilters.delete('all');
            if (this.activeFilters.has(category)) {
                this.activeFilters.delete(category);
            } else {
                this.activeFilters.add(category);
            }

            // If no filters selected, default to 'all'
            if (this.activeFilters.size === 0) {
                this.activeFilters.add('all');
            }
        }
    }

    // Get current filters
    getActiveFilters() {
        return Array.from(this.activeFilters);
    }
}

// Create global search instance
window.portfolioSearch = new PortfolioSearch();
