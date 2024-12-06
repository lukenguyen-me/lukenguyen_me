import ImgDemoFlashnote from "@/assets/resume/demo_flashnote.webp";
import ImgDemoPithypoint from "@/assets/resume/demo_pithypoint.webp";
import ImgDemoPrepExam from "@/assets/resume/demo_prepexam.webp";
import ImgDemoVeso from "@/assets/resume/demo_veso.webp";
import ImgLuke1 from "@/assets/resume/luke_1.webp";
import ImgLuke2 from "@/assets/resume/luke_2.webp";
import ImgLuke3 from "@/assets/resume/luke_3.webp";
import ImgLuke4 from "@/assets/resume/luke_4.webp";
import ImgLuke5 from "@/assets/resume/luke_5.webp";
import ImgLuke6 from "@/assets/resume/luke_6.webp";
import ImgLuke7 from "@/assets/resume/luke_7.webp";
import ImgOrgAxonNetworks from "@/assets/resume/org_axon_networks.svg";
import ImgOrgDesignveloper from "@/assets/resume/org_designveloper.webp";
import ImgOrgHcmut from "@/assets/resume/org_hcmut.webp";
import ImgOrgMyConstant from "@/assets/resume/org_myconstant.webp";
import ImgMyAvatar from "@/assets/resume/portrait.webp";
import { Icons } from "@/components/Icons";
import { BookText, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Luke Nguyen",
  initials: "LN",
  url: "https://lukenguyen.me",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam",
  description: "From Software Engineer to Micro-entrepreneur",
  avatarUrl: ImgMyAvatar,
  photos: [
    ImgLuke2,
    ImgLuke3,
    ImgLuke6,
    ImgLuke5,
    ImgLuke1,
    ImgLuke4,
    ImgLuke7,
  ],
  skills: [
    "Typescript",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Python",
    "Django",
    "Rust",
    "Axum",
    "Postgres",
    "MongoDB",
    "Docker",
    "AWS S3",
    "AWS Lambda",
    "AWS DynamoDB",
    "AWS Cognito",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: BookText, label: "Blog" },
  ],
  contact: {
    email: "lukenguyen.me@gmail.com",
    tel: "+84 944 281 788",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lukenguyen-me",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lukenguyen-me/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/lukenguyen_me",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:lukenguyen.me@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "AXON Networks",
      href: "https://www.axon-networks.com/",
      badges: [],
      location: "Ho Chi Minh City, Vietnam",
      title: "Software Engineer",
      logoUrl: ImgOrgAxonNetworks,
      start: "Dec 2022",
      end: "Present",
      description:
        "Working in Axon Orchestrator product, a dashboard allow user controls network devices. In charge of maintaining existed features and implementing new product. Closely cooperate with other worldwide teams from Denmark (Dev + Designer), US (managers) and Singapore (Dev + QA).",
    },
    {
      company: "MyConstant",
      badges: [],
      href: "https://myconstant.com/",
      location: "Ho Chi Minh City, Vietnam",
      title: "Software Engineer",
      logoUrl: ImgOrgMyConstant,
      start: "Apr 2020",
      end: "Sep 2022",
      description:
        "MyConstant is an investing platform in crypto industrial. In charge of implement well-looking and responsive UI for new products, as well as maintain old products. Implement design from Sketch and Figma. Build new blog page (Wordpress) to support content team and marketing.",
    },
    {
      company: "Designveloper",
      href: "https://designveloper.com/",
      badges: [],
      location: "Ho Chi Minh City, Vietnam",
      title: "Fullstack Developer",
      logoUrl: ImgOrgDesignveloper,
      start: "Jan 2018",
      end: "Mar 2020",
      description:
        "Build web application using ReactJS, and mobile application using React Native and native languages (Swift and Java). Build API for authentication module, payment module with Stripe and write unit test.",
    },
  ],
  education: [
    {
      school: "Ho Chi Minh University of Technology",
      href: "https://hcmut.edu.vn/",
      degree: "Bachelor of Engineering - Computer Engineering",
      logoUrl: ImgOrgHcmut,
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Pithy Point",
      href: "https://pithypoint.com",
      dates: "Sep 2024 - Present",
      active: true,
      description:
        "A web app that simplifies slide creation, letting users focus purely on content without the hassle of styling. Create impactful presentations with ease and clarity.",
      technologies: [
        "Reactjs",
        "Typescript",
        "TailwindCSS",
        "Shadcn",
        "Node.js",
        "Fastify",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://pithypoint.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: ImgDemoPithypoint,
      video: "",
    },
    {
      title: "PrepExam",
      href: "https://prepexam.io",
      dates: "May 2024 - Present",
      active: true,
      description:
        "A platform to help people prepare for professional certification exams by providing a comprehensive set of resources and tools.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn",
        "Node.js",
        "Fastify",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://prepexam.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: ImgDemoPrepExam,
      video: "",
    },
    {
      title: "Veso",
      href: "https://veso.germlab.dev",
      dates: "Nov 2023 - Jan 2024",
      active: true,
      description:
        "A monitoring and analytics tool to track Vietnamese lottery results. Available on web and mobile.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "React Native",
        "AWS Lambda",
        "AWS DynamoDB",
        "AWS Cognito",
      ],
      links: [
        {
          type: "Website",
          href: "https://veso.germlab.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/us/app/veso-d%C3%B2-nhanh-v%C3%A9-s%E1%BB%91/id6476085304",
          icon: <Icons.appstore className="size-3" />,
        },
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.germlab.veso_mobile&pcampaignid=web_share",
          icon: <Icons.googleplay className="size-3" />,
        },
      ],
      image: ImgDemoVeso,
      video: "",
    },
    {
      title: "Flashnote",
      href: "https://flashnote.germlab.dev",
      dates: "Oct 2023 - Dec 2023",
      active: true,
      description:
        "A note-taking app that allows users to create, edit, and delete notes with ease. Available on web, iOS and Android.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "React Native",
        "AWS Lambda",
        "AWS DynamoDB",
        "AWS Cognito",
      ],
      links: [
        {
          type: "Website",
          href: "https://flashnote.germlab.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Appstore",
          href: "https://apps.apple.com/us/app/flashnote-note-and-just-it/id6474100443",
          icon: <Icons.appstore className="size-3" />,
        },
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.germlab.flashnote_mobile&pcampaignid=web_share",
          icon: <Icons.googleplay className="size-3" />,
        },
      ],
      image: ImgDemoFlashnote,
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Minathon",
      dates: "November 23rd - 25th, 2018",
      location:
        "Computer Department, HCM University of Technology, Ho Chi Minh",
      description:
        "Developed an application which manage IoT devices in smart home using WiFi.",
      links: [],
      image: undefined,
      video: "",
    },
  ],
} as const;
