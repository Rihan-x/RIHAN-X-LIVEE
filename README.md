# 🔥 RIHAN X LIVEE - Esports Gaming Platform

RIHAN X LIVEE is a **professional esports web platform** focused on **Free Fire** gaming.  
It includes live YouTube statistics, tournament registration, admin dashboard, role-based access, and a futuristic animated UI.  

This system is **production-ready**, secure, and fully modular.

---

## 🌟 Features

- **Live YouTube Statistics**
  - Subscriber and view count using secure backend API
- **Tournament System**
  - Register players with Free Fire UID
  - Store registrations securely in Firebase Firestore
- **User Authentication**
  - Email/password login via Firebase Authentication
  - Role-based access (USER / ADMIN / SUPER_ADMIN)
- **Admin Dashboard**
  - View and delete tournament participants
  - Change user roles securely
  - God Mode panel for SUPER_ADMIN
- **Front-end**
  - Futuristic animated UI with fire particles
  - Mobile responsive design
  - PWA installable app support
- **Backend**
  - Node.js + Express
  - Secured YouTube API key via `.env`
- **Payment Ready Structure**
  - Ready for Stripe, Razorpay, or PayPal integration

---

## 🏗 Folder Structure

RIHAN-X-LIVEE/ │ ├── frontend/ │   ├── index.html │   ├── login.html │   ├── admin.html │   ├── manifest.json │   ├── sw.js │   ├── css/ │   │   └── style.css │   └── js/ │       ├── firebase.js │       ├── auth.js │       ├── youtube.js │       ├── tournament.js │       └── admin.js │ ├── backend/ │   ├── server.js │   ├── package.json │   ├── .env │   └── .gitignore │ └── README.md

---

## ⚡ Requirements

- Node.js v18+
- Firebase project with Authentication & Firestore
- YouTube API Key (Server-side)
- Browser supporting PWA (optional)

---

## 🚀 Setup Instructions

### Backend (Secure API)

1. Go to `backend/`
2. Install dependencies:
```bash


npm install
YOUTUBE_API_KEY=YOUR_PRIVATE_KEY
CHANNEL_ID=UCw838b6jU39JdlmAa7pUBUQ
PORT=5000

node server.js

http://localhost:5000/api/youtube
