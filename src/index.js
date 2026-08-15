const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// --- DATA ---
const myProjects = [
  {
    id: 1,
    title: "Track My Ride: Intelligent Transit System",
    category: "IoT Capstone Project",
    description: "Built on an efficient rule-based framework. Features hardware integration including a security relay connected directly to the vehicle's ignition gauge.",
    role: "Developer",
    status: "Completed"
  },
  {
    id: 2,
    title: "Freelance Tech Services",
    category: "Electronics Repair & Web Development",
    description: "Hardware troubleshooting and building independent web applications for clients.",
    role: "Hardware Technician & Independent Web Developer",
    status: "Ongoing"
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
      title: "IT Specialist & Hardware Technician",
      bio: "Passionate about hardware prototyping, microcontrollers, and modern web applications. Bridging the gap between physical electronics and software.",
      // Pinalagyan ko ito ng placeholder image na 3D avatar. Pwede mong palitan yung link mamaya ng totoong picture mo!
      imageUrl: "profile.jpg",
      education: {
        degree: "BS Information Technology, Network Security",
        university: "Isabela State University - Ilagan Campus"
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});