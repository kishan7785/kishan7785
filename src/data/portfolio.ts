export const profile = {
  name: "Kishan Dharajiya",
  greeting: "Hello, I am Kishan Dharajiya.",
  roles: ["Mobile Developer", "React Native Developer", "Cross-Platform Engineer"],
  email: "kishan.1234.dharajiya@gmail.com",
  resumeUrl: "./Kishan-Dharajiya-Mobile-Developer-Resume.pdf",
  photo: "./img/bitmoji-avatar.png",
  linkedin: "https://linkedin.com/in/kishan-dharajiya-a00305211",
  npm: "https://www.npmjs.com/package/@dev-kd/react-native-animated-search-bar?activeTab=readme",
  intro:
    "I am a React Native Developer with strong experience designing, building, and maintaining mobile applications for iOS and Android. I focus on high-performance apps, clean architecture, API integration, and polished user experiences.",
  about: [
    "I specialize in cross-platform mobile development using React Native, delivering scalable apps with smooth performance on both iOS and Android.",
    "My work spans UI/UX implementation, REST API integration, state management, third-party SDKs, and App Store / Play Store publishing.",
    "I enjoy collaborating with product and design teams to turn complex requirements into reliable, user-friendly mobile products.",
  ],
  services: [
    {
      title: "Cross-Platform Mobile App Development",
      description:
        "High-performance React Native apps that run smoothly on iOS and Android while reducing development time and cost.",
    },
    {
      title: "UI/UX Focused Development",
      description:
        "Modern, responsive, and interactive mobile interfaces that improve usability and engagement.",
    },
    {
      title: "API & Backend Integration",
      description:
        "RESTful APIs, third-party services, and backend integrations for complete mobile solutions.",
    },
    {
      title: "App Store Publishing",
      description:
        "End-to-end publishing support including build signing, store setup, and submission.",
    },
  ],
  stats: [
    { label: "Happy Clients", value: "17" },
    { label: "Working Hours", value: "5,280" },
    { label: "Contributions", value: "5" },
    { label: "Coffee Consumed", value: "15" },
  ],
};

