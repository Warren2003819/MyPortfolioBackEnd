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
    // LIVE MAPA: OpenStreetMap naka-center sa Ilagan City
    visualMedia: `
      <div class="project-img map-wrapper" style="position: relative; overflow: hidden; pointer-events: none;">
        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
          src="https://www.openstreetmap.org/export/embed.html?bbox=121.85,17.11,121.93,17.17&layer=mapnik&marker=17.1432,121.8906" 
          style="border: 0; width: 100%; height: 100%; filter: contrast(1.1) saturate(1.2);">
        </iframe>
        <div style="position: absolute; top: 15px; left: 15px; background: rgba(128, 0, 0, 0.9); color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
          📍 Ilagan City, Isabela
        </div>
      </div>`,
    link: "https://github.com/your-username/track-my-ride"
  },
  {
    id: 2,
    title: "Records Management Intern",
    category: "On-the-Job Training",
    description: "Executed primary clerical duties, including high-volume data encoding, document sorting, and daily office maintenance. Managed and organized confidential records, ensuring strict privacy compliance and efficient data retrieval.",
    role: "OJT - Isabela State University",
    status: "Jan 2026 - May 2026",
    // LIVE SVG: Animated Documents & Folders
    visualMedia: `
      <svg class="project-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" style="background-color:#1e212b;">
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
    link: "https://drive.google.com/drive/folders/your-ojt-files"
  },
  {
    id: 3,
    title: "Freelance Tech Services",
    category: "Electronics Repair & IT Support",
    description: "Hardware Component Diagnostics & Troubleshooting; Windows OS Setup & Management; Basic Network Configuration; Web-Based System Development.",
    role: "Hardware Technician",
    status: "2022 - Present",
    // LIVE SVG: Booting Computer & Mobile Software
    visualMedia: `
      <svg class="project-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" style="background-color:#15171e;">
        <!-- Desktop Monitor -->
        <rect x="80" y="50" width="280" height="180" rx="10" fill="#2a2d3a" stroke="#a0a8b5" stroke-width="4"/>
        <rect x="90" y="60" width="260" height="150" fill="#000000"/>
        <rect x="190" y="230" width="60" height="30" fill="#a0a8b5"/>
        <rect x="140" y="260" width="160" height="10" rx="5" fill="#a0a8b5"/>
        
        <!-- Boot Sequence Animation -->
        <text x="100" y="85" fill="#00ff00" font-family="monospace" font-size="13" opacity="0">
          <animate attributeName="opacity" values="0;1;1;1;1;0" dur="5s" repeatCount="indefinite"/>
          > BOOT_OS.exe
        </text>
        <text x="100" y="105" fill="#00ff00" font-family="monospace" font-size="13" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;1;0" dur="5s" repeatCount="indefinite"/>
          > CHECKING HARDWARE... OK
        </text>
        <text x="100" y="125" fill="#00ff00" font-family="monospace" font-size="13" opacity="0">
          <animate attributeName="opacity" values="0;0;0;1;1;0" dur="5s" repeatCount="indefinite"/>
          > SYSTEM ONLINE.
        </text>
        
        <!-- Loading Bar -->
        <rect x="100" y="150" width="240" height="8" rx="4" fill="#2a2d3a" opacity="0">
           <animate attributeName="opacity" values="0;0;0;1;1;0" dur="5s" repeatCount="indefinite"/>
        </rect>
        <rect x="100" y="150" width="0" height="8" rx="4" fill="#00ff00">
           <animate attributeName="width" values="0;0;0;240;240;0" dur="5s" repeatCount="indefinite"/>
        </rect>

        <!-- Mobile Phone -->
        <rect x="420" y="60" width="100" height="180" rx="15" fill="#1a1d26" stroke="#a0a8b5" stroke-width="4"/>
        <rect x="430" y="80" width="80" height="140" rx="5" fill="#ffffff"/>
        <rect x="450" y="68" width="40" height="4" rx="2" fill="#a0a8b5"/>
        <circle cx="470" cy="230" r="6" fill="#a0a8b5"/>
        
        <!-- Mobile App UI Animation -->
        <rect x="440" y="95" width="25" height="25" rx="6" fill="#e63946">
          <animate attributeName="y" values="95;90;95" dur="2s" repeatCount="indefinite"/>
        </rect>
        <rect x="475" y="95" width="25" height="25" rx="6" fill="#2a2d3a">
          <animate attributeName="y" values="95;90;95" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </rect>
        <rect x="440" y="130" width="60" height="15" rx="5" fill="#a0a8b5">
          <animate attributeName="width" values="60;40;60" dur="3s" repeatCount="indefinite"/>
        </rect>
        <rect x="440" y="155" width="45" height="15" rx="5" fill="#a0a8b5"/>
      </svg>`,
    link: "#"
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
