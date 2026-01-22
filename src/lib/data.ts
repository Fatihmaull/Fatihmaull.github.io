// Profile Data
export const profile = {
    name: 'Fatih Maulana',
    title: 'Quantum Researcher | Full-Stack Engineer | Security Analyst',
    email: 'fatihmaulanamail@gmail.com',
    phone: '+62 896-1846-5959',
    location: 'Malaysia (Exchange) / Indonesia',
    bio: `A Computer Science Researcher & Engineer currently on an exchange program in Malaysia (Summa Cum Laude track). 
Expertise in Quantum Computing, Quantitative Finance, and Cybersecurity. 
A blend of rigorous academic research (UIN/UUM) and practical "get-it-done" engineering.`,
    socials: {
        github: 'https://github.com/Fatihmaull',
        linkedin: 'https://linkedin.com/in/fatihmaulana',
        zenodo: 'https://zenodo.org/', // Add actual Zenodo link when available
        email: 'mailto:fatihmaulanamail@gmail.com',
    },
};

// Navigation Items
export const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Work', href: '/#work' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Contact', href: '/#contact' },
];

// Physics Hero Skill Tags
export const skillTags = [
    'Quantum',
    'Cybersec',
    'Flutter',
    'Python',
    'Finance',
    'Next.js',
    'TypeScript',
    'Research',
];

// Projects for Bento Grid
export const projects = [
    {
        id: 1,
        title: 'Quantum Higgs Boson Classifier',
        description: 'Benchmarking hybrid quantum-classical algorithms on ATLAS datasets.',
        tags: ['Research', 'Quantum Computing', 'Qiskit', 'Python', 'PCA'],
        size: 'large', // 2x2 hero card
        featured: true,
    },
    {
        id: 2,
        title: 'Rivalry Mobile App',
        description: 'Gamified personal challenges platform & mobile prototype.',
        tags: ['Mobile Dev', 'Flutter', 'Dart'],
        size: 'vertical', // 1x2 vertical
    },
    {
        id: 3,
        title: 'National Voting System (CSSMORA)',
        description: 'Salvaged national election system 24h before launch. Zero fraud.',
        tags: ['Cybersecurity', 'Google Apps Script', 'Token Validation'],
        size: 'square', // 1x1
    },
    {
        id: 4,
        title: 'Changlun Smart Agriculture',
        description: 'SaaS for IoT sensor data management in Malaysia.',
        tags: ['Full-Stack', 'IoT', 'Django', 'MySQL', 'REST API'],
        size: 'square', // 1x1
    },
    {
        id: 5,
        title: 'Bitcoin EMH Analysis',
        description: 'Statistical evaluation of technical indicators testing Market Efficiency (AUC ≈ 0.5).',
        tags: ['Quantitative Analysis', 'Python', 'Pandas', 'ROC/AUC'],
        size: 'wide', // 2x1 wide
    },
];

// Blog Post Metadata
export const blogPosts = [
    {
        slug: 'vqc-higgs-boson-detection',
        title: 'Implementing Variational Quantum Classifiers (VQC) for Higgs Boson Signal Detection',
        description: 'A deep dive into VQC implementation for particle physics classification using Qiskit.',
        date: '2026-01-15',
        tags: ['Quantum Computing', 'Research', 'Qiskit'],
        readTime: '12 min',
    },
    {
        slug: 'bitcoin-emh-quantitative-analysis',
        title: 'Why Technical Analysis Failed on Bitcoin: A Quantitative Test of the Efficient Market Hypothesis',
        description: 'Statistical analysis of Bitcoin market efficiency using ROC curves and AUC metrics.',
        date: '2026-01-10',
        tags: ['Quantitative Finance', 'Python', 'Research'],
        readTime: '10 min',
    },
    {
        slug: 'serverless-voting-system-case-study',
        title: 'Salvaging a National Voting System: From Crash to Serverless in 24 Hours',
        description: 'A case study on rapid system recovery and fraud prevention.',
        date: '2026-01-05',
        tags: ['Cybersecurity', 'Case Study', 'Google Apps Script'],
        readTime: '8 min',
    },
    {
        slug: 'diy-bci-esp32-tutorial',
        title: 'Building a Low-Cost Brain-Computer Interface (BCI) with ESP32 and C++',
        description: 'Tutorial on creating an affordable BCI system using embedded hardware.',
        date: '2025-12-28',
        tags: ['Hardware', 'ESP32', 'C++', 'Tutorial'],
        readTime: '15 min',
    },
    {
        slug: 'grc-automation-vanta-iso27001',
        title: 'Automating GRC Compliance: How I Achieved 100% Policy Adherence with Vanta',
        description: 'Practical guide to automating governance, risk, and compliance workflows.',
        date: '2025-12-20',
        tags: ['Cybersecurity', 'GRC', 'Automation'],
        readTime: '9 min',
    },
    {
        slug: 'dijkstra-algorithm-visualization-java',
        title: "Visualizing Dijkstra's Algorithm: Optimizing Graph Theory in Java",
        description: 'Interactive visualization of pathfinding algorithms with Java implementation.',
        date: '2025-12-15',
        tags: ['Algorithms', 'Java', 'Visualization'],
        readTime: '11 min',
    },
    {
        slug: 'secure-api-microservices',
        title: 'Secure API Architecture: Documenting Microservices for Fintech',
        description: 'Best practices for designing secure and well-documented APIs.',
        date: '2025-12-10',
        tags: ['API Design', 'Security', 'Fintech'],
        readTime: '7 min',
    },
    {
        slug: 'web-penetration-testing-guide',
        title: 'Web Penetration Testing Guide: Common Vulnerabilities in E-Commerce (XSS & IDOR)',
        description: 'Comprehensive guide to identifying and mitigating web vulnerabilities.',
        date: '2025-12-05',
        tags: ['Cybersecurity', 'Penetration Testing', 'Tutorial'],
        readTime: '14 min',
    },
    {
        slug: 'scalable-iot-django-mysql',
        title: 'Designing Scalable IoT Backends with Django and MySQL',
        description: 'Architecture patterns for handling high-volume sensor data.',
        date: '2025-11-28',
        tags: ['IoT', 'Django', 'Backend'],
        readTime: '10 min',
    },
    {
        slug: 'physics-to-finance-trading',
        title: 'From Physics to Finance: Applying Scientific Computing in High-Frequency Trading',
        description: 'How physics and computational methods translate to quantitative finance.',
        date: '2025-11-20',
        tags: ['Quantitative Finance', 'Physics', 'Research'],
        readTime: '13 min',
    },
];