export const techStack = [
  {
    title: "Mobile Development",
    icons: [
      { href: "https://reactnative.dev/", src: "https://skillicons.dev/icons?i=react", alt: "React Native" },
      { href: "https://developer.android.com/studio/", src: "https://skillicons.dev/icons?i=androidstudio", alt: "Android Studio" },
      { href: "https://developer.apple.com/xcode/", src: "https://skillicons.dev/icons?i=apple", alt: "Apple / iOS" },
    ],
  },
  {
    title: "Languages",
    icons: [
      { href: "https://www.typescriptlang.org/", src: "https://skillicons.dev/icons?i=typescript", alt: "TypeScript" },
      { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", src: "https://skillicons.dev/icons?i=javascript", alt: "JavaScript" },
    ],
  },
  {
    title: "Frontend & State",
    icons: [
      { href: "https://react.dev/", src: "https://skillicons.dev/icons?i=react", alt: "React" },
      { href: "https://redux.js.org/", src: "https://skillicons.dev/icons?i=redux", alt: "Redux" },
      { href: "https://tailwindcss.com/", src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind CSS" },
    ],
  },
  {
    title: "Tools & Platforms",
    icons: [
      { href: "https://git-scm.com/", src: "https://skillicons.dev/icons?i=git", alt: "Git" },
      { href: "https://github.com/", src: "https://skillicons.dev/icons?i=github", alt: "GitHub" },
      { href: "https://code.visualstudio.com/", src: "https://skillicons.dev/icons?i=vscode", alt: "VS Code" },
      { href: "https://www.figma.com/", src: "https://skillicons.dev/icons?i=figma", alt: "Figma" },
      { href: "https://www.npmjs.com/", src: "https://skillicons.dev/icons?i=npm", alt: "npm" },
    ],
  },
];

export const experience = [
  {
    period: "2024 - 2026",
    company: "Clientracker",
    role: "React Native Developer",
    lines: [
      "Built a feature-rich client data tracking, reporting, and scheduling app with performance-focused UI and backend integration.",
    ],
    link: "https://play.google.com/store/apps/details?id=com.clientracker.app&pli=1",
  },
  {
    period: "2024 - 2025",
    company: "MyMints",
    role: "React Native Developer",
    lines: [
      "Developed a vouchers, reports, and rewards app with a seamless cross-platform experience on iOS and Android.",
    ],
    link: "https://play.google.com/store/apps/details?id=com.mymints.app",
  },
  {
    period: "2023",
    company: "Toe Daily Mobility (BigToe)",
    role: "React Native Developer",
    lines: [
      "Launched a wellness app with video streaming, reminders, and subscription management using React Native.",
    ],
    link: "https://play.google.com/store/apps/details?id=com.bigtoesnc.app&hl=en_IN",
  },
  {
    period: "2022",
    company: "Airbrush Events (TeamHub)",
    role: "React Native Developer",
    lines: [
      "Built and shipped a mobile app for event workflows with native modules and third-party integrations.",
    ],
    link: "https://play.google.com/store/apps/details?id=com.airbrushevents.app&pli=1",
  },
];

export const education = [
  {
    period: "2022",
    school: "Marwadi University",
    degree: "Integrated MCA - Dual MCA",
    description:
      "Five-year integrated MCA focused on full-stack development, mobile application design, and advanced data structures.",
  },
  {
    period: "2017",
    school: "New Era English Medium School",
    degree: "Higher Secondary School",
    description: "Science with Computer Science, building foundational programming and logical thinking skills.",
  },
];

export type StoreLink = {
  platform: "android" | "ios";
  label?: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  category: string;
  image?: string;
  link?: string;
  storeLinks?: StoreLink[];
  tags: string[];
};

export const projectCategories = [
  "Featured Projects",
  "Location Services Apps",
  "Social & AI Apps",
  "FinTech Apps",
  "HealthTech Apps",
] as const;

export const projects: Project[] = [
  {
    title: "MyMints",
    category: "Featured Projects",
    description:
      "Vouchers, reports, and rewards mobile app built with React Native for iOS and Android.",
    image: "./img/portfolio/mymint.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.mymints.app",
    tags: ["React Native", "Rewards", "Cross-Platform"],
  },
  {
    title: "Clientracker",
    category: "Featured Projects",
    description:
      "Client data tracking, reporting, and scheduling app with analytics and backend integration.",
    image: "./img/portfolio/clientracker.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.clientracker.app&pli=1",
    tags: ["React Native", "Analytics", "SaaS"],
  },
  {
    title: "BigToe",
    category: "Featured Projects",
    description:
      "Fitness and yoga wellness app with video streaming, reminders, and subscriptions.",
    image: "./img/portfolio/bigtoe.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.bigtoesnc.app&hl=en_IN",
    tags: ["React Native", "Fitness", "Streaming"],
  },
  {
    title: "TeamHub",
    category: "Featured Projects",
    description:
      "Event coordination and inventory management app for Airbrush Events artists — track events, manage inventory, and submit reports.",
    image: "./img/portfolio/teamhub.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.airbrushevents.app&pli=1",
    storeLinks: [
      {
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=com.airbrushevents.app&pli=1",
      },
    ],
    tags: ["React Native", "Events", "Mobile"],
  },
  {
    title: "Resident Connect",
    category: "Featured Projects",
    description:
      "Community and property management app for resident engagement, service updates, and streamlined communication.",
    image: "./img/portfolio/reco.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.residentconnect.recoapp",
    storeLinks: [
      {
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=com.residentconnect.recoapp",
      },
      {
        platform: "ios",
        url: "https://apps.apple.com/in/app/reco-by-resident-connect/id6450892720",
      },
    ],
    tags: ["React Native", "Community", "Mobile"],
  },
  {
    title: "Logistics App",
    category: "Location Services Apps",
    description:
      "Waste Control logistics tracking app for monitoring routes, pickups, and operational workflows.",
    storeLinks: [
      {
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=com.wastecontrol.logistic.app&hl=en",
      },
      {
        platform: "ios",
        url: "https://apps.apple.com/ng/app/logistic-wastecontrol/id1473114964",
      },
    ],
    tags: ["React Native", "Tracking", "Logistics"],
  },
  {
    title: "ePATH",
    category: "Location Services Apps",
    description: "Ambulance tracking app for real-time location monitoring and emergency response coordination.",
    storeLinks: [
      {
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=in.epathtracking",
      },
      {
        platform: "ios",
        url: "https://apps.apple.com/in/app/epath/id6737226494",
      },
    ],
    tags: ["React Native", "GPS", "Healthcare"],
  },
  {
    title: "Save Me",
    category: "Location Services Apps",
    description: "Food service app focused on reducing food waste and connecting surplus food with users in need.",
    storeLinks: [
      {
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=app.saveme",
      },
      {
        platform: "ios",
        url: "https://apps.apple.com/app/save-me-food-waste/id6444713924",
      },
    ],
    tags: ["React Native", "Food Tech", "Social Impact"],
  },
  {
    title: "Saffo",
    category: "Social & AI Apps",
    description: "Social networking chat app for connecting users through messaging and community features.",
    storeLinks: [
      {
        platform: "ios",
        url: "https://apps.apple.com/in/app/saffo/id6677016625",
      },
    ],
    tags: ["React Native", "Social", "Messaging"],
  },
  {
    title: "Ypay",
    category: "FinTech Apps",
    description: "E-wallet and payment app — Bharat ka smart card for digital transactions and wallet management.",
    storeLinks: [
      {
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=com.bitoodle.ypay",
      },
      {
        platform: "ios",
        url: "https://apps.apple.com/in/app/ypay-bharat-ka-smart-card/id1591549699",
      },
    ],
    tags: ["React Native", "Payments", "E-Wallet"],
  },
  {
    title: "Paycio",
    category: "FinTech Apps",
    description: "Digital crypto transaction app for secure wallet operations and cryptocurrency payments.",
    storeLinks: [
      {
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=com.paycio&hl=en",
      },
      {
        platform: "ios",
        url: "https://apps.apple.com/in/app/paycio-app/id6550918823",
      },
    ],
    tags: ["React Native", "Crypto", "FinTech"],
  },
  {
    title: "GymVale",
    category: "HealthTech Apps",
    description: "Gym management and fitness app for gym owners and members with workouts, plans, and tracking.",
    storeLinks: [
      {
        platform: "android",
        url: "https://play.google.com/store/apps/details?id=com.gymvale&hl=en_IN&gl=US",
      },
      {
        platform: "ios",
        url: "https://apps.apple.com/in/app/gymvale-for-gym-owner-member/id1498426033",
      },
    ],
    tags: ["React Native", "Fitness", "Gym Management"],
  },
  {
    title: "HealthyStart",
    category: "HealthTech Apps",
    description:
      "Dental health platform with separate patient and provider apps for treatment tracking and clinical workflows.",
    storeLinks: [
      {
        platform: "android",
        label: "Patient",
        url: "https://play.google.com/store/apps/details?id=com.orthotain.healthystart.patients",
      },
      {
        platform: "ios",
        label: "Patient",
        url: "https://apps.apple.com/us/app/healthystart-patients/id1524544649",
      },
      {
        platform: "android",
        label: "Provider",
        url: "https://play.google.com/store/apps/details?id=com.orthotain.healthystart.providers",
      },
      {
        platform: "ios",
        label: "Provider",
        url: "https://apps.apple.com/ru/app/healthystart-providers/id1524544529?l=en-GB",
      },
    ],
    tags: ["React Native", "Dental", "Healthcare"],
  },
  {
    title: "Otter Bout My Day",
    category: "HealthTech Apps",
    description: "HealthTech wellness app for daily health tracking, routines, and personalized wellness insights.",
    storeLinks: [
      {
        platform: "ios",
        url: "https://apps.apple.com/in/app/otterboutmyday/id6479358174",
      },
    ],
    tags: ["React Native", "Wellness", "HealthTech"],
  },
];

export const testimonials = [
  {
    name: "Billy Adams",
    company: "Rolling Thunder",
    quote:
      "Working with Kishan was a great experience. He understood our business needs quickly and built a reliable mobile app that exceeded our expectations.",
    image: "./img/testimonials/testimonial-1.jpg",
  },
  {
    name: "Gary Johnson",
    company: "Locost Accessories",
    quote:
      "His problem-solving skills really stand out. He writes clean, maintainable code and has excellent understanding of mobile architecture and performance.",
    image: "./img/testimonials/testimonial-2.jpg",
  },
  {
    name: "Daniel Pringle",
    company: "Sagebrush",
    quote:
      "Kishan consistently delivers high-quality work. His attention to detail and ability to turn complex requirements into smooth apps is impressive.",
    image: "./img/testimonials/testimonial-3.jpg",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
