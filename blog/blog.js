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

// Get sample blog posts (replace with actual markdown loading)
async function getSamplePosts() {
    return [
        {
            id: 'pie-ai-pune-extracting-structuring',
            title: 'Snapshots from Pie & AI Pune: Extracting and Structuring Information',
            excerpt: 'A recap of a Pie & AI event in Pune focused on AI-powered information extraction, bringing together AI practitioners to explore technologies for extracting and structuring information from documents and images. Learn about APIs and frameworks like LandingAI ADE, Google Document AI, and DocETL; along with practical applications.',
            date: '2025-10-06',
            category: 'AI Development',
            readTime: '3 min read',
            slug: 'pie-ai-pune-extracting-structuring',
            url: 'https://www.linkedin.com/pulse/snapshots-from-pie-ai-pune-extracting-structuring-mugdha-vairagade-uw7yf'
        },
        {
            id: 'generating-content-open-source',
            title: 'Generating Content with Open Source Models',
            excerpt: 'Hosted another Pie & AI event focusing on content generation with Open Source models. Participants ranging from AI novices to experts explored lightweight models like phi3:3.8b and gemma3:4b using Ollama for local deployment. Discover how Open Source models offer data protection and cost savings.',
            date: '2025-09-16',
            category: 'AI Development',
            readTime: '2 min read',
            slug: 'generating-content-open-source',
            url: 'https://www.linkedin.com/pulse/generating-content-open-source-models-mugdha-vairagade-xujuf'
        },
        {
            id: 'experiment-indian-ai',
            title: 'An Experiment with Indian AI',
            excerpt: 'Sharing insights from the DeepLearning.AI community event Pie & AI: Pune - Exploring Indian AI. Participants engaged in hands-on experiments with Indian AI platforms like Sarvam AI and CoRover.AI BharatGPT, exploring their capabilities in native languages. Learn about the potential and limitations of Indian AI technologies.',
            date: '2025-09-08',
            category: 'AI Development',
            readTime: '3 min read',
            slug: 'experiment-indian-ai',
            url: 'https://www.linkedin.com/pulse/experiment-indian-ai-mugdha-vairagade-cqvef'
        }
        //Comment out above and uncomment below to test with more posts
        /*
        {
            id: 'getting-started-crewai',
            title: 'Getting Started with CrewAI',
            excerpt: 'Learn how to set up CrewAI for building powerful multi-agent AI systems. This comprehensive guide covers installation, basic concepts, and your first project.',
            date: '2025-01-15',
            category: 'AI Development',
            readTime: '5 min read',
            slug: 'getting-started-crewai'
        },
        {
            id: 'ai-contact-centers',
            title: 'The Future of AI in Contact Centers',
            excerpt: 'Exploring how artificial intelligence is transforming customer service and contact center operations. From chatbots to predictive analytics.',
            date: '2025-01-10',
            category: 'AI Development',
            readTime: '8 min read',
            slug: 'ai-contact-centers'
        },
        {
            id: 'responsive-portfolio',
            title: 'Building Responsive Portfolio Sites',
            excerpt: 'A complete guide to creating professional, responsive portfolio websites using modern CSS techniques and best practices.',
            date: '2025-01-05',
            category: 'Web Development',
            readTime: '12 min read',
            slug: 'responsive-portfolio'
        },
        {
            id: 'ux-principles',
            title: 'UX Design Principles for Beginners',
            excerpt: 'Essential UX design principles every designer should know. Learn about user research, wireframing, and creating intuitive interfaces.',
            date: '2024-12-28',
            category: 'UX Design',
            readTime: '6 min read',
            slug: 'ux-principles'
        },
        {
            id: 'technical-writing-guide',
            title: 'Technical Writing Best Practices',
            excerpt: 'Master the art of technical writing with these proven strategies. Learn how to write clear, concise documentation that users actually read.',
            date: '2024-12-20',
            category: 'Technical Writing',
            readTime: '10 min read',
            slug: 'technical-writing-guide'
        },
        {
            id: 'career-tips-developers',
            title: 'Career Tips for New Developers',
            excerpt: 'Essential career advice for developers just starting out. From building your first portfolio to landing your dream job.',
            date: '2024-12-15',
            category: 'Career Tips',
            readTime: '7 min read',
            slug: 'career-tips-developers'
        } 
        */
    ];
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
        const postUrl = post.url ? post.url : `post.html?slug=${post.slug}`;
        const targetAttr = post.url ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `
            <article class="blog-post">
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
        const postUrl = post.url ? post.url : `post.html?slug=${post.slug}`;
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