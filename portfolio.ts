import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  // FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Jahnvi Lalchandani",
  title: "Hi all, I'm Jahnvi",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Angular, DotNet, and MySQL. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "/Jahnvi_Resume.pdf",
};

export const openSource = {
  githubUserName: "JahnviLalchandani",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:jahnvilalchandani@gmail.com",
  linkedin: "https://www.linkedin.com/in/jahnvi-lalchandani-5409b12b3",
  github: "https://github.com/JahnviLalchandani",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", 
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in Angular"),
        emoji("⚡ Building responsive static websites using HTML, CSS, JavaScript"),
        emoji("⚡ Building RESTful APIs in DotNet & MVC"),
      ],
      softwareSkills: [
        {
          skillName: "Angular",
          iconifyTag: "logos:angular-icon",
        },
        {
          skillName: "DotNet",
          iconifyTag: "logos:dotnet",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "Git",
          iconifyTag: "logos:git-icon",
        },
        {
          skillName: "HTML",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS",
          iconifyTag: "vscode-icons:file-type-css",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Vindhya Institute of Management and Science, Satna, MP.",
    subHeader: "Bachelor in Computer Application",
    duration: "June 2019 - April 2022",
    desc: "",
    grade: "Grade A+",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Angular Developer",
    company: "TeamLease Regteck Pvt Ltd",
    companyLogo: "/img/icons/common/TeamLease.jpg",
    date: "June 2024 - Present",
    desc: "I specialize in building dynamic and responsive web applications with Angular and TypeScript, delivering scalable and user-friendly solutions for diverse industries. Designed and implemented RESTful APIs to ensure seamless backend communication and efficient data handling. Collaborated with cross-functional teams to create high-performance applications while debugging complex issues and optimizing performance for top-quality deliverables.",
  },
  {
    role: "Full Stack Intern",
    company: "ItPreneur",
    companyLogo: "/img/icons/common/itp.png",
    date: "Dec 2023 - June 2024",
    desc: "I specialize in developing dynamic and responsive full-stack web applications using Angular and TypeScript on the frontend and .NET with MVC architecture on the backend. Designed and implemented RESTful APIs to ensure seamless communication between client and server, enabling efficient data management and robust application functionality. Collaborated with cross-functional teams to deliver scalable, optimizing performance for exceptional user experiences.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Developed and maintained responsive web applications using Angular, creating user-friendly interfaces, implementing RESTful APIs, and optimizing performance for scalable, high-quality solutions across various projects.",
    // github: "https://github.com/1hanzla100/developer-portfolio",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Recipe Management System",
    desc: "Developed dynamic web applications with Angular, TypeScript, and .NET MVC. Created RESTful APIs, ensured seamless backend integration, and delivered scalable, high-performance solutions with optimized performance and user-friendly designs.",
    // link: "https://gibeo.io/",
  },
  {
    name: "Library Management System",
    desc: "Developed a Library Management System to streamline cataloging, circulation, and inventory management with real-time tracking, advanced search, and user-friendly accessibility using HTML, CSS, JS, PHP, and MySQL.",
    // link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "E Commerce",
    desc: "Developed an e-commerce platform using Angular, .NET, and MySQL, secure transactions, real-time inventory management, and a responsive, user-friendly interface for enhanced shopping experiences.",
    // link: "https://hooliganculture.com/",
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
//   {
//     name: "Wajahat Malek",
//     role: "CEO at Duseca Software",
//     feedback:
//       "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
//   },
//   {
//     name: "Zaid Zaffar",
//     role: "CEO at ZR Technologies",
//     feedback:
//       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
//   },
// ];

// See object prototype on /types/section.ts page


export const seoData: SEODataType = {
  title: "Jahnvi Lalchandani",
  description: greetings.description,
  author: "Jahnvi Lalchandani",
  // image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  image: "https://avatars.githubusercontent.com/JahnviLalchandani",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Jahnvi",
    "Jahnvi Lalchandani",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Jahnvi Portfolio ",
    "Jahnvi Lalchandani Portfolio",
  ],
};
