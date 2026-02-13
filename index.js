const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors()); // allows frontend to talk to backend
app.use(express.json()); // lets server read JSON from requests

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes for app pages/features

// Login
app.post("/api/login", (req, res) => {
  // Handle user login
  res.json({ message: "Login endpoint" });
});

// Home
app.get("/api/home", (req, res) => {
  // Return home page data
  res.json({ message: "Home endpoint" });
});

// Get all dogs (with optional filters)
app.get("/api/dogs", (req, res) => {
  // Return list of dogs, possibly filtered
  res.json({ message: "List of dogs" });
});

// Get brief description of a specific dog
app.get("/api/dogs/:id/brief", (req, res) => {
  // Return brief description for dog with :id
  res.json({ message: `Brief description for dog ${req.params.id}` });
});

// Get specific dog details
app.get("/api/dogs/:id", (req, res) => {
  // Return details for dog with :id
  res.json({ message: `Details for dog ${req.params.id}` });
});

// Get more images of a specific dog
app.get("/api/dogs/:id/images", (req, res) => {
  // Return more images for dog with :id
  res.json({ message: `Images for dog ${req.params.id}` });
});

// Get longer description of a specific dog
app.get("/api/dogs/:id/description", (req, res) => {
  // Return longer description for dog with :id
  res.json({ message: `Longer description for dog ${req.params.id}` });
});

// Contact owner of a specific dog
app.post("/api/dogs/:id/contact", (req, res) => {
  // Handle contact owner for dog with :id
  res.json({ message: `Contact owner for dog ${req.params.id}` });
});

// AI component: upload/take picture to get dog description
app.post("/api/ai/describe-dog", (req, res) => {
  // Handle image upload and return AI-generated description
  res.json({ message: "AI dog description endpoint" });
});

// Choose a port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
