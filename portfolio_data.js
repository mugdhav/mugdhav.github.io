// Portfolio Data Configuration
const portfolioData = {
    // Personal Information
    personal: {
        name: "Mugdha Vairagade",
        title: "Technical Writer | AI Developer | UX Designer | Event Organizer",
        email: "vmugdha.web@gmail.com",
        linkedin: "https://www.linkedin.com/in/mugdhav",
        github: "https://github.com/mugdhav",
        twitter: "https://x.com/vmugdha",
        website: "https://www.vmugdha.com",
        // About Section
        about: {
            paragraph1: "I'm a passionate professional who bridges the gap between technical complexity and user experience. With expertise in technical writing, UX design, and AI development, I create innovative solutions that are both powerful and user-friendly.",
            paragraph2: "My unique combination of skills allows me to document complex systems clearly, design intuitive interfaces, and develop cutting-edge AI applications that solve real-world problems."
        }
    },

    // Skills Section
    skills: [
        {
            icon: "🖋️",
            title: "Technical Writing"
        },
                {
            icon: "🔮",
            title: "AI Development"
        },
        {
            icon: "🎨",
            title: "UX Design"
        },
        {
            icon: "🎓",
            title: "Events"
        }
    ],

    // Portfolio Items organized by category
    portfolio: {
        // Technical Articles Section
        "technical-articles": {
            sectionTitle: "Technical Articles",
            items: [
                {
                    icon: "📚",
                    title: "From MVP to Enterprise: Why Your AI Application Needs a Data Privacy Shield",
                    description: "This article discusses the importance of building Data Protection and Privacy layer for applications and lists the tools and APIs that can be used to build the layer.",
                    buttonText: "View Article",
                    buttonLink: "https://www.linkedin.com/pulse/from-mvp-enterprise-why-your-ai-application-needs-data-vairagade-xboue"
                },
                {
                    icon: "🔧",
                    title: "Voice Agent Contact Centres Explained",
                    description: "An article describing voice agent contact centers, their architecture, and how they enhance customer service.",
                    buttonText: "View Article",
                    buttonLink: "LocalContent/UnderstandingAIEnabledContactCenterWork.pdf"
                },
                {
                    icon: "📖",
                    title: "No Error Messages!",
                    description: "This LinkedIn article emphasises on clear UX design that helps reduce user input errors.",
                    buttonText: "Read Article",
                    buttonLink: "https://www.linkedin.com/pulse/error-messages-mugdha-vairagade-8bkhf"
                }                
            ]
        },
        
        // AI Development Section
        "ai-development": {
            sectionTitle: "AI Development",
            items: [
                {
                    image: "LocalContent/Images/UnicornFinderThumbnail2025-09-04010045.png",
                    title: "UnicornFinder - AI Analyst for Startups",
                    description: "Venture capitalists can use this tool to evaluate startups and get investment insights.",
                    buttonText: "Try It Out",
                    buttonLink: "https://ai.studio/apps/drive/1BQ4qO7IU4pwYhYBmQ9eTLy-tLE6v51OJ"
                },
                {
                    image: "./LocalContent/Images/img_to_dita_convert_thumbnail.jpg",
                    title: "Image To DITA Converter",
                    description: "An AI-enabled tool that uses LLMs with vision capabilities to identify workflows in user-provided images. It then generates DITA task topics for any of the identified workflows.",
                    buttonText: "View Demo",
                    buttonLink: "https://youtu.be/783w_xChhn0"
                },
                {
                    image: "./LocalContent/Images/Thumbnail_Oldversion_Screenshot_2025-07-30_120954.png",
                    title: "Jira to Release Notes Draft Generator",
                    description: "An AI-enabled tool that generates feature release notes drafts based on feature description in Jira.",
                    buttonText: "View Demo",
                    buttonLink: "https://youtu.be/RWlTJ-76QoY"
                },
                {
                    image: "./LocalContent/Images/Thumbnailn8nRunningLocally2025-08-08_233516.png",
                    title: "GitHub Repository Interview Workflow with n8n",
                    description: "An n8n workflow that helps technical writers \"interview\" GitHub repositories instead of interviewing human developers. Technical writers can get the information about applications directly from the their codebase in GitHub repositories.",
                    buttonText: "View Demo",
                    buttonLink: "https://youtu.be/9P01zPxpbdY"
                },                
                {
                    image: "./LocalContent/Images/GameInMotion.png",
                    title: "React Pong",
                    description: "A simple Pong game against AI, built with React and Typescript.",
                    buttonText: "Try It Out",
                    buttonLink: "https://ai.studio/apps/drive/19H4i0hWXQe_OPV-v18GzQnzoobRhYvvr"
                },
                {
                    image: "LocalContent/Images/UnicornFinderThumbnail2025-09-04010045.png",
                    title: "SarvamAI Indian Language Translator",
                    description: "A Python application leveraving SarvamAI API to translate text between Indian languages, including Hindi, Marathi, Tamil, Telugu, Bengali, and more.",
                    buttonText: "Try It Out",
                    buttonLink: "https://github.com/mugdhav/SarvamAPICodeSample"
                },
                {
                    image: "LocalContent/Images/UnicornFinderThumbnail2025-09-04010045.png",
                    title: "Hindi Chat Agent with BharatGPT",
                    description: "A BharatGPT model-based chat agent that can interact in Hindi.",
                    buttonText: "Try It Out",
                    buttonLink: "chatbot.html"
                }
            ]
        },

        // UX Design Section
        "ux-design": {
            sectionTitle: "UX Design",
            items: [
                {
                    icon: "📱",
                    title: "Smart Watch Interface",
                    description: "Design of a smart watch interface that displays calendar alerts.",
                    buttonText: "View Design",
                    buttonLink: ""
                },
                {
                    icon: "💻",
                    title: "Help Portal Redesign",
                    description: "Card-based help portal, redesigned for better navigation and searchability.",
                    buttonText: "View Design",
                    buttonLink: ""
                },
                {
                    icon: "🎯",
                    title: "E-commerce Platform",
                    description: "User-centered design for online marketplace with focus on conversion optimization.",
                    buttonText: "View Portfolio",
                    buttonLink: ""
                }                
            ]
        }
    },

    // Navigation Items
    navigation: [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Portfolio", href: "#portfolio" },
        { text: "Chatbot", href: "chatbot.html" },
        { text: "Blog", href: "blog/blog.html" },
        { text: "Tech Events", href: "TechEvents.html" },
        { text: "Contact", href: "#contact" }
    ],

    // CTA Buttons for Hero Section
    ctaButtons: [
        {
            text: "Technical Articles",
            href: "#technical-articles"
        },        
        {
            text: "AI Development",
            href: "#ai-development"
        },
        {
            text: "UX Design",
            href: "#ux-design"
        },
        {
            text: "Tech Events",
            href: "TechEvents.html"
        }
    ],

    // Events Data
    // To add a new event, add an object with the following structure:
    // {
    //     id: 'unique-event-id',                    // Unique identifier
    //     title: 'Event Title',                     // Display title
    //     status: 'coming-soon|now|past',           // Event status (determines order and filter)
    //     statusLabel: 'Coming Soon|Happening Now!|Past', // Display label for status badge
    //     date: 'Event Date or "Coming Soon"',      // Date string to display
    //     location: 'Event Location',               // Where the event takes place
    //     organization: 'Organizing Body',          // Who organizes/hosts the event
    //     description: 'Event description...',      // Brief description of the event
    //     icon: 'fas fa-icon-name',                 // FontAwesome icon class
    //     link: 'https://link-to-event',            // URL for "Learn More" button
    //     searchTerms: 'searchable keywords...'     // Space-separated keywords for search
    // }
    events: [
        {
            id: 'ai-technical-writing-workshop',
            title: 'AI-Powered Technical Writing Workshop',
            status: 'coming-soon',
            statusLabel: 'Coming Soon',
            date: 'Coming Soon',
            location: 'Virtual Event',
            organization: 'Tech Writers Community',
            description: 'Learn how to leverage AI tools for technical documentation, API docs, and user guides. Hands-on workshop with CrewAI and other AI writing tools.',
            icon: 'fas fa-pen-nib',
            link: 'https://www.linkedin.com/in/mugdhav',
            searchTerms: 'AI-Powered Technical Writing Workshop Virtual Event Tech Writers Community AI tools technical documentation API docs user guides CrewAI writing tools'
        },
        {
            id: 'ux-design-ai-applications',
            title: 'UX Design for AI Applications',
            status: 'coming-soon',
            statusLabel: 'Coming Soon',
            date: 'Coming Soon',
            location: 'Pune, India',
            organization: 'Pune UX Community',
            description: 'Design principles and best practices for creating user-friendly AI interfaces. Interactive workshop on AI UX patterns and user research.',
            icon: 'fas fa-palette',
            link: 'https://www.linkedin.com/in/mugdhav',
            searchTerms: 'UX Design AI Applications Pune UX Community design principles user-friendly interfaces AI UX patterns user research'
        },
        {
            id: 'multi-agent-systems',
            title: 'Building Multi-Agent AI Systems',
            status: 'coming-soon',
            statusLabel: 'Coming Soon',
            date: 'Coming Soon',
            location: 'Virtual Event',
            organization: 'AI Developers Community',
            description: 'Deep dive into CrewAI and multi-agent systems. Learn to build collaborative AI agents that work together to solve complex problems.',
            icon: 'fas fa-robot',
            link: 'https://www.linkedin.com/in/mugdhav',
            searchTerms: 'Building Multi-Agent AI Systems Virtual Event AI Developers Community CrewAI multi-agent systems collaborative agents'
        },
        {
            id: 'tech-community-volunteer',
            title: 'Tech Community Volunteer Activities',
            status: 'now',
            statusLabel: 'Happening Now!',
            date: 'Ongoing',
            location: 'Various Locations',
            organization: 'Multiple Communities',
            description: 'Regular volunteering activities including mentoring emerging developers, organizing study groups, and supporting local tech communities.',
            icon: 'fas fa-hands-helping',
            link: 'https://www.linkedin.com/in/mugdhav',
            searchTerms: 'Tech Community Volunteer Activities Various Locations Multiple Communities mentoring developers study groups tech communities'
        },
        {
            id: 'open-source-contribution',
            title: 'Open Source Contribution Drive',
            status: 'now',
            statusLabel: 'Happening Now!',
            date: 'Ongoing',
            location: 'Global (Remote)',
            organization: 'Tech Open Source Community',
            description: 'Active participation in open source projects, contributing to documentation, code reviews, and helping maintain community-driven initiatives.',
            icon: 'fab fa-github',
            link: 'https://www.linkedin.com/in/mugdhav',
            searchTerms: 'Open Source Contribution Drive Global Remote Tech Open Source Community GitHub contributions documentation code reviews'
        },
        {
            id: 'pie-ai-pune',
            title: 'Pie & AI: Pune - Exploring Indian AI',
            status: 'past',
            statusLabel: 'Past',
            date: 'January 15, 2025',
            location: 'Pune, India',
            organization: 'Pie & AI Pune Community',
            description: 'Hands-on exploration of Indian AI technologies including Sarvam AI and BharatGPT. Building Hindi chat agents and exploring native language AI capabilities.',
            icon: 'fas fa-brain',
            link: 'https://www.linkedin.com/events/7368907094529339393/',
            searchTerms: 'Pie AI Pune Exploring Indian AI Pune India Pie AI Pune Community Sarvam AI BharatGPT Hindi chat agents native language AI'
        }
    ]
};
