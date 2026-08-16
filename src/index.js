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
    // Integrated your specific system framework and hardware correction
    description: "Designed and developed an IoT-based transit management system integrating ESP32 microcontrollers, GPS, and RFID technology for real-time bus tracking. Built on an efficient rule-based framework. Features hardware integration including a security relay connected directly to the vehicle's ignition gauge.",
    role: "Full-Stack Developer",
    status: "Completed - 2025",
    imageUrl: "https://placehold.co/600x300/1e212b/e0e5ec?text=Track+My+Ride" // Placeholder para maangas, palitan mo ng totoong link
  },
  {
    id: 2,
    title: "Records Management Intern",
    category: "On-the-Job Training",
    description: "Executed primary clerical duties, including high-volume data encoding, document sorting, and daily office maintenance. Managed and organized confidential records, ensuring strict privacy compliance and efficient data retrieval.",
    role: "OJT - Isabela State University",
    status: "Jan 2026 - May 2026",
    imageUrl: "https://placehold.co/600x300/1e212b/e0e5ec?text=Records+Management+OJT"
  },
  {
    id: 3,
    title: "Freelance Tech Services",
    category: "Electronics Repair & IT Support",
    description: "Hardware Component Diagnostics & Troubleshooting; Windows OS Setup & Management; Basic Network Configuration; Web-Based System Development.",
    role: "Hardware Technician",
    status: "2022 - Present",
    imageUrl: "https://placehold.co/600x300/1e212b/e0e5ec?text=Freelance+Services"
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
