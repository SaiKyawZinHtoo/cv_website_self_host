import type { Translations } from "./types";

export const en: Translations = {
  ui: {
    availableForOpportunities: "Available for opportunities",
    downloadCv: "Download / Print CV",
    profile: "Profile",
    profileSubtitle: "Professional summary",
    education: "Education",
    educationSubtitle: "Academic background",
    skills: "Key Skills & Characteristics",
    skillsSubtitle: "Soft skills & technical expertise",
    languages: "Languages",
    languagesSubtitle: "Communication proficiency",
    experience: "Experience",
    experienceSubtitle: "Professional journey",
    aiTools: "AI-Assisted Development",
    aiToolsSubtitle: "Tools, workflows & continuous growth",
    aiJourney: "Growth Journey",
    aiToolkit: "AI & Design Toolkit",
    techStack: "Tech Stack",
    technologies: "technologies",
    verified: "Verified",
    viewDocument: "View",
    issued: "Issued",
    allRightsReserved: "All rights reserved.",
    open: "Open",
    close: "Close",
    closeViewer: "Close certificate viewer",
    projectGallery: "Project Gallery",
    viewImage: "View image",
    previousImage: "Previous image",
    nextImage: "Next image",
    publishedApps: "Published Apps",
    viewOnPlayStore: "Google Play",
    viewGitHub: "View GitHub Profile",
    githubRepos: "repositories",
    lightTheme: "Light theme",
    darkTheme: "Dark theme",
    switchToEnglish: "English",
    switchToMyanmar: "မြန်မာ",
    techCategories: {
      mobile: "Mobile",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      devops: "DevOps",
      ai: "AI Tools",
      design: "Design",
    },
  },
  cv: {
    name: "Sai Kyaw Zin Htoo",
    title: "Senior Flutter Developer",
    contact: {
      address: "No.(37/A), Than Street, 7th Ward, Hlaing Township.",
      phone: "+95 9426457162",
      email: "saikyawzinhtoo.work@gmail.com",
      github: "https://github.com/SaiKyawZinHtoo",
      githubUsername: "SaiKyawZinHtoo",
    },
    profile: [
      "An experienced IT professional with a Higher National Diploma (HND) in Computing from GUSTO College, with strong foundations in programming, networking, and cybersecurity. Specialized in Flutter and Dart with a proven track record of building enterprise-ready cross-platform mobile applications. Proficient in HTML, CSS, JavaScript, Java, and C++, with recent hands-on experience in TypeScript, phpMyAdmin, XAMPP, Docker, React, and Next.js.",
      "Recognized for innovation, refining solutions for better outcomes, and guiding teams — comfortable working independently or collaboratively. Currently advancing toward a Full Stack Developer role, delivering integrated solutions across mobile, web, and server. Experienced in containerizing and running production backends on VPS with Docker. Continuously growing through AI-assisted development with GitHub Copilot, Cursor AI, Figma, and Google Stitch to build higher-quality products faster.",
    ],
    education: [
      {
        period: "2016 – 2017",
        title: "Grade (10), Education — Matriculation Examination",
        institution: "Zin Yaw Private School",
        verified: true,
        awardBody: "Myanmar Board of Examinations — Ministry of Education",
        issuedDate: "18 July 2017",
        documents: [
          {
            label: "Certificate",
            url: "/certificates/grade10-certificate.png",
          },
        ],
      },
      {
        period: "2018 – 2019",
        title: "First Year, Dagon University (Specialization in Physics)",
        institution: "Dagon University",
      },
      {
        period: "2019 – 2020",
        title: "Second Year, Dagon University (Specialization in Physics)",
        institution: "Dagon University",
      },
      {
        period: "In Present",
        title: "Third Year, Dagon University (Specialization in Physics)",
        institution: "Dagon University",
      },
      {
        period: "December, 2022",
        title: "Foundation Program",
        institution: "GUSTO College",
      },
      {
        period: "November, 2024",
        title: "Higher National Diploma in Computing (General)",
        institution: "GUSTO College",
        verified: true,
        grade: "Distinction",
        awardBody: "Pearson BTEC Level 5 — Regulated by Ofqual",
        issuedDate: "17 May 2025",
        documents: [
          { label: "Certificate", url: "/certificates/hnd-certificate.pdf" },
          { label: "Transcript", url: "/certificates/hnd-transcript.pdf" },
        ],
      },
    ],
    skills: [
      "Critical thinking",
      "Handling pressure",
      "Leadership",
      "Problem solving",
      "Time Management",
      "Continuous Learning (Prompt Engineering)",
      "AI-Assisted Development (Copilot, Cursor, Figma, Stitch)",
      "Docker & VPS Deployment (containerized production)",
      "Communication & IT Lecturing",
      "Team Player (Cursor AI, Copilot, Z.com VPS, Docker)",
    ],
    languages: [
      { name: "Burmese", level: "Native", proficiency: 100 },
      { name: "Shan", level: "Native", proficiency: 100 },
      { name: "Chinese", level: "Basic", proficiency: 35 },
      { name: "English", level: "B1", proficiency: 65 },
    ],
    experience: [
      {
        period: "July, 2024 – December, 2024",
        role: "Internship Project",
        company: "POS System Development",
        highlights: [
          "Developed frontend using Flutter and Bloc for state management in a Point of Sale (POS) system.",
          "Set up the three main stages of the Bloc architecture for scalable state management.",
          "Connected MongoDB backend to manage data with the frontend.",
          "Designed and developed an educational application alongside the internship project.",
        ],
      },
      {
        period: "Second Year (First Semester)",
        role: "School Project",
        company: "To-Do List Application",
        highlights: [
          "Developed during early Flutter learning as a college school project in the first semester of the second year.",
          "Built login and signup functionalities with Flutter for user authentication.",
          "Implemented CRUD operations for task management on the home page.",
          "Integrated Firebase Realtime Database to store, retrieve, and sync task data in real time.",
          "Used Firebase to securely store user credentials and application data.",
          "Enabled image upload and storage on the home page using Firebase alongside task records.",
        ],
      },
      {
        period: "Second Year (First Semester)",
        role: "Project Leader",
        company: "IoT Water Monitoring System",
        highlights: [
          "Served as Project Leader for an IoT-based water monitoring system, overseeing hardware installation, development, and final release.",
          "Invested dedicated effort across planning, coding, and presentation to successfully deliver a fully working solution.",
          "Won the Popularity Award at the college IoT project show — recognized as the most liked and most engaging project by the audience.",
          "Selected to compete at the American Center, where the project earned an additional award.",
        ],
        images: [
          {
            url: "/projects/iot-water-monitoring/01-trophy-popularity-award.png",
            caption: "Popularity Award Trophy — GUSTO University Projects for Popularity HND-49, 2024",
          },
          {
            url: "/projects/iot-water-monitoring/02-presentation-exhibition.png",
            caption: "Presenting the IoT project at the college exhibition",
          },
          {
            url: "/projects/iot-water-monitoring/03-presenter-gusto.png",
            caption: "Project demonstration at GUSTO University IoT project show",
          },
          {
            url: "/projects/iot-water-monitoring/04-prototype-breadboard-lcd.png",
            caption: "Early prototype with breadboard, LCD display, and relay module",
          },
          {
            url: "/projects/iot-water-monitoring/05-prototype-esp8266.png",
            caption: "ESP8266 microcontroller with ultrasonic sensor and status LEDs",
          },
          {
            url: "/projects/iot-water-monitoring/06-prototype-assembly.png",
            caption: "Hardware assembly with water pump and level sensors",
          },
          {
            url: "/projects/iot-water-monitoring/07-prototype-water-tanks.png",
            caption: "Multi-tank water monitoring prototype on test bench",
          },
          {
            url: "/projects/iot-water-monitoring/08-prototype-enclosure.png",
            caption: "Custom enclosure build with ESP32 and water circulation system",
          },
          {
            url: "/projects/iot-water-monitoring/09-prototype-full-system.png",
            caption: "Full IoT system with ultrasonic sensors and flow control",
          },
          {
            url: "/projects/iot-water-monitoring/10-prototype-wiring-relay.png",
            caption: "Relay module wiring and solenoid valve integration",
          },
          {
            url: "/projects/iot-water-monitoring/11-prototype-sensors.png",
            caption: "Complete prototype with LCD display and multi-container setup",
          },
        ],
      },
      {
        period: "October, 2023 – December, 2023",
        role: "Trainee",
        company: "MSquareFDC — Full-Stack Development Training",
        highlights: [
          "Comprehensive training in React, JavaScript, and Next.js.",
          "Handled database schema design using PostgreSQL.",
          "Developed a foodie POS system with QR code functionality.",
          "Learned deployment process using Vercel.",
        ],
      },
      {
        period: "July 1st, 2024 – July 15th, 2025",
        role: "Junior Flutter Developer",
        company: "Fortune International Ltd. — Enterprise Projects",
        highlights: [
          "MTF License: Developed an NRC-like membership form system with high accuracy and usability, published on Google Play for Myanmar Taekwondo Federation members.",
          "FortuneBB: Took full ownership of the app — implemented push notifications for Android and iOS including foreground and background delivery; iOS notification integration was especially challenging.",
          "FortuneBB: Built end-to-end with light & dark themes, bilingual (English/Myanmar) support, and premium UI/UX for internet service management.",
          "Inquiry Project: Designed and built a private Flutter Web inquiry management system for internal team use only.",
          "MLIS (Team Project): Contributed to the Myanmar Livestock Identification System — a collaborative team project for viewing and editing livestock records, published on Google Play.",
          "Started adopting GitHub Copilot in Agent mode during enterprise Flutter work — learned AI-assisted coding workflows for faster delivery and cleaner solutions.",
        ],
        apps: [
          {
            name: "MTF License",
            url: "https://play.google.com/store/apps/details?id=com.mtf.license",
            description: "Myanmar Taekwondo Federation membership",
          },
          {
            name: "FortuneBB",
            url: "https://play.google.com/store/apps/details?id=com.fortune.fortunebb",
            description: "Internet service management — 10K+ downloads",
          },
          {
            name: "MLIS",
            url: "https://play.google.com/store/apps/details?id=com.fortune.mlis",
            description: "Myanmar Livestock Identification System",
          },
        ],
      },
      {
        period: "Jan 15th, 2025 – Present (Remote)",
        role: "Full-Stack Developer",
        company: "Online POS & SMT Projects — Solo Developer",
        highlights: [
          "Sole developer taking full ownership end-to-end from project start through ongoing maintenance — still actively building today.",
          "Online POS: Built cross-platform mobile frontend with Flutter (iOS & Android) and JavaScript/Node.js backend APIs.",
          "Initially hosted on XAMPP, later migrated backend services to Docker — containerized Node.js APIs for improved scalability, reliability, and easier deployment.",
          "Run production workloads on VPS using Docker, managing containerized services for both Online POS and SMT projects.",
          "Configured Docker-based deployment on Z.com VPS for stable internal production use, including updates and ongoing maintenance.",
          "Integrated Google Drive backup for secure data backup and recovery.",
          "Implemented thermal printer support for 2-inch, 3-inch, and 4-inch receipt formats.",
          "SMT Project: Extended the same full-stack approach — Flutter mobile frontend with PHP database backend, containerized with Docker and running on VPS.",
          "SMT is currently deployed on VPS via Docker for internal use; not yet released to the public.",
          "Used Cursor AI extensively as solo developer for both Flutter frontend and Node.js/PHP backend — became proficient in AI-assisted full-stack delivery.",
          "Refined premium UI/UX with Cursor AI across mobile screens, flows, and component structure.",
          "Designed and iterated interfaces in Figma; used Google Stitch for AI-assisted UI exploration and rapid prototyping.",
          "Integrated AI tooling on MacBook into daily development — significantly accelerating productivity, learning, and project quality.",
        ],
      },
      {
        period: "Dec 1st, 2025 – Present",
        role: "Mid-Level Flutter Developer",
        company: "Thuriya Ace Technology — Myanma Insurance",
        highlights: [
          "Contributed as a mid-level Flutter developer on cross-platform mobile, web, and backend systems within a collaborative team.",
          "MI Agent Portal (Team Project): Helped build the Myanma Insurance agent app — real-time commission tracking, CRM, calendar, renewals, claims status, and product catalog. Published on Google Play.",
          "MI Customer Portal (Team Project): Helped build the Myanma Insurance customer app — policy dashboard, bill reminders, online insurance purchase, payment history, and news updates. Published on Google Play.",
          "Maintained Android, iOS, and Web applications with focus on performance, stability, and user experience.",
          "Integrated and supported secure payment gateway flows with encrypted transaction processing.",
          "Implemented E-Receipt, PDF generation, web-to-mobile deep linking, and optimized download flows.",
          "Assisted with API testing using Postman and collaborated closely with backend teams.",
        ],
        apps: [
          {
            name: "MI Agent Portal",
            url: "https://play.google.com/store/apps/details?id=com.mi_agent_portal",
            description: "Myanma Insurance — Agent commission & CRM",
          },
          {
            name: "MI Customer Portal",
            url: "https://play.google.com/store/apps/details?id=com.mi_customer_portal",
            description: "Myanma Insurance — Customer policy portal",
          },
        ],
      },
      {
        period: "April, 2024 – April, 2025",
        role: "IT Lecturer & Technical Mentor",
        company: "University Studies",
        highlights: [
          "Conducted comprehensive IT lectures and academic guidance during university studies.",
          "Mentored peers in hands-on technical sessions, improving coding proficiency.",
          "Assisted with software that could not be installed on school systems by providing alternative setup approaches and workarounds from a different angle.",
          "Helped classmates configure development tools and environments outside school restrictions so learning could continue smoothly.",
          "Demonstrated leadership and communication skills breaking down complex technical subjects into easy-to-understand lessons.",
        ],
      },
    ],
    aiWorkflow: {
      summary:
        "From Junior Flutter Developer onward, I have actively integrated AI into my daily workflow — starting with GitHub Copilot Agent mode, scaling up with Cursor AI for full-stack solo projects, and expanding into Figma and Google Stitch for design. AI has become a core multiplier for how I build, learn, and ship better products faster.",
      milestones: [
        {
          period: "Jul 2024 — Junior Flutter Developer",
          title: "GitHub Copilot Agent Mode",
          description:
            "Began using GitHub Copilot in Agent mode while working on enterprise Flutter apps at Fortune. Learned how to pair AI with real production codebases for faster implementation, refactoring, and problem solving.",
          tools: ["GitHub Copilot"],
        },
        {
          period: "Jan 2025 — Solo POS & SMT Projects",
          title: "Cursor AI for Full-Stack Development",
          description:
            "As sole developer on Online POS and SMT, used Cursor AI for both frontend (Flutter) and backend (Node.js / PHP). Grew from experimentation to confident, production-grade AI-assisted full-stack delivery.",
          tools: ["Cursor AI", "GitHub Copilot"],
        },
        {
          period: "2025 — MacBook Workflow",
          title: "Deeper AI Integration",
          description:
            "Moved AI tooling onto my MacBook and made it part of everyday development — debugging, architecture decisions, API design, and faster iteration across multiple active projects.",
          tools: ["Cursor AI", "GitHub Copilot"],
        },
        {
          period: "2025 — Present",
          title: "UI/UX & Design with AI",
          description:
            "Used Cursor AI to polish premium UI/UX in code, Figma for structured design work, and Google Stitch for AI-assisted interface exploration — closing the gap between design intent and shipped product.",
          tools: ["Cursor AI", "Figma", "Google Stitch"],
        },
      ],
      tools: [
        {
          name: "GitHub Copilot",
          description:
            "Agent mode, inline suggestions, and workflow acceleration — especially during Flutter enterprise development.",
        },
        {
          name: "Cursor AI",
          description:
            "Primary AI IDE for solo full-stack work, UI/UX refinement, prompt engineering, and end-to-end project delivery.",
        },
        {
          name: "Figma",
          description:
            "UI design, layout iteration, and visual structure before and alongside implementation.",
        },
        {
          name: "Google Stitch",
          description:
            "AI-assisted UI generation and design exploration to speed up early screen concepts.",
        },
      ],
    },
  },
};
