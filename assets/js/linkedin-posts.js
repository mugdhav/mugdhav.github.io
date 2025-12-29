// LinkedIn Posts Data
// Update this file manually with your latest posts
const linkedinPosts = [
    {
        id: "post-1",
        date: "2024-12-15",
        content: "The intersection of technical writing and AI development is fascinating. Here are 5 key principles I've learned while documenting AI systems: Always explain the 'why' behind AI decisions, use visual diagrams for complex workflows, provide real-world examples...",
        thumbnail: "📝",
        link: "https://www.linkedin.com/posts/mugdhav_ai-documentation-techwriting-activity-xxxxx",
        engagement: {
            likes: 45,
            comments: 12,
            shares: 8
        }
    },
    {
        id: "post-2", 
        date: "2024-12-10",
        content: "Just completed a comprehensive UX audit for a React application. Amazing how small design changes can improve user engagement by 40%! Key insights: Clear navigation, consistent design patterns, and intuitive user flows make all the difference.",
        thumbnail: "🎨",
        link: "https://www.linkedin.com/posts/mugdhav_ux-react-design-activity-xxxxx",
        engagement: {
            likes: 67,
            comments: 18,
            shares: 15
        }
    },
    {
        id: "post-3",
        date: "2024-12-05", 
        content: "Working on a new CrewAI project that combines multi-agent systems with UX design principles. The future of AI is collaborative, and user experience should be at the center of every AI solution we build.",
        thumbnail: "🤖",
        link: "https://www.linkedin.com/posts/mugdhav_crewai-multiagent-ux-activity-xxxxx",
        engagement: {
            likes: 89,
            comments: 23,
            shares: 19
        }
    }
];

// Function to format date
function formatPostDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} week${Math.ceil(diffDays / 7) > 1 ? 's' : ''} ago`;
    return `${Math.ceil(diffDays / 30)} month${Math.ceil(diffDays / 30) > 1 ? 's' : ''} ago`;
}

// Function to truncate content
function truncateContent(content, maxLength = 120) {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
}

// Function to render LinkedIn posts
function renderLinkedInPosts() {
    const container = document.getElementById('linkedinPosts');
    
    if (!container) {
        console.log('LinkedIn posts container not found');
        return;
    }
    
    if (linkedinPosts.length === 0) {
        container.innerHTML = `
            <div class="no-posts">
                <p>No recent posts available. Check back soon!</p>
            </div>
        `;
        return;
    }
    
    const postsHTML = linkedinPosts.map(post => `
        <div class="linkedin-post-item" data-post-id="${post.id}">
            <div class="linkedin-post-header">
                <strong>Mugdha Vairagade</strong>
                <span class="linkedin-post-date">${formatPostDate(post.date)}</span>
            </div>
            <div class="linkedin-post-content">
                ${truncateContent(post.content)}
            </div>
            <div class="linkedin-post-thumbnail" onclick="window.open('${post.link}', '_blank')">
                ${post.thumbnail}
            </div>
            <div class="linkedin-post-actions">
                <a href="${post.link}" target="_blank" class="linkedin-post-link">
                    Read full post <i class="fas fa-external-link-alt"></i>
                </a>
                <div class="linkedin-engagement">
                    <span>👍 ${post.engagement.likes}</span>
                    <span>💬 ${post.engagement.comments}</span>
                    <span>🔄 ${post.engagement.shares}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = postsHTML;
}

// Auto-load posts when the page loads
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Wait a bit for the main portfolio to render
        setTimeout(renderLinkedInPosts, 500);
    });
}