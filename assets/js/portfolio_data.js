// Portfolio Data Configuration
const portfolioData = {
    // Personal Information
    personal: {
        name: "Mugdha Vairagade",
        title: "Technical Writer | AI Developer | Event Organizer", // | UX Designer
        email: "contact@vmugdha.in",
        linkedin: "https://www.linkedin.com/in/mugdhav",
        github: "https://github.com/mugdhav",
        twitter: "https://x.com/vmugdha",
        website: "https://www.vmugdha.com",
        // About Section
        about: {
            paragraph1: "I am a technical writer, AI developer, and event organizer with over 15 years of experience in the IT industry.",
            paragraph2: "I design content experiences that transform technical complexity into better user experience. These content experiences help companies increase their product/service adoption while keeping support costs low.",
            paragraph3: "I also develop AI applications that enhance daily productivity and optimize workflows.",
            paragraph4: "I am passionate about community building. As a DeepLearningAI Ambassador, I regularly organize tech events, workshops, and meetups to foster learning and collaboration in the tech community."
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
                    id: "tech-article-6",
                    icon: "🖥️",
                    svgIcon: '<svg class="portfolio-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 003 3h7.5a3 3 0 003-3m-13.5 0V9a2.25 2.25 0 012.25-2.25h9a2.25 2.25 0 012.25 2.25v5.25m-16.5 0h16.5"/></svg>',
                    title: "Deploying OpenClaw on AMD Developer Cloud",
                    description: "Step-by-step tutorial for running OpenClaw on an AMD MI300X GPU Droplet, backed by Qwen3-30B-A3B served via vLLM on ROCm. Covers the full setup — from SSH key to live chat — plus what failed with Gemma 4, Llama 3.2 Vision, and Anthropic Claude.",
                    buttonText: "Read Tutorial",
                    buttonLink: "blog/deploying-openclaw-amd-cloud.html",
                    category: "Tutorial",
                    year: 2026
                },
                {
                    id: "tech-article-0",
                    icon: "📊",
                    svgIcon: '<svg class="portfolio-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/></svg>',
                    title: "How I Added Performance Monitoring to My MCP Server with AppSignal",
                    description: "Complete implementation guide for adding Application Performance Monitoring (APM) to a Python MCP server using AppSignal and OpenTelemetry. Covers custom instrumentation, metrics tracking, error reporting, dashboard configuration, and actionable performance insights.",
                    buttonText: "Read Case Study",
                    buttonLink: "blog/appsignal-mcp-monitoring.html",
                    category: "Case Study",
                    year: 2025
                },
                {
                    id: "tech-article-1",
                    icon: "🎓",
                    svgIcon: '<svg class="portfolio-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>',
                    title: "Tutorial: Your Personal AI - Run Models Locally",
                    description: "Step-by-step tutorial for setting up and running open-source and small language models (SLMs) like Phi3 and Gemma3 locally on your system using Ollama. Includes installation guide, model setup instructions, and verification steps along with test prompts.",
                    buttonText: "View Tutorial",
                    buttonLink: "pages/OllamaLocalModelTutorial.html",
                    category: "Tutorial",
                    year: 2025
                },
                {
                    id: "tech-article-2",
                    icon: "📖",
                    svgIcon: '<svg class="portfolio-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>',
                    title: "Developer Documentation: SarvamAI Indian Language Translator",
                    description: "Implementation guide, Python code samples, and a Google Colab notebook for integrating SarvamAI's Indian language translation API into applications. Includes step-by-step setup instructions and interactive examples.",
                    buttonText: "View Documentation",
                    buttonLink: "https://github.com/mugdhav/SarvamAPICodeSample.git",
                    category: "Documentation",
                    year: 2025
                },
                {
                    id: "tech-article-3",
                    icon: "📚",
                    svgIcon: '<svg class="portfolio-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>',
                    title: "From MVP to Enterprise: Why Your AI Application Needs a Data Privacy Shield",
                    description: "This article discusses the importance of building Data Protection and Privacy layer for applications and lists the tools and APIs that can be used to build the layer.",
                    buttonText: "View Article",
                    buttonLink: "https://www.linkedin.com/pulse/from-mvp-enterprise-why-your-ai-application-needs-data-vairagade-xboue",
                    category: "Data Privacy",
                    year: 2025
                },
                {
                    id: "tech-article-4",
                    icon: "🔧",
                    svgIcon: '<svg class="portfolio-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/></svg>',
                    title: "Voice Agent Contact Centres Explained",
                    description: "An article describing voice agent contact centers, their architecture, and how they enhance customer service.",
                    buttonText: "View Article",
                    buttonLink: "/assets/pdfs/UnderstandingAIEnabledContactCenterWork.pdf",
                    category: "Voice Agents",
                    year: 2025
                },
                {
                    id: "tech-article-5",
                    icon: "⚠️",
                    svgIcon: '<svg class="portfolio-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>',
                    title: "No Error Messages!",
                    description: "This LinkedIn article emphasises on clear UX design that helps reduce user input errors.",
                    buttonText: "Read Article",
                    buttonLink: "https://www.linkedin.com/pulse/error-messages-mugdha-vairagade-8bkhf",
                    category: "UX Article",
                    year: 2025
                }
            ]
        },

        // AI Development Section
        "ai-development": {
            sectionTitle: "AI Development",
            items: [
                {
                    id: "ai-dev-0",
                    image: "/assets/images/portfolio/ip-guard-thumbnail.png",
                    title: "IP Guard - Claude Skill",
                    description: "A Claude Code skill that adds intellectual property compliance guardrails to AI-assisted code generation, with three-stage license checking and automatic provenance documentation.",
                    buttonText: "View on GitHub",
                    buttonLink: "https://github.com/mugdhav/claude-skill-ip-guard",
                    category: "Claude Skill",
                    year: 2026
                },
                {
                    id: "ai-dev-1",
                    image: "/assets/images/portfolio/os_model_finetune_thumbnail.png",
                    title: "Open Source Model Fine-Tuning",
                    description: "Jupyter notebooks for fine-tuning open source vision-language models (SigLIP) on domain-specific datasets using LoRA, with a three-stage pipeline: caption generation, training, and verification.",
                    buttonText: "View on GitHub",
                    buttonLink: "https://github.com/mugdhav/TrainOSModels",
                    category: "Machine Learning",
                    year: 2026
                },
                {
                    id: "ai-dev-2",
                    image: "/assets/images/portfolio/MediaScoutMCPServer.png",
                    title: "Media Search MCP Server",
                    description: "An MCP server that enables AI agents to search across media sources. Integrates with MCP-compatible clients to provide media discovery and retrieval capabilities.",
                    buttonText: "Try It Out",
                    buttonLink: "https://mugdhav-mediasearchmcp.hf.space",
                    category: "MCP Server",
                    year: 2025
                },
                {
                    id: "ai-dev-3",
                    image: "/assets/images/portfolio/mv-subtitle-generator-thumbnail.png",
                    title: "MV Subtitle Generator",
                    description: "Generate and tidy up SRT subtitles for MP3/MP4 files up to 25MB. AI detects subtitle errors, misheard words, and out-of-context phrases with confidence-based suggestions.",
                    buttonText: "Try It Out",
                    buttonLink: "https://mugdhav-transcript-reviewer.hf.space",
                    category: "AI Application",
                    year: 2025
                },
                {
                    id: "ai-dev-4",
                    image: "/assets/images/portfolio/security_auditor.png",
                    title: "Security Auditor",
                    description: "Security Auditor - Scan code and web deployments for vulnerabilities with 40+ security checks and NVD enrichment.",
                    buttonText: "Try It Out",
                    buttonLink: "https://mugdhav-security-auditor.hf.space",
                    category: "AI Security Tool",
                    year: 2026
                },
                {
                    id: "ai-dev-5",
                    image: "/assets/images/portfolio/UnicornFinderThumbnail2025-09-04010045.png",
                    title: "UnicornFinder - AI Analyst for Startups",
                    description: "Venture capitalists can use this tool to evaluate startups and get investment insights.",
                    buttonText: "Try It Out",
                    buttonLink: "https://ai.studio/apps/drive/1BQ4qO7IU4pwYhYBmQ9eTLy-tLE6v51OJ",
                    category: "AI Application",
                    year: 2025
                },
                {
                    id: "ai-dev-6",
                    image: "/assets/images/portfolio/img_to_dita_convert_thumbnail.jpg",
                    title: "Image To DITA Converter",
                    description: "An AI-enabled tool that uses LLMs with vision capabilities to identify workflows in user-provided images. It then generates DITA task topics for any of the identified workflows.",
                    buttonText: "View Demo",
                    buttonLink: "https://youtu.be/783w_xChhn0",
                    category: "Technical Writing Tool",
                    year: 2025
                },
                {
                    id: "ai-dev-7",
                    image: "/assets/images/portfolio/Thumbnail_Oldversion_Screenshot_2025-07-30_120954.png",
                    title: "Jira to Release Notes Draft Generator",
                    description: "An AI-enabled tool that generates feature release notes drafts based on feature description in Jira.",
                    buttonText: "View Demo",
                    buttonLink: "https://youtu.be/RWlTJ-76QoY",
                    category: "Technical Writing Tool",
                    year: 2024
                },
                {
                    id: "ai-dev-8",
                    image: "/assets/images/portfolio/Thumbnailn8nRunningLocally2025-08-08_233516.png",
                    title: "GitHub Repository Interview Workflow with n8n",
                    description: "An n8n workflow that helps technical writers \"interview\" GitHub repositories instead of interviewing human developers, getting relevant information directly from application code.",
                    buttonText: "View Demo",
                    buttonLink: "https://youtu.be/9P01zPxpbdY",
                    category: "Workflow Automation",
                    year: 2025
                },
                {
                    id: "ai-dev-9",
                    image: "/assets/images/portfolio/sarvam_indiantranslate.png",
                    title: "SarvamAI Indian Language Translator",
                    description: "A Python application leveraving SarvamAI API to translate text between Indian languages, including Hindi, Marathi, Tamil, Telugu, Bengali, and more.",
                    buttonText: "Try It Out",
                    buttonLink: "https://github.com/mugdhav/SarvamAPICodeSample",
                    category: "AI Translation App",
                    year: 2025
                },
                {
                    id: "ai-dev-10",
                    image: "/assets/images/portfolio/BharatGPTVideoThumbnail.png",
                    title: "Hindi Chat Agent with BharatGPT",
                    description: "A BharatGPT model-based chat agent that can interact in Hindi.",
                    buttonText: "View Demo",
                    buttonLink: "https://youtube.com/shorts/hQR19TK41DI",
                    category: "Chat Agent",
                    year: 2025
                },
                {
                    id: "ai-dev-11",
                    image: "/assets/images/portfolio/shetkari_mitra_thumbnail.png",
                    title: "Shetkari Mitra",
                    description: "A Marathi-first job portal for seasonal farm work, connecting local farmers and labourers via mobile with English translation support.",
                    buttonText: "Try It Out",
                    buttonLink: "https://sheti-mitra-app.lovable.app",
                    category: "Native Language App",
                    year: 2026
                },
                {
                    id: "ai-dev-12",
                    image: "/assets/images/portfolio/shebuilds-showcase-thumbnail.png",
                    title: "SheBuilds Showcase",
                    description: "A website built with Lovable to showcase apps and websites created by women participants at the SheBuilds buildathon, Pune edition, on International Women's Day 2026.",
                    buttonText: "Try It Out",
                    buttonLink: "https://shebuilt-iwd-gems.lovable.app",
                    category: "Community Showcase",
                    year: 2026
                },
                {
                    id: "ai-dev-13",
                    image: "/assets/images/portfolio/GameInMotion.png",
                    title: "React Pong",
                    description: "A simple Pong game against AI, built with React and Typescript.",
                    buttonText: "Try It Out",
                    buttonLink: "https://ai.studio/apps/drive/19H4i0hWXQe_OPV-v18GzQnzoobRhYvvr",
                    category: "Game Development",
                    year: 2025
                }
            ]
        }

        // UX Design Section
        /* "ux-design": {
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
        } */
    },

    // Navigation Items
    navigation: [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Portfolio", href: "#portfolio" },
        { text: "Blog", href: "blog/blog.html" },
        { text: "Tech Events", href: "pages/TechEvents.html" },
        { text: "Podcasts", href: "pages/Podcasts.html" },
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
        /* {
            text: "UX Design",
            href: "#ux-design"
        }, */
        {
            text: "Tech Events",
            href: "pages/TechEvents.html"
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
    //     learnMoreLink: 'https://linkedin.com/...',  // PRIMARY LINK - social/announcement post (coming-soon or past)
    //     registerLink: 'https://luma.com/...',       // Coming-soon only - ticketing link (Luma, Eventbrite, etc.)
    //     showcaseLink: 'https://...',                // Past events only - showcase URL
    //     blogLink: 'blog.html#post-id',            // Secondary: Link to blog post (optional)
    //     podcastLink: 'Podcasts.html',             // Secondary: Link to podcast episode (optional)
    //     videoLink: 'https://youtube.com/...',     // Secondary: Link to YouTube video (optional)
    //     searchTerms: 'searchable keywords...'     // Space-separated keywords for search
    // }
    events: [
        // Nightbuild #1 - Women Build Together
        {
            id: 'nightbuild-1-women-build-together',
            title: 'Nightbuild #1 — Women Build Together',
            startDate: '2026-04-10T21:30:00+05:30',
            endDate: '2026-04-10T23:30:00+05:30',
            date: 'April 10, 2026, 9:30 PM – 11:30 PM IST',
            location: 'Virtual Event',
            organization: 'Women Build Together',
            description: 'A late-night virtual meetup for women builders — the inaugural Nightbuild. Small-group show-and-tell covering real apps built with Lovable, then diving deep into Claude Code, Zod-enforced input validation, RLS policies, Zero-Trust architecture, Hugging Face deployments, and DevOps principles drawn from production BFSI systems. Topics ranged from debugging authentication flows and preventing app misuse, to getting vibe-coded apps out of platform ecosystems and into production infrastructure.',
            icon: 'fas fa-moon',
            learnMoreLink: 'https://www.linkedin.com/posts/mugdhav_nightbuilds-womenbuildtogether-womenintech-activity-7448635128727265280-RkZF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAD-ScYBeGEIIwA1VXFPoj__sofFCBEqfL8',
            searchTerms: 'Nightbuild Women Build Together women in tech April 2026 virtual Lovable Claude Code Zod RLS Zero-Trust Hugging Face DevOps BFSI app security vibe coding'
        },
        // Nightbuild #2 - Small Models (Coming Soon)
        {
            id: 'nightbuild-2-small-models',
            title: 'Nightbuild #2 — Small Models',
            status: 'coming-soon',
            statusLabel: 'Coming Soon',
            startDate: '2026-04-24T21:30:00+05:30',
            endDate: '2026-04-24T23:30:00+05:30',
            date: 'April 24, 2026, 9:30 PM – 11:30 PM IST',
            location: 'Virtual Event',
            organization: 'vmugdha.in',
            description: 'A deep-dive into practical, real-world small-model workflows. Featuring live demos by a senior expert, plus a walkthrough of OpenClaw for personal AI use cases. Limited seats — approval required.',
            icon: 'fas fa-moon',
            learnMoreLink: 'https://www.linkedin.com/posts/vmugdhain_nightbuild2-small-models-luma-activity-7451965221662941184-pBA3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAD-ScYBeGEIIwA1VXFPoj__sofFCBEqfL8',
            registerLink: 'https://luma.com/1optcog2',
            searchTerms: 'Nightbuild small models personal AI OpenClaw live demo real-world workflows privacy virtual'
        },
        // Build and Share - AI Study Group Pune (Coming Soon)
        {
            id: 'build-and-share-pune-april-2026',
            title: 'Build and Share',
            status: 'coming-soon',
            statusLabel: 'Coming Soon',
            startDate: '2026-04-26T10:00:00+05:30',
            endDate: '2026-04-26T13:00:00+05:30',
            date: 'April 26, 2026, 10:00 AM – 1:00 PM IST',
            location: 'Aeka\'s Coffee, Baner, Pune',
            organization: 'AI Study Group',
            description: 'An informal in-person build session — learn new AI tools, create agents, apps, chatbots, or whatever interests you, then share what you built in a 1-min show-and-tell. Includes an Open Source project showcase.',
            icon: 'fas fa-hammer',
            registerLink: 'https://luma.com/z8cx6fs9',
            searchTerms: 'Build and Share AI Study Group Pune Baner agents apps chatbots open source collaboration April 2026'
        },
        // SheBuilds IWD 2026 - Pune
        {
            id: 'shebuilds-iwd-pune-2026',
            title: 'SheBuilds on Lovable — International Women\'s Day, Pune',
            startDate: '2026-03-08T00:00:00+05:30',
            endDate: '2026-03-08T23:59:59+05:30',
            date: 'March 8, 2026',
            location: 'Pune, India',
            organization: 'SheBuilds by Lovable',
            description: 'A free 3-hour in-person hackathon in Pune celebrating International Women\'s Day. Women of all skill levels — from complete beginners to experienced coders — come together to build and publish real AI-powered applications using <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer">Lovable</a>\'s natural language platform. Part of a global <a href="https://shebuilds.lovable.app" target="_blank" rel="noopener noreferrer">SheBuilds</a> event across multiple cities.',
            icon: 'fas fa-hammer',
            learnMoreLink: 'https://www.linkedin.com/posts/mugdhav_shebuilds-pune-shebuilds-activity-7436363192324231168-RhDt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAD-ScYBeGEIIwA1VXFPoj__sofFCBEqfL8',
            showcaseLink: 'https://shebuilt-iwd-gems.lovable.app',
            searchTerms: 'SheBuilds Lovable International Women\'s Day IWD 2026 Pune India hackathon women AI apps vibe coding in-person March 2026 #SheBuildsIWD2026'
        },
        // Featured October 2025 Pie & AI Event
        {
            id: 'preparing-ia-for-ai-content',
            title: 'Preparing Information Architecture for AI‑Delivered Content',
            startDate: '2025-12-22T19:30:00+05:30',
            endDate: '2025-12-22T20:15:00+05:30',
            date: 'December 22, 2025, 7:30 PM - 8:15 PM IST',
            location: 'Virtual Event',
            organization: 'Technical Writers and Information Architects Community',
            description: 'Join Mugdha Vairagade and Rahel Anne Bailie for a dynamic conversation on preparing information architecture for AI‑delivered content. Explore the challenges, key considerations, foundational building blocks, and best practices that shape effective content delivery in AI‑driven environments. Q&A session included with practical takeaways to align your content strategy with the evolving landscape of AI.',
            icon: 'fas fa-sitemap',
            learnMoreLink: 'https://www.linkedin.com/posts/mugdhav_ai-information-architect-activity-7407401500680990720-_qdK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAD-ScYBeGEIIwA1VXFPoj__sofFCBEqfL8',
            podcastLink: 'Podcasts.html#conversation-rahel-bailie',
            searchTerms: 'Preparing Information Architecture AI Delivered Content December 2025 Rahel Anne Bailie technical writers information architects AI-driven content content strategy virtual event IA best practices content delivery'
        },
        {
            id: 'pie-ai-pune-run-models-locally',
            title: 'Pie & AI: Pune - Your Personal AI - Run Models Locally',
            startDate: '2025-10-31T15:00:00+05:30',
            endDate: '2025-10-31T17:00:00+05:30',
            date: 'October 31, 2025, 3:00 PM - 5:00 PM IST',
            location: 'Virtual Event',
            organization: 'Pie & AI Community by DeepLearning.AI',
            description: 'Explore open-source and small language models (SLMs) that can be run locally, are available for free, and can generate content as competently as the commercially available models.',
            icon: 'fas fa-brain',
            learnMoreLink: 'https://www.linkedin.com/events/pie-aipune-yourpersonalai-runmo7389386357921538048/',
            searchTerms: 'Pie AI Pune Personal AI Run Models Locally October 2025 DeepLearning.AI SLMs small language models open-source local models free AI virtual zoom'
        },
        // Featured September 2025 Pie & AI Events
        {
            id: 'pie-ai-pune-content-generation',
            title: 'Pie & AI: Pune - Content Generation with Open Source Models',
            startDate: '2025-09-13T11:00:00+05:30',
            endDate: '2025-09-13T12:00:00+05:30',
            date: 'September 13, 2025, 11:00 AM - 12:00 PM IST',
            location: 'Cafe Buddys Espresso Baner, Pune',
            organization: 'Pie & AI Community by DeepLearning.AI',
            description: 'A hands-on session exploring content generation using Open Source models, focusing on generating text, images, and code with discussion of their use cases. Bring your laptops for collaborative exploration of Open Source LLMs.',
            icon: 'fas fa-brain',
            learnMoreLink: 'https://www.linkedin.com/pulse/generating-content-open-source-models-mugdha-vairagade-xujuf',
            searchTerms: 'Pie AI Pune Content Generation Open Source Models DeepLearning.AI text images code LLMs collaborative exploration'
        },
        {
            id: 'pie-ai-pune-sept-2025',
            title: 'Pie & AI: Pune - Exploring Indian AI (September 2025)',
            startDate: '2025-09-07T11:00:00+05:30',
            endDate: '2025-09-07T12:30:00+05:30',
            date: 'September 7, 2025',
            location: 'Aeka\'s Coffee Baner, Pune',
            organization: 'Pie & AI Community by DeepLearning.AI',
            description: 'Hands-on session exploring Indian LLMs, APIs, and platforms with discussion of their uses. Part of the ongoing Pie & AI meetup series focusing on Indian AI technologies.',
            icon: 'fas fa-brain',
            learnMoreLink: 'https://www.linkedin.com/pulse/experiment-indian-ai-mugdha-vairagade-cqvef',
            searchTerms: 'Pie AI Pune Exploring Indian AI September 2025 DeepLearning.AI LLMs APIs platforms Indian AI technologies meetup'
        },
        {
            id: 'pie-ai-pune-extracting-structuring',
            title: 'Pie & AI: Pune - Extracting and Structuring Information from Text',
            startDate: '2025-09-28T11:00:00+05:30',
            endDate: '2025-09-28T13:00:00+05:30',
            date: 'September 28, 2025, 11:00 AM - 1:00 PM IST',
            location: 'Pune, India',
            organization: 'Pie & AI Community by DeepLearning.AI',
            description: 'Join us for an interactive session on extracting and structuring information from unstructured text using AI and machine learning techniques. Learn practical approaches to text mining, information extraction, and data structuring.',
            icon: 'fas fa-brain',
            learnMoreLink: 'https://www.linkedin.com/pulse/snapshots-from-pie-ai-pune-extracting-structuring-mugdha-vairagade-uw7yf',
            searchTerms: 'Pie AI Pune Extracting Structuring Information Text DeepLearning.AI text mining information extraction data structuring machine learning AI techniques'
        },
        {
            id: 'invent4customers-2024-sap',
            title: 'Invent4Customers 2024 - AI Innovation Quizzes and Hackathon',
            startDate: '2024-08-15T09:00:00+05:30',
            endDate: '2024-11-15T18:00:00+05:30',
            date: 'August - November 2024',
            location: 'SAP Labs India, Pune',
            organization: 'SAP Labs India',
            description: 'A comprehensive 3-month innovation program featuring AI brain teasers, quizzes, 24-hour hackathon, and focused build sessions. Collaborated with Asian Paints, Henkel, Google, and SAP Customer Innovation Services to unite talents, drive innovation, and create exceptional customer experiences.',
            icon: 'fas fa-lightbulb',
            learnMoreLink: 'https://www.linkedin.com/posts/mugdhav_invent4customers-ai-lifeatsap-activity-7221871949134589952-PCmj',
            searchTerms: 'Invent4Customers SAP Labs India Pune AI innovation hackathon quizzes Asian Paints Henkel Google customer innovation brain teasers volunteer'
        },
        {
            id: 'native-language-interfaces-ai-apps',
            title: 'Native Language Interfaces for AI Apps',
            status: 'coming-soon',
            statusLabel: 'Coming Soon',
            date: 'Coming Soon',
            location: 'Virtual Event',
            organization: 'Pie & AI Community by DeepLearning.AI',
            audience: 'AI Developers',
            description: 'Integrate native language speech to text and text-to-speech interfaces and documentation extraction in your AI apps.',
            icon: 'fas fa-code',
            learnMoreLink: 'https://www.linkedin.com/in/mugdhav/',
            searchTerms: 'Native Language Interfaces AI Apps workshop tech writing virtual event technical writers community AI tools web development'
        },
        {
            id: 'gen-ai-art-competition-sap',
            title: 'Generative AI Art Competition at D-Shop Pune',
            startDate: '2023-12-01T09:00:00+05:30',
            endDate: '2023-12-01T18:00:00+05:30',
            date: 'October - November 2023',
            location: 'D-Shop Pune, India',
            organization: 'SAP Labs India',
            description: 'Organized a Generative AI Art competition for Pune colleagues to celebrate the launch of a new d-shop location. Participants created original art (images, audio, video) using generative AI, exploring themes from colorful Holi to Diwali on Mars. The competition included learning about preventing copyright violations and ethical AI content generation.',
            icon: 'fas fa-palette',
            learnMoreLink: 'https://www.linkedin.com/posts/mugdhav_generativeai-art-pune-activity-7136282664839356416-Il2_',
            searchTerms: 'Generative AI Art Competition D-Shop Pune SAP Labs India AI art image generation audio video Holi Diwali copyright violations ethical AI content generation festive celebrations creative exploration'
        },
        {
            id: 'scott-abel-podcast-release',
            title: 'Conversation with Scott Abel - Documentation Success Metrics in the AI Age',
            startDate: '2025-12-11T10:00:00+05:30',
            endDate: '2025-12-11T10:00:00+05:30',
            date: 'December 11, 2025',
            location: 'Online Podcast',
            organization: 'Independent Publication',
            description: 'An engaging podcast conversation with Scott Abel, host of The Content Wrangler and a leading voice in the technical communication community. The conversation centered on documentation success metrics, while also covering harnessing AI for documentation, showcasing documentation as a key enabler for product/service success, and innovative tools and workflows that support technical writers.',
            icon: 'fas fa-podcast',
            learnMoreLink: 'https://www.linkedin.com/posts/mugdhav_podcasts-mugdha-vairagade-activity-7404560180212105216-LdsB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAD-ScYBeGEIIwA1VXFPoj__sofFCBEqfL8',
            podcastLink: 'Podcasts.html',
            searchTerms: 'Scott Abel podcast Content Wrangler technical communication documentation success metrics AI documentation tools workflows technical writers December 2025 holiday present'
        }

        // Other Events (Commented Out)
        /*
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
        */
    ],

    // Podcasts Data
    podcasts: [
        {
            id: 'conversation-rahel-bailie',
            title: 'Conversation with Rahel Anne Bailie - Preparing Information Architecture for AI‑Delivered Content',
            date: 'December 2025',
            host: 'Mugdha Vairagade',
            description: `A dynamic conversation with Rahel Anne Bailie exploring the challenges, key considerations, building blocks, and best practices that shape effective content delivery in AI‑driven environments. This session was recorded during a virtual event for technical writers and information architects.

<div class="podcast-resources">
<h4>Rahel's Recommendation - People to Follow:</h4>
<ul>
<li><a href="https://idratherbewriting.com/" target="_blank" rel="noopener noreferrer">Tom Johnson</a></li>
<li><a href="https://medium.com/@nc_mike" target="_blank" rel="noopener noreferrer">Michael Iantosca</a></li>
<li><a href="https://passo.uno" target="_blank" rel="noopener noreferrer">Fabrizio Ferri-Benedetti</a></li>
<li><a href="https://www.isophist.com/" target="_blank" rel="noopener noreferrer">Lance Cummings</a></li>
<li><a href="https://kanesimms.substack.com/" target="_blank" rel="noopener noreferrer">Kane Simms</a></li>
</ul>
</div>`,
            banner: '../assets/podcasts/rahebailie_iaprep/LumaEventBanner_moresquare.png',
            audioFile: '../assets/podcasts/rahebailie_iaprep/FinalCut_AudioConversationRahelBailie.mp3',
            transcriptFile: '../assets/podcasts/rahebailie_iaprep/FinalCutAudioPodcastwithSRTRahelBailie.srt',
            slidesPath: '../assets/podcasts/rahebailie_iaprep/slides/The_New_Content_Mandate/',
            slideCount: 14,
            duration: '60 min',
            topics: ['Information Architecture', 'AI-Delivered Content', 'Content Strategy', 'Technical Writing']
        },
        {
            id: 'conversation-scott-abel',
            title: 'Conversation with Scott Abel - Documentation Success Metrics in the AI Age',
            date: 'December 2025',
            host: 'Mugdha Vairagade',
            description: `An insightful conversation with Scott Abel, globally recognized content strategist and thought leader in technical communication. We discuss the evolution of technical writing, content strategy, documentation success metrics, and the future of documentation in the AI era.

<div class="podcast-resources">
<h4>Resources Mentioned:</h4>
<ul>
<li><a href="https://www.billtalksai.com/p/bill-talks-ai-training-courses" target="_blank" rel="noopener noreferrer">Bill Raymond's AI Training Courses</a></li>
<li><a href="https://www.promptitude.io/" target="_blank" rel="noopener noreferrer">Promptitude</a> - Free upgrade from Promptitude Free Plan to SaaS Plan with promo code TCW2</li>
<li><a href="https://www.emerse.ai/" target="_blank" rel="noopener noreferrer">Emerse.AI</a> - Immersive learning experience</li>
<li><a href="https://www.make.com/" target="_blank" rel="noopener noreferrer">Make.com</a> - No-code AI automation</li>
</ul>
</div>`,
            banner: '../assets/podcasts/scottabel_docsuccmetrics/FinalPodcastBanner.png',
            audioFile: '../assets/podcasts/scottabel_docsuccmetrics/CompletePodcast_ConversationWithScottAbel.m4a',
            transcriptFile: '../assets/podcasts/scottabel_docsuccmetrics/CompletePodcast_ConversationWithScottAbel.srt',
            slidesPath: '../assets/podcasts/scottabel_docsuccmetrics/slides/ScottAbelPodcastDocSuccessMetrics/',
            slideCount: 14,
            duration: '45 min',
            topics: ['Technical Writing', 'Documentation Success Metrics', 'AI in Documentation', 'Future of Tech Comm']
        }
    ],

    // Blog Posts Data
    blogs: [
        {
            id: 'openclaw-amd-cloud',
            title: 'How I Deployed OpenClaw in the Cloud',
            excerpt: 'I wanted to experiment with OpenClaw but didn\'t want to install it locally. When I received AMD Developer Cloud credits with ROCm GPU access, I deployed it there — and used Claude Code to debug the tricky parts.',
            date: '2026-04-20',
            category: 'AI Development',
            readTime: '8 min read',
            slug: 'openclaw-amd-cloud',
            featured: true
        },
        {
            id: 'token-tax-indic-languages',
            title: 'The Token Tax on Indic Language Prompts',
            excerpt: 'A comparative analysis of tokenization overhead across OpenAI, Anthropic, Google Gemini, and Sarvam AI — using Hindi and Marathi prompts with English as the baseline. Frontier Western AI labs impose a 30–156% token overhead on Devanagari-script prompts, while purpose-built Indic AI (Sarvam) achieves a token credit of up to 22%.',
            date: '2026-04-12',
            category: 'AI Development',
            readTime: '8 min read',
            slug: 'token-tax-report',
            featured: true
        },
        {
            id: 'litellm-transitive-dependencies-vulnerability',
            title: 'LiteLLM: Transitive Dependencies as Attack Surface',
            excerpt: 'This post examines the transitive dependencies in Python packages like LiteLLM that can quietly introduce vulnerabilities into your project. Also mentioned here is how the Claude ip-guard skill and the Security Auditor tool can catch these risks before they reach production.',
            date: '2026-03-26',
            category: 'Security',
            readTime: '2 min read',
            slug: 'litellm-transitive-dependencies-vulnerability',
            url: 'https://www.linkedin.com/posts/mugdhav_python-litellm-vulnerability-activity-7442517252337410048-3O87',
            featured: true
        },
        {
            id: 'final-appsignal-impl-blog',
            title: 'How I Added Performance Monitoring to My MCP Server with AppSignal',
            excerpt: 'An important step in building an enterprise-grade app is ensuring it can scale with reasonable performance to meet the demands of large user bases. This post walks through integrating AppSignal APM with a Python MCP server to track performance, errors, and resource usage.',
            date: '2025-02-15',
            category: 'AI Development',
            readTime: '10 min read',
            slug: 'appsignal-mcp-monitoring',
            featured: true
        },
        {
            id: 'find-your-perfect-ai-agent',
            title: 'Find Your Perfect AI Agent: A Guide for Non-Tech Professionals',
            excerpt: 'This easy‑to‑follow guide helps professionals from non‑technical backgrounds understand what AI agents are, what those agents can do for them, and how to find the right agents for their needs.',
            date: '2025-12-28',
            category: 'AI Development',
            readTime: '3 min read',
            slug: 'find-your-perfect-ai-agent',
            url: 'https://www.linkedin.com/pulse/find-your-perfect-ai-agent-mugdha-vairagade-tt3xf',
            featured: true
        },
        {
            id: 'preparing-ia-for-ai-delivered-content',
            title: 'Preparing Information Architecture for AI-Delivered Content',
            excerpt: 'A comprehensive exploration of how information architects and technical writers can prepare their content ecosystems for AI-powered delivery. Discusses challenges like fragmented content, missing metadata, and the shift from creating content for humans to creating it for AI systems that help humans find what they need.',
            date: '2025-12-26',
            category: 'Technical Writing',
            readTime: '2 min read',
            slug: 'preparing-ia-for-ai-delivered-content',
            url: 'https://www.linkedin.com/pulse/preparing-information-architecture-aidelivered-mugdha-vairagade-deo5f',
            featured: true
        },
        {
            id: 'pie-ai-pune-extracting-structuring',
            title: 'Snapshots from Pie & AI Pune: Extracting and Structuring Information',
            excerpt: 'A recap of a Pie & AI event in Pune focused on AI-powered information extraction, bringing together AI practitioners to explore technologies for extracting and structuring information from documents and images. Learn about APIs and frameworks like LandingAI ADE, Google Document AI, and DocETL; along with practical applications.',
            date: '2025-10-06',
            category: 'AI Development',
            readTime: '3 min read',
            slug: 'pie-ai-pune-extracting-structuring',
            url: 'https://www.linkedin.com/pulse/snapshots-from-pie-ai-pune-extracting-structuring-mugdha-vairagade-uw7yf',
            featured: true
        },
        {
            id: 'generating-content-open-source',
            title: 'Generating Content with Open Source Models',
            excerpt: 'Hosted another Pie & AI event focusing on content generation with Open Source models. Participants ranging from AI novices to experts explored lightweight models like phi3:3.8b and gemma3:4b using Ollama for local deployment. Discover how Open Source models offer data protection and cost savings.',
            date: '2025-09-16',
            category: 'AI Development',
            readTime: '2 min read',
            slug: 'generating-content-open-source',
            url: 'https://www.linkedin.com/pulse/generating-content-open-source-models-mugdha-vairagade-xujuf',
            featured: true
        },
        {
            id: 'experiment-indian-ai',
            title: 'An Experiment with Indian AI',
            excerpt: 'Sharing insights from the DeepLearning.AI community event Pie & AI: Pune - Exploring Indian AI. Participants engaged in hands-on experiments with Indian AI platforms like Sarvam AI and CoRover.AI BharatGPT, exploring their capabilities in native languages. Learn about the potential and limitations of Indian AI technologies.',
            date: '2025-09-08',
            category: 'AI Development',
            readTime: '3 min read',
            slug: 'experiment-indian-ai',
            url: 'https://www.linkedin.com/pulse/experiment-indian-ai-mugdha-vairagade-cqvef',
            featured: true
        }
    ]
};