// Work Experiences (ordered by most recent first)
export const experiences = [
    {
        id: 1,
        role: 'GRC Member',
        company: 'Wo-Men in Tech Security',
        location: 'Remote',
        period: 'Nov 2025 — Present',
        description: [
            'Assisted in audit preparation for ISO 27001 and SOC 2 by gathering and tagging technical evidence from IT teams.',
            'Monitored GRC automation platforms (Vanta, Drata) to identify and remediate non-compliant devices, achieving 100% policy adherence.',
            'Administered security awareness training with a 95%+ completion rate and maintained the central Risk Register.',
        ],
        tags: ['ISO 27001', 'SOC 2', 'Vanta', 'GRC'],
    },
    {
        id: 2,
        role: 'Security Consultant & Interim Lead',
        company: 'National Student Election System (CSSMoRA Indonesia)',
        location: 'Remote',
        period: 'Nov — Dec 2025',
        description: [
            'Salvaged a critical national voting project by stepping in as Lead Developer just 24 hours prior to launch.',
            'Pivoted from a failed complex web architecture to a serverless Google Apps Script solution to guarantee on-time delivery.',
            'Engineered a token-based validation mechanism to enforce strict unique-voter constraints, processing votes with zero fraud incidents.',
        ],
        tags: ['Google Apps Script', 'Cryptography', 'Security'],
    },
    {
        id: 3,
        role: 'Full-Stack Engineer (Academic Collaboration)',
        company: 'Changlun Smart Agriculture System',
        location: 'Malaysia',
        period: '2025',
        description: [
            'Architected a scalable SaaS platform for agricultural data management using Django (Python), focusing on backend logic and database schema optimization.',
            'Designed RESTful APIs to handle data ingestion from IoT sensors, ensuring data integrity and efficient query performance.',
            'Collaborated with research professors to translate agricultural domain requirements into technical system specifications.',
        ],
        tags: ['Django', 'Python', 'REST API', 'MySQL', 'IoT'],
    },
    {
        id: 4,
        role: 'Technical Writer & Analyst',
        company: 'Ibunda.id',
        location: 'Bandung, Indonesia',
        period: 'Jun 2025 — Oct 2025',
        description: [
            'Developed detailed system documentation and role-specific user manuals for three core products using GitLab and Notion, reducing onboarding time.',
            'Conducted technical presentations on user sentiment analysis utilizing SVM algorithms, translating complex AI concepts into actionable insights.',
            'Documented API contracts and service boundaries within a microservices architecture to ensure clarity in inter-service communication.',
            'Monitored code quality via SonarQube and analyzed application logs in Grafana to proactively identify bug patterns.',
        ],
        tags: ['Technical Writing', 'SVM', 'SonarQube', 'Grafana'],
    },
    {
        id: 5,
        role: 'Front-End Engineer',
        company: 'StudentxCEOs Bandung Chapter',
        location: 'Bandung, Indonesia',
        period: 'Jan 2025 — Jun 2025',
        description: [
            'Developed UI components for six web pages including login and registration using Next.js and TypeScript.',
            'Resolved server-side rendering issues in Next.js that caused page load delays, optimizing component rendering for better performance.',
            'Collaborated with UI/UX designers and backend teams to ensure seamless integration and consistent user experience.',
        ],
        tags: ['Next.js', 'TypeScript', 'React', 'SSR'],
    },
    {
        id: 6,
        role: 'Founder & Developer',
        company: 'Focustudio.online',
        location: 'Remote',
        period: 'Oct 2024 — Present',
        description: [
            'Founded a personal web agency, managing client projects from development to deployment.',
            'Implemented CI/CD pipelines using Cloudflare Tunnel and GitHub Actions to automate deployment workflows.',
            'Ensured site reliability and continuous delivery through rigorous automation practices.',
        ],
        tags: ['CI/CD', 'GitHub Actions', 'Cloudflare', 'Web Dev'],
    },
    {
        id: 7,
        role: 'Technical Support Specialist & Virtual Coordinator',
        company: 'Indonesian Ministry of Religious Affairs (w/ LPDP)',
        location: 'Jakarta, Indonesia',
        period: 'Apr 2024 — Apr 2025',
        description: [
            'Managed end-to-end virtual infrastructure for national-level PBSB scholarship selection, facilitating interviews for hundreds of candidates.',
            'Orchestrated complex Zoom logistics including breakout rooms and secure access controls for government officials.',
        ],
        tags: ['Virtual Events', 'Zoom', 'Infrastructure'],
    },
];
