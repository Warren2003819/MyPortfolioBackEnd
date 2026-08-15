const express = require('express');
const cors = require('cors');
const app = express();

// UPDATE 1: Hayaang si Render ang mag-assign ng PORT, kung wala (tulad sa local), gamitin ang 3000
const port = process.env.PORT || 3000;

// UPDATE 2: Ilagay ang CORS Options
const corsOptions = {
  // Babasahin nito yung nilagay mong Vercel URL sa Render Environment Variables
  origin: process.env.CLIENT_ORIGIN, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

// I-apply ang secure CORS config
app.use(cors(corsOptions));

// Magandang practice na i-add ito para kung sakaling may POST request ka in the future, makakabasa ito ng JSON
app.use(express.json());

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
      imageUrl: "profile.jpg",
      education: {
        degree: "BS Information Technology, Network Security",
        university: "Isabela State University - Ilagan Campus"
      }
    }
  });
});

app.listen(port, () => {
  // UPDATE 3: Iniba nang konti ang console log para hindi nakalito kapag nasa Render (dahil hindi na localhost)
  console.log(`Server is running and listening on port ${port}`);
});
