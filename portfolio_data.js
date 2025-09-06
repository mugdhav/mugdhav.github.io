// Portfolio Data Configuration
const portfolioData = {
    // Personal Information
    personal: {
        name: "Mugdha Vairagade",
        title: "Technical Writer | AI Developer | UX Designer",
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
                    title: "UnicornFinder - AI Analyst for Startups",
                    description: "Venture capitalists can use this tool to evaluate startups and get investment insights.",
                    buttonText: "Try It Out",
                    buttonLink: "https://ai.studio/apps/drive/1BQ4qO7IU4pwYhYBmQ9eTLy-tLE6v51OJ"
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
        }
    ]
};
