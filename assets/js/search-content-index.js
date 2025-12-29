// Content index for vmugdha.in website search
// This would typically be generated automatically by scraping your site content

const siteSearchData = [
    {
        id: 'about',
        title: 'About Mugdha Vairagade',
        content: 'Technical Writer UX Designer AI Developer passionate about creating user-centered solutions that bridge technology and human needs',
        url: '#about',
        type: 'section',
        keywords: ['technical writer', 'ux designer', 'ai developer', 'user experience', 'technology']
    },
    {
        id: 'skills-technical-writing',
        title: 'Technical Writing Skills',
        content: 'Documentation API documentation User manuals Content strategy Technical communication',
        url: '#about',
        type: 'skill',
        keywords: ['documentation', 'api', 'manuals', 'content strategy', 'technical communication']
    },
    {
        id: 'skills-ux-design',
        title: 'UX Design Skills',
        content: 'User research Wireframing Prototyping User interface design User experience optimization',
        url: '#about',
        type: 'skill',
        keywords: ['user research', 'wireframing', 'prototyping', 'ui design', 'ux optimization']
    },
    {
        id: 'skills-ai-development',
        title: 'AI Development Skills',
        content: 'Machine learning Artificial intelligence Natural language processing Data analysis AI model development',
        url: '#about',
        type: 'skill',
        keywords: ['machine learning', 'artificial intelligence', 'nlp', 'data analysis', 'ai models']
    },
    {
        id: 'portfolio',
        title: 'Portfolio Projects',
        content: 'Showcase of technical writing UX design and AI development projects demonstrating expertise across multiple domains',
        url: '#portfolio',
        type: 'section',
        keywords: ['projects', 'portfolio', 'showcase', 'technical', 'design', 'development']
    },
    {
        id: 'contact',
        title: 'Contact Information',
        content: 'Get in touch for collaboration opportunities technical writing projects UX design work or AI development consulting',
        url: '#contact',
        type: 'section',
        keywords: ['contact', 'collaboration', 'consulting', 'hire', 'work together']
    }
];

// Function to dynamically extract content from the actual website
function extractSiteContent() {
    const contentData = [];
    
    // Extract main sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const id = section.id;
        const title = section.querySelector('h1, h2, h3')?.textContent || id;
        const content = section.textContent.replace(/\s+/g, ' ').trim();
        
        if (content && content.length > 20) {
            contentData.push({
                id: id,
                title: title,
                content: content.substring(0, 300), // Limit content length
                url: `#${id}`,
                type: 'section',
                keywords: extractKeywords(content)
            });
        }
    });
    
    // Extract portfolio items if they exist
    const portfolioItems = document.querySelectorAll('.portfolio-item, .project-item, [data-project]');
    portfolioItems.forEach((item, index) => {
        const title = item.querySelector('h3, h4, .title')?.textContent || `Project ${index + 1}`;
        const description = item.querySelector('p, .description')?.textContent || '';
        const tech = item.querySelector('.tech-stack, .technologies')?.textContent || '';
        
        contentData.push({
            id: `portfolio-${index}`,
            title: title,
            content: `${description} ${tech}`.trim(),
            url: '#portfolio',
            type: 'project',
            keywords: extractKeywords(`${title} ${description} ${tech}`)
        });
    });
    
    return contentData;
}

function extractKeywords(text) {
    const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
    return text.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(word => word.length > 2 && !commonWords.includes(word))
        .slice(0, 10); // Limit to top 10 keywords
}

// Export for use in search functionality
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { siteSearchData, extractSiteContent, extractKeywords };
} else {
    window.siteSearchData = siteSearchData;
    window.extractSiteContent = extractSiteContent;
}