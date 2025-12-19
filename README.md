🚀 Interactive 3D Developer Portfolio

A modern, immersive 3D developer portfolio built to showcase full-stack, AI-powered, and creative web projects through smooth animations, interactive 3D elements, and clean UI design.

This portfolio is designed to go beyond static resumes by presenting real projects, skills, and experience in an engaging and professional way.

📋 Table of Contents

🤖 Introduction

⚙️ Tech Stack

🔋 Features

🤸 Quick Start

🧩 Project Structure

🚀 Deployment

📄 License

🤖 Introduction

This project serves as my personal developer portfolio, highlighting my experience as a Full Stack (MERN) Developer, Backend & API Developer, UI/UX Engineer, and AI & Automation Developer.

It combines 3D visuals, motion-based interactions, and real-world project data to create a portfolio that is both technically strong and visually compelling.

⚙️ Tech Stack
Frontend

React.js

Vite

Tailwind CSS

Framer Motion

3D & Animation

Three.js

React Three Fiber

React Three Drei

Backend & Utilities

EmailJS (contact form integration)

Modular component architecture

Modern animation utilities

🔋 Features

👉 3D Hero Section
Interactive 3D elements that create a strong first impression.

👉 Smooth Animations
Page transitions and section animations powered by Framer Motion.

👉 Skills Visualization
Structured presentation of technical skills and tools.

👉 Projects Showcase
Real GitHub projects including AI tools, SaaS platforms, dashboards, and games.

👉 Experience Timeline
Multiple role-based experience sections (MERN, Backend, UI/UX, AI).

👉 Contact Section
Fully functional contact form with email integration.

👉 Responsive Design
Optimized for desktop, tablet, and mobile devices.

👉 Clean Code Architecture
Reusable components and scalable structure.

🤸 Quick Start

Follow these steps to run the project locally.

Prerequisites

Make sure you have:

Node.js (v18+)

npm or yarn

Git

Clone the Repository
git clone https://github.com/your-username/your-portfolio-repo.git
cd your-portfolio-repo

Install Dependencies
npm install

Environment Variables

Create a .env file in the root directory:

VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key

Run the Project
npm run dev


Open http://localhost:5173 in your browser.

🧩 Project Structure
src/
├── assets/        # Images, icons, 3D assets
├── canvas/        # Three.js & 3D components
├── components/    # Reusable UI components
├── constants/     # Data (projects, experience, skills)
├── hoc/           # Higher-order components
├── styles/        # Global styles
├── utils/         # Animation & helper utilities
└── main.jsx

🚀 Deployment

This project can be deployed on:

Vercel

Netlify

Cloudflare Pages

Build command:

npm run build

📄 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it with attribution.
