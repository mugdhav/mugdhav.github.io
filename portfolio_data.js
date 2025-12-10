// Portfolio Data Configuration
const portfolioData = {
    // Personal Information
    personal: {
        name: "Mugdha Vairagade",
        title: "Technical Writer | AI Developer | Event Organizer", // | UX Designer
        email: "vmugdha.web@gmail.com",
        linkedin: "https://www.linkedin.com/in/mugdhav",
        github: "https://github.com/mugdhav",
        twitter: "https://x.com/vmugdha",
        website: "https://www.vmugdha.com",
        // About Section
        about: {
            paragraph1: "I am a technical writer, AI developer, UX designer, and event organizer with over 15 years of experience in the IT industry.",
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
                    icon: "🎓",
                    title: "Tutorial: Your Personal AI - Run Models Locally",
                    description: "Step-by-step tutorial for setting up and running open-source and small language models (SLMs) like Phi3 and Gemma3 locally on your system using Ollama. Includes installation guide, model setup instructions, and verification steps along with test prompts.",
                    buttonText: "View Tutorial",
                    buttonLink: "PreEventInstructions.html"
                },
                {
                    icon: "📖",
                    title: "Developer Documentation: SarvamAI Indian Language Translator",
                    description: "Implementation guide, Python code samples, and a Google Colab notebook for integrating SarvamAI's Indian language translation API into applications. Includes step-by-step setup instructions and interactive examples.",
                    buttonText: "View Documentation",
                    buttonLink: "https://github.com/mugdhav/SarvamAPICodeSample.git"
                },
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
                    description: "An n8n workflow that helps technical writers \"interview\" GitHub repositories instead of interviewing human developers, getting relevant information directly from application code.",
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
                    image: "./LocalContent/Images/sarvam_indiantranslate.png",
                    title: "SarvamAI Indian Language Translator",
                    description: "A Python application leveraving SarvamAI API to translate text between Indian languages, including Hindi, Marathi, Tamil, Telugu, Bengali, and more.",
                    buttonText: "Try It Out",
                    buttonLink: "https://github.com/mugdhav/SarvamAPICodeSample"
                },
                {
                    image: "LocalContent/Images/BharatGPTVideoThumbnail.png",
                    title: "Hindi Chat Agent with BharatGPT",
                    description: "A BharatGPT model-based chat agent that can interact in Hindi.",
                    buttonText: "View Demo",
                    buttonLink: "https://youtube.com/shorts/hQR19TK41DI"
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
        { text: "Tech Events", href: "TechEvents.html" },
        { text: "Podcasts", href: "Podcasts.html" },
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
        // Featured October 2025 Pie & AI Event
        {
            id: 'pie-ai-pune-run-models-locally',
            title: 'Pie & AI: Pune - Your Personal AI - Run Models Locally',
            startDate: '2025-10-31T15:00:00+05:30',
            endDate: '2025-10-31T17:00:00+05:30',
            date: 'October 31, 2025, 3:00 PM - 5:00 PM IST',
            location: 'Virtual Event',
            organization: 'Pie & AI by DeepLearning.AI',
            description: 'Explore open-source and small language models (SLMs) that can be run locally, are available for free, and can generate content as competently as the commercially available models.',
            icon: 'fas fa-brain',
            link: 'https://www.linkedin.com/events/pie-aipune-yourpersonalai-runmo7389386357921538048/',
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
            organization: 'Pie & AI by DeepLearning.AI',
            description: 'A hands-on session exploring content generation using Open Source models, focusing on generating text, images, and code with discussion of their use cases. Bring your laptops for collaborative exploration of Open Source LLMs.',
            icon: 'fas fa-brain',
            link: 'https://www.linkedin.com/pulse/generating-content-open-source-models-mugdha-vairagade-xujuf',
            searchTerms: 'Pie AI Pune Content Generation Open Source Models DeepLearning.AI text images code LLMs collaborative exploration'
        },
        {
            id: 'pie-ai-pune-sept-2025',
            title: 'Pie & AI: Pune - Exploring Indian AI (September 2025)',
            startDate: '2025-09-07T11:00:00+05:30',
            endDate: '2025-09-07T12:30:00+05:30',
            date: 'September 7, 2025',
            location: 'Aeka\'s Coffee Baner, Pune',
            organization: 'Pie & AI by DeepLearning.AI',
            description: 'Hands-on session exploring Indian LLMs, APIs, and platforms with discussion of their uses. Part of the ongoing Pie & AI meetup series focusing on Indian AI technologies.',
            icon: 'fas fa-brain',
            link: 'https://www.linkedin.com/pulse/experiment-indian-ai-mugdha-vairagade-cqvef',
            searchTerms: 'Pie AI Pune Exploring Indian AI September 2025 DeepLearning.AI LLMs APIs platforms Indian AI technologies meetup'
        },
        {
            id: 'pie-ai-pune-extracting-structuring',
            title: 'Pie & AI: Pune - Extracting and Structuring Information from Text',
            startDate: '2025-09-28T11:00:00+05:30',
            endDate: '2025-09-28T13:00:00+05:30',
            date: 'September 28, 2025, 11:00 AM - 1:00 PM IST',
            location: 'Pune, India',
            organization: 'Pie & AI by DeepLearning.AI',
            description: 'Join us for an interactive session on extracting and structuring information from unstructured text using AI and machine learning techniques. Learn practical approaches to text mining, information extraction, and data structuring.',
            icon: 'fas fa-brain',
            link: 'https://www.linkedin.com/pulse/snapshots-from-pie-ai-pune-extracting-structuring-mugdha-vairagade-uw7yf',
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
            link: 'https://www.linkedin.com/posts/mugdhav_invent4customers-ai-lifeatsap-activity-7221871949134589952-PCmj',
            searchTerms: 'Invent4Customers SAP Labs India Pune AI innovation hackathon quizzes Asian Paints Henkel Google customer innovation brain teasers volunteer'
        },
        {
            id: 'ai-low-code-static-website-workshop-tech-writing',
            title: 'Building Portfolio Websites with AI',
            status: 'coming-soon',
            statusLabel: 'Coming Soon',
            date: 'Coming Soon',
            location: 'Virtual Event',
            organization: 'Tech Writers Community',
            description: 'Learn how to leverage AI tools for to create a simple portfolio website (almost) for free.',
            icon: 'fas fa-code',
            link: 'https://www.linkedin.com/in/mugdhav/',
            searchTerms: 'Building Portfolio Websites AI low-code static website workshop tech writing virtual event technical writers community AI tools web development HTML CSS JavaScript GitHub Pages free hosting'
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
            link: 'https://www.linkedin.com/posts/mugdhav_generativeai-art-pune-activity-7136282664839356416-Il2_',
            searchTerms: 'Generative AI Art Competition D-Shop Pune SAP Labs India AI art image generation audio video Holi Diwali copyright violations ethical AI content generation festive celebrations creative exploration'
        },
        {
            id: 'dummy',
            title: 'dummy',
            startDate: '2022-03-15T10:00:00+05:30',
            endDate: '2022-03-15T12:00:00+05:30',
            date: 'March 15, 2022',
            location: 'dummy',
            organization: 'dummy',
            description: 'dummy',
            icon: 'fas fa-star',
            link: 'https://www.linkedin.com/in/mugdhav',
            searchTerms: 'dummy'
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
            id: 'conversation-scott-abel',
            title: 'Conversation with Scott Abel - The Content Wrangler',
            date: 'December 2024',
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
            banner: 'LocalContent/podcast/FinalPodcastBanner.png',
            audioFile: 'LocalContent/podcast/CompletePodcast_ConversationWithScottAbel.m4a',
            transcriptFile: 'LocalContent/podcast/CompletePodcast_ConversationWithScottAbel.srt',
            duration: 'TBD',
            topics: ['Technical Writing', 'Content Strategy', 'AI in Documentation', 'Future of Tech Comm']
        }
    ]
};
