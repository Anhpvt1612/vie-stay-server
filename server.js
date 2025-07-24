const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Load environment variables
require("dotenv").config();

const app = express();

// Basic middleware
app.use(express.json({ limit: "10mb" }));
app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  credentials: true
}));
app.use(cookieParser());

// Root route
app.get("/", (req, res) => {
  res.json({ 
    message: "Vie Stay Server is running!",
    status: "OK",
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || "development"
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ 
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

// Test API endpoint
app.get("/api/test", (req, res) => {
  res.json({ 
    message: "API is working",
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl,
    method: req.method
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message: err.message
  });
});

// Export for Vercel
module.exports = app;

// Only listen in development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}