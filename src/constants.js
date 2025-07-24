// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import zdLogo from './assets/company_logo/zd_Logo.png';


// Education Section Logo's
import nitdLogo from './assets/education_logo/nitd.png';
import akLogo from './assets/education_logo/ak.png';
import dbhsLogo from './assets/education_logo/dbhs.png';

// Project Section Logo's
import meetLogo from './assets/work_logo/meet.png';
import zerodhaLogo from './assets/work_logo/zerodha.png';
import gptLogo from './assets/work_logo/gpt.png';
import gamingLogo from './assets/work_logo/gw.png';
import simonLogo from './assets/work_logo/simon.png';
import breakoutLogo from './assets/work_logo/break.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Springboot', logo: springbootLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
     { name: 'C++', logo: cppLogo },
      { name: 'C', logo: cLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: zdLogo,
      role: "Fullstack Developer",
      company: "Zidio Development",
      date: "March 2024 - June 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
  ];
  
  export const education = [
  {
  id: 0,
  img: nitdLogo,
  school: "National Institute of Technology, Delhi",
  date: "Oct 2022 - July 2026",
  grade: "7.5 CGPA",
  desc: "I'm currently pursuing a B.Tech in Electronics and Communication Engineering at NIT Delhi. My coursework includes core subjects in electronics, digital systems, and communication theory, alongside a growing focus on software development and problem-solving. Outside academics, I'm actively involved in coding, project-building, and tech events that sharpen both my technical and collaborative skills.",
  degree: "Bachelor of Technology - B.Tech",
},

    {
      id: 1,
      img: akLogo,
      school: "Aakash International Sr. Sec. School, New Delhi",
      date: "Apr 2021 - March 2022",
      grade: "81%",
      desc: "I completed my class 12 education from Aakash International Sr. Sec. School, New Delhi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Physical Eduaction.",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: dbhsLogo,
      school: "Don Bosco High School, Siwan",
      date: "Apr 2019 - March 2020",
      grade: "88%",
      desc: "I completed my class 10 education from Don Bosco High School, Siwan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
   {
  id: 0,
  title: "GlideMeet – Real-Time Video Conferencing Platform",
  description:
    "Built GlideMeet, a real-time video conferencing web application similar to Google Meet, enabling video/audio calls, instant messaging, and screen sharing for seamless virtual meetings. Integrated WebRTC for peer-to-peer video/audio streaming, Socket.IO for real-time messaging, and Express.js & MongoDB for secure authentication and data management. Designed a responsive and user-friendly UI using React.js, Material UI, and CSS, ensuring smooth navigation and accessibility across devices.",
  image: meetLogo,
  tags: ["React.js", "WebRTC", "Socket.IO", "Express.js", "MongoDB", "Material UI", "CSS"],
  github: "https://github.com/7harshkumar/Glide-Meet",
  webapp: "https://glide-meet-frontend.onrender.com/",
},

   {
  id: 1,
  title: "Zerodha – Next-Gen Stock Trading Solution",
  description:
    "A modern stock trading platform offering seamless equity, F&O, and intraday trading with a fast, intuitive UI. Features real-time market data streaming, secure user authentication, and advanced charting tools. Built with MERN stack to ensure responsive performance across devices.",
  image: zerodhaLogo, 
  tags: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js", "Tailwind CSS"],
  github: "https://github.com/7harshkumar/Zerodha",
  webapp: "https://zerodha-3-oob2.onrender.com/",
},

    {
  id: 2,
  title: "ChatGPT - Real-Time AI Chat Using OpenAI APIs",
  description:
    "A fully functional ChatGPT-like web app powered by OpenAI's GPT-4o-mini model. Users can create multiple chat threads, view past conversations, and interact with the AI in real time. Built using the MERN stack, with secure backend logic, persistent storage, and a responsive, chat-centric UI.",
  image: gptLogo, 
  tags: ["React.js", "Node.js", "Express", "MongoDB", "OpenAI API", "GPT-4o-mini"],
  github: "https://github.com/7harshkumar/GPT",
  webapp: "https://gpt-1-w9o2.onrender.com/",
},

 {
  id: 3,
  title: "Gaming Website",
  description:
    "An interactive gaming website built using HTML, CSS, and JavaScript, featuring smooth UI transitions, character animations, and dynamic gameplay elements. It offers a fun and responsive experience for users across all devices. Hosted with GitHub Pages for fast public access.",
  image: gamingLogo, // replace this with the correct import for the gaming website preview image
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/7harshkumar/Gaming-Website",
  webapp: "https://7harshkumar.github.io/Gaming-Website/",
},

    
    {
  id: 4,
  title: "Simon Game – Memory Challenge",
  description:
    "A web-based version of the classic Simon memory game built using HTML, CSS, and JavaScript. The game challenges players to repeat increasingly complex sequences of colors and sounds. It includes score tracking, responsive UI, and smooth sound integration for an engaging retro experience.",
  image: simonLogo, 
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/7harshkumar/Simon-Game",
  webapp: "https://7harshkumar.github.io/Simon-Game/",
},

  {
  id: 5,
  title: "Breakout Game – Classic Arcade Remake",
  description:
    "A classic brick-breaker arcade game recreated using pure HTML5 Canvas and JavaScript. Features include smooth ball physics, paddle control, level-based difficulty, score tracking, and dynamic brick regeneration. Fully responsive and optimized for keyboard gameplay.",
  image: breakoutLogo, 
  tags: ["HTML", "CSS", "JavaScript", "Canvas"],
  github: "https://github.com/7harshkumar/Break-Out-Game",
  webapp: "https://7harshkumar.github.io/Break-Out-Game/",
},

  
  ];  