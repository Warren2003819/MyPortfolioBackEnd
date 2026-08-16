const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// --- DATA ---
const myProjects = [
  {
    id: 1,
    title: "Track My Ride: Intelligent Transit System",
    category: "IoT Capstone Project",
    description: "Designed and developed an IoT-based transit management system integrating ESP32 microcontrollers, GPS, and RFID technology for real-time bus tracking. Built on an efficient rule-based framework. Features hardware integration including a security relay connected directly to the vehicle's ignition gauge.",
    role: "Full-Stack Developer",
    status: "Completed - 2025",
    // Animated Map SVG (City of Ilagan)
    imageSvg: `<svg class="project-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" style="background-color:#1e212b;">
      <path d="M0,50 L600,50 M0,100 L600,100 M0,150 L600,150 M0,200 L600,200 M0,250 L600,250" stroke="#2a2d3a" stroke-width="1"/>
      <path d="M100,0 L100,300 M200,0 L200,300 M300,0 L300,300 M400,0 L400,300 M500,0 L500,300" stroke="#2a2d3a" stroke-width="1"/>
      <path d="M50,250 Q200,250 250,150 T450,100" fill="none" stroke="#2a2d3a" stroke-width="12" />
      <path d="M50,250 Q200,250 250,150 T450,100" fill="none" stroke="#e0e5ec" stroke-width="2" stroke-dasharray="10 10">
        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite"/>
      </path>
      <circle cx="450" cy="100" r="12" fill="#e63946" opacity="0.5">
        <animate attributeName="r" values="8;24;8" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0;0.8" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="450" cy="100" r="6" fill="#ffffff"/>
      <rect x="290" y="80" width="145" height="40" rx="5" fill="#1a1d26" stroke="#2a2d3a" stroke-width="2"/>
      <text x="300" y="105" fill="#e0e5ec" font-family="sans-serif" font-size="14" font-weight="bold">City of Ilagan 📍</text>
    </svg>`,
    link: "https://github.com/your-username/track-my-ride" // <-- PALITAN MO NG TOTOONG LINK NG RESEARCH MO
  },
  {
    id: 2,
    title: "Records Management Intern",
    category: "On-the-Job Training",
    description: "Executed primary clerical duties, including high-volume data encoding, document sorting, and daily office maintenance. Managed and organized confidential records, ensuring strict privacy compliance and efficient data retrieval.",
    role: "OJT - Isabela State University",
    status: "Jan 2026 - May 2026",
    // Animated Documents/Folder SVG
    imageSvg: `<svg class="project-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" style="background-color:#1e212b;">
      <path d="M200,220 L400,220 L420,100 L180,100 Z" fill="#2a2d3a"/>
      <path d="M180,100 L250,100 L270,70 L400,70 L400,100" fill="#1a1d26" stroke="#2a2d3a" stroke-width="4"/>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-40; 0,0" dur="4s" repeatCount="indefinite"/>
        <rect x="250" y="80" width="80" height="100" rx="4" fill="#e0e5ec"/>
        <line x1="265" y1="100" x2="315" y2="100" stroke="#800000" stroke-width="4" stroke-linecap="round"/>
        <line x1="265" y1="120" x2="300" y2="120" stroke="#a0a8b5" stroke-width="4" stroke-linecap="round"/>
        <line x1="265" y1="140" x2="315" y2="140" stroke="#a0a8b5" stroke-width="4" stroke-linecap="round"/>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,-20; 0,15; 0,-20" dur="3s" repeatCount="indefinite"/>
        <rect x="300" y="90" width="80" height="100" rx="4" fill="#ffffff" stroke="#e63946" stroke-width="2"/>
        <circle cx="340" cy="130" r="15" fill="none" stroke="#e63946" stroke-width="3"/>
        <path d="M335,130 L340,135 L348,125" fill="none" stroke="#e63946" stroke-width="3" stroke-linecap="round"/>
      </g>
      <path d="M180,220 L420,220 L440,140 L160,140 Z" fill="#2a2d3a" stroke="#1e212b" stroke-width="2"/>
    </svg>`,
    link: "https://drive.google.com/drive/folders/your-ojt-files" // <-- PALITAN NG LINK NG CERTIFICATE O PICTURES MO
  },
  {
    id: 3,
    title: "Freelance Tech Services",
    category: "Electronics Repair & IT Support",
    description: "Hardware Component Diagnostics & Troubleshooting; Windows OS Setup & Management; Basic Network Configuration; Web-Based System Development.",
    role: "Hardware Technician",
    status: "2022 - Present",
    // Animated Laptop, Code & Gear SVG
    imageSvg: `<svg class="project-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" style="background-color:#1e212b;">
      <rect x="150" y="210" width="300" height="15" rx="5" fill="#a0a8b5"/>
      <rect x="180" y="90" width="240" height="120" rx="8" fill="#1a1d26" stroke="#2a2d3a" stroke-width="6"/>
      <text x="200" y="130" fill="#e63946" font-family="monospace" font-size="14">&lt;hardware&gt;</text>
      <text x="220" y="155" fill="#e0e5ec" font-family="monospace" font-size="14">repair_sys()</text>
      <text x="200" y="180" fill="#e63946" font-family="monospace" font-size="14">&lt;/hardware&gt;</text>
      <rect x="315" y="142" width="8" height="15" fill="#e0e5ec">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </rect>
      <g transform="translate(450, 110)">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="5s" repeatCount="indefinite"/>
        <circle cx="0" cy="0" r="16" fill="none" stroke="#a0a8b5" stroke-width="6"/>
        <line x1="0" y1="-24" x2="0" y2="-12" stroke="#a0a8b5" stroke-width="6" stroke-linecap="round"/>
        <line x1="0" y1="12" x2="0" y2="24" stroke="#a0a8b5" stroke-width="6" stroke-linecap="round"/>
        <line x1="-24" y1="0" x2="-12" y2="0" stroke="#a0a8b5" stroke-width="6" stroke-linecap="round"/>
        <line x1="12" y1="0" x2="24" y2="0" stroke="#a0a8b5" stroke-width="6" stroke-linecap="round"/>
      </g>
    </svg>`,
    link: "#" // <-- KUNG WALANG LINK, LALAGYAN LANG NATIN NG '#' PARA HINDI MAG-ERROR
  }
];

// --- ROUTES ---
app.get('/projects', (req, res) => {
  res.json({ status: "success", data: myProjects });
});

app.get('/about', (req, res) => {
  res.json({
    status: "success",
    data: {
      name: "Emjay Warren P. Campano",
      title: "Information Technology Specialist",
      bio: "Dedicated IT professional seeking to leverage hands-on expertise in end-to-end system development, hardware maintenance, and Windows troubleshooting. Aiming to deliver scalable applications and ensure smooth day-to-day technical operations.",
      imageUrl: "profile.jpg",
      location: "City of Ilagan, Isabela",
      email: "emjaywarrencampano@gmail.com",
      education: {
        degree: "BS Information Technology, Network and Security",
        university: "Isabela State University - Ilagan Campus",
        year: "2022-2026"
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});
