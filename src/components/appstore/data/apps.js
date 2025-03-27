export const categories = ["All", "WebApp", "Mobile App", "Microservice"];

export const categoryDescriptions = {
  WebApp:
    "Browser-based applications providing rich user interfaces and functionality",
  "Mobile App": "Native mobile applications for iOS and Android platforms",
  Microservice:
    "Specialized backend services for specific business capabilities",
};

const apps = [
  {
    id: "1",
    name: "Customer Support",
    description:
      "Customer support is the assistance provided by a company to its customers before, during, and after purchasing products or services, aimed at resolving issues, answering inquiries, and ensuring customer satisfaction. It can be delivered through various channels such as phone, email, live chat, and social media, focusing on areas like technical troubleshooting, billing inquiries, order support, and product guidance. Effective customer support requires patience, empathy, strong communication, and problem-solving skills to provide timely and accurate solutions, fostering positive customer experiences and loyalty.",
    category: "WebApp",
    videoUrl: "/apps/Customer Support Video.mp4",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "2",
    name: "Document Management",
    description:
      "It refers to the process of storing, organizing, and tracking digital documents. It often involves the use of Document Management Systems (DMS), which provide tools to manage the lifecycle of documents, ensuring that they are securely stored, easily accessible, and can be shared or retrieved as needed.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
    useCase: [
      "Users have the ability to create new folders to organize their content",
      "Users can upload files seamlessly into the system for storage and management",
      "Files and folders can be shared with others, enabling collaboration and accessibility",
      "Users can copy and paste files and folders to streamline file management and duplication",
      "Files and folders can be marked as favorites by starring them for quick access",
      "Users can delete files and folders as needed to maintain a clean and organized workspace.",
    ],
  },
  {
    id: "3",
    name: "Supplier Management",
    description:
      "Streamline your procurement process with our comprehensive supplier management app. Easily track supplier performance, manage contracts, and monitor deliveries in real-time. Optimize relationships, reduce risks, and ensure seamless supply chain operations with a centralized platform for all your supplier interactions.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
    useCase: [
      "Define item categories and their respective subcategories tailored to your inventory requirements.",
      "Populate the 'Vendor' section with comprehensive details about suppliers associated with each category or subcategory.",
      "Add and manage inventory items under the appropriate subcategories, representing stock units linked to specific suppliers.",
      "Create requisitions to request items required by the organization.",
      "Select items from the predefined categories and subcategories for requisitions.",
      "Approve requisitions and seamlessly convert them into purchase orders.",
      "Choose vendors corresponding to the relevant item categories or subcategories.",
      "Customize workflows, vendor parameters, and system preferences to suit operational needs.",
      "Administer user roles and permissions to control access to different system functionalities.",
      "Leverage filters and generate reports to monitor inventory levels, requisitions, and purchase orders effectively.",
      "Generate insights and analytics to evaluate supplier performance and identify category-specific demand trends.",
    ],
  },
  {
    id: "4",
    name: "ITSM",
    description:
      "IT Service Management (ITSM) refers to the structured approach and set of practices for delivering IT services to meet the needs of an organization. It encompasses the management of end-to-end IT service delivery, including planning, design, transition, operation, and continual improvement. ITSM frameworks, such as ITIL, provide guidelines and best practices to ensure that IT services are aligned with business objectives, enhance efficiency, and deliver value to customers. Key processes within ITSM include incident management, problem management, change management, and service level management.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "5",
    name: "SSD New",
    description:
      "Create personalized dashboards to visualize your data the way you need it with our custom dashboard app. Track key metrics, monitor performance, and generate real-time insights, all in one place. With flexible layouts and customizable widgets, you can tailor your dashboard to fit your unique business goals and stay on top of what matters most.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "6",
    name: "Deployment Management",
    description: "Deployment Management",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "7",
    name: "Project Management",
    description:
      "Take control of your projects with our intuitive project management app. Track tasks, assign responsibilities, set deadlines, and monitor progress in real-time. Collaborate seamlessly with your team through file sharing, messaging, and notifications to ensure everyone stays on the same page. Boost productivity, streamline workflows, and deliver projects on time with ease.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "8",
    name: "Gaming Arena",
    description:
      "This a gaming platform where you can play many games and chill out",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "9",
    name: "HCM",
    description:
      "A Human Capital Management (HCM) system that streamlines the entire employee lifecycle, including recruitment, onboarding, training, performance appraisals, and offboarding. The app offers tailored role-based access, allowing HR personnel to manage employee data, oversee clearances, and conduct exit interviews efficiently. Designed to optimize workforce management, the system integrates AI-powered tools to match job vacancies with candidates based on skills and profiles, enhancing both organizational productivity and employee experience.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "10",
    name: "Resource Management",
    description:
      "Optimize your team’s efficiency with our powerful resource management app. Allocate resources, track availability, and balance workloads in real-time to ensure every project is properly staffed. Get insights into capacity, forecast needs, and prevent overallocation, helping you manage time and resources effectively for maximum productivity.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "11",
    name: "Issue Tracker Management",
    description:
      "Stay on top of every bug, task, or issue with our streamlined issue tracker app. Easily report, prioritize, and assign issues, while tracking their status in real-time. With built-in notifications and seamless collaboration, your team can resolve problems faster and keep projects running smoothly",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "12",
    name: "CCC",
    description:
      "A Command and Control Center (CCC) is a centralized facility designed to monitor, manage, and coordinate operations in real-time. It serves as the nerve center for organizations, allowing for the efficient oversight of various activities, ranging from military operations and emergency response to corporate security and IT infrastructure management. Equipped with advanced technology and communication systems, a CCC provides situational awareness through data collection, analysis, and visualization. Key functions of a CCC include incident detection, response coordination, decision-making support, and resource management, ensuring streamlined operations and rapid, informed responses to emerging situations.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "13",
    name: "Release Management",
    description:
      "Release management is the process of planning, designing, testing, deploying, and controlling software releases.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "14",
    name: "AI-ML Workbench",
    description:
      "An AI/ML application leverages artificial intelligence and machine learning technologies to analyze data, recognize patterns, and make predictions or decisions with minimal human intervention. These applications can be used in various industries, such as healthcare, finance, marketing, and more, to automate tasks, enhance decision-making, and uncover insights from complex datasets. By training models on historical data, AI/ML apps continuously improve their performance and accuracy over time. They are designed to streamline processes, increase efficiency, and provide intelligent solutions to business challenges, making them valuable tools for organizations seeking data-driven innovation.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "15",
    name: "Sales CRM",
    description:
      "Boost your sales with our all-in-one CRM app, designed to manage leads, track interactions, and close deals faster. Stay organized with automated follow-ups, real-time analytics, and detailed customer insights. Empower your sales team to build stronger relationships and drive revenue growth effortlessly.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "16",
    name: "Digital Twin",
    description:
      "Unlock real-time insights into your physical assets with our powerful digital twin app. Simulate, monitor, and optimize performance by creating virtual replicas of your processes, systems, or products. With data-driven analytics and real-time feedback, you can predict outcomes, improve efficiency, and reduce operational costs seamlessly",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  {
    id: "17",
    name: "SSD",
    description:
      "Create personalized dashboards to visualize your data the way you need it with our custom dashboard app. Track key metrics, monitor performance, and generate real-time insights, all in one place. With flexible layouts and customizable widgets, you can tailor your dashboard to fit your unique business goals and stay on top of what matters most.",
    category: "WebApp",
    videoUrl: " ",
    thumbnailUrl: "/apps/thumbnails/Customer Support.png",
  },
  // ... rest of the apps array
];

export { apps };
