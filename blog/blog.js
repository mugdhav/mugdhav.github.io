// Blog configuration
const BLOG_CONFIG = {
    postsPath: 'posts/',
    postsPerPage: 6
};

// Blog posts data (will be loaded from markdown files)
let blogPosts = [];
let filteredPosts = [];
let currentCategory = 'all';

// Initialize blog
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    loadBlogPosts();
});

// Theme toggle functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

// Initialize theme on page load
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
}

// Load blog posts
async function loadBlogPosts() {
    try {
        // For now, we'll use sample data. In a real implementation, 
        // this would load markdown files from the posts directory
        blogPosts = await getSamplePosts();
        filteredPosts = [...blogPosts];
        
        renderBlogPosts();
        renderCategories();
        renderRecentPosts();
    } catch (error) {
        console.error('Error loading blog posts:', error);
        showError('Failed to load blog posts');
    }
}

// Get blog posts from portfolio data
async function getSamplePosts() {
    // Return blog posts from portfolio_data.js
    if (typeof portfolioData !== 'undefined' && portfolioData.blogs) {
        return portfolioData.blogs;
    }

    // Fallback to empty array if portfolio data not available
    console.warn('Portfolio data not available. Make sure portfolio_data.js is loaded.');
    return [];
}

// Render blog posts
function renderBlogPosts() {
    const blogPostsContainer = document.getElementById('blogPosts');
    
    if (filteredPosts.length === 0) {
        blogPostsContainer.innerHTML = `
            <div class="no-posts">
                <h3>No posts found</h3>
                <p>Try adjusting your search or category filter.</p>
            </div>
        `;
        return;
    }

    const postsHTML = filteredPosts.map(post => {
        const postUrl = post.url ? post.url : `${post.slug}.html`;
        const targetAttr = post.url ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `
            <article class="blog-post" id="${post.id}">
                <h3>${post.title}</h3>
                <div class="meta">
                    ${formatDate(post.date)} • ${post.readTime} • ${post.category}
                </div>
                <p class="excerpt">${post.excerpt}</p>
                <a href="${postUrl}"${targetAttr} class="read-more">Read More</a>
            </article>
        `;
    }).join('');

    blogPostsContainer.innerHTML = postsHTML;
}

// Render categories
function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    const allCountElement = document.getElementById('all-count');
    
    // Get unique categories
    const categories = [...new Set(blogPosts.map(post => post.category))];
    const categoryCounts = {};
    
    categories.forEach(category => {
        categoryCounts[category] = blogPosts.filter(post => post.category === category).length;
    });

    // Update all posts count
    allCountElement.textContent = `(${blogPosts.length})`;

    // Add category links
    const categoryHTML = categories.map(category => `
        <li>
            <a href="#" onclick="filterByCategory('${category}')">
                ${category} <span>(${categoryCounts[category]})</span>
            </a>
        </li>
    `).join('');

    // Insert after the "All Posts" item
    const allPostsItem = categoriesContainer.querySelector('li');
    allPostsItem.insertAdjacentHTML('afterend', categoryHTML);
}

// Render recent posts
function renderRecentPosts() {
    const recentPostsContainer = document.getElementById('recentPosts');
    const recentPosts = blogPosts.slice(0, 5); // Get 5 most recent posts

    const recentHTML = recentPosts.map(post => {
        const postUrl = post.url ? post.url : `${post.slug}.html`;
        const targetAttr = post.url ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `
            <li>
                <a href="${postUrl}"${targetAttr}>${post.title}</a>
            </li>
        `;
    }).join('');

    recentPostsContainer.innerHTML = recentHTML;
}

// Filter posts by category
function filterByCategory(category) {
    currentCategory = category;
    
    if (category === 'all') {
        filteredPosts = [...blogPosts];
    } else {
        filteredPosts = blogPosts.filter(post => post.category === category);
    }
    
    renderBlogPosts();
    updateActiveCategory(category);
}

// Update active category in sidebar
function updateActiveCategory(activeCategory) {
    const categoryLinks = document.querySelectorAll('.category-list a');
    categoryLinks.forEach(link => {
        link.style.color = 'var(--secondary-text-color)';
        link.style.fontWeight = 'normal';
    });

    // Find and highlight active category
    categoryLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        if ((activeCategory === 'all' && linkText.includes('all posts')) ||
            linkText.includes(activeCategory.toLowerCase())) {
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = 'bold';
        }
    });
}

// Search posts
function searchPosts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        filteredPosts = currentCategory === 'all' ? 
            [...blogPosts] : 
            blogPosts.filter(post => post.category === currentCategory);
    } else {
        const baseFilter = currentCategory === 'all' ? 
            blogPosts : 
            blogPosts.filter(post => post.category === currentCategory);
            
        filteredPosts = baseFilter.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm)
        );
    }
    
    renderBlogPosts();
}

// Add search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchPosts();
            }
        });

        // Real-time search
        searchInput.addEventListener('input', function() {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(searchPosts, 300);
        });
    }
});

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Show error message
function showError(message) {
    const blogPostsContainer = document.getElementById('blogPosts');
    blogPostsContainer.innerHTML = `
        <div class="no-posts">
            <h3>Error</h3>
            <p>${message}</p>
        </div>
    `;
}