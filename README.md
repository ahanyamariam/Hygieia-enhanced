## 🏥 About

**Hygieia** is a comprehensive telemedicine platform that connects patients with healthcare professionals. Named after the Greek goddess of health, our platform aims to make quality healthcare accessible to everyone, anywhere, anytime.

### Why Hygieia?

- 🩺 **Instant Access** - Connect with doctors within minutes
- 💊 **Complete Solution** - Consultations, pharmacy, and lab tests in one place
- 🔒 **Secure & Private** - HIPAA-compliant data protection
- 📱 **Modern Experience** - Beautiful, intuitive interface with 3D visualizations

---

## ✨ Features

### For Patients
- **🎥 Video Consultations** - HD video calls with doctors using WebRTC
- **💬 Chat Support** - Real-time messaging with healthcare providers
- **💊 Online Pharmacy** - Order medicines with home delivery
- **🧪 Lab Tests** - Book tests and receive digital reports
- **📅 Appointment Booking** - Easy scheduling with calendar integration
- **📋 Health Records** - Secure storage of medical history

### For Doctors
- **📊 Dashboard** - Manage appointments and patient records
- **📹 Virtual Clinic** - Conduct video consultations
- **📝 Prescriptions** - Digital prescription generation
- **💰 Earnings** - Track consultations and payments

### Platform Features
- **🔐 Secure Authentication** - JWT-based auth with refresh tokens
- **🎨 Modern UI** - Beautiful design with 3D elements
- **📱 Responsive** - Works on desktop, tablet, and mobile
- **🌙 Dark Mode** - Easy on the eyes (coming soon)
- **🌐 Multi-language** - i18n support (coming soon)

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| [React 19](https://reactjs.org/) | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [Vite](https://vitejs.dev/) | Build Tool |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [React Router v7](https://reactrouter.com/) | Routing |
| [Zustand](https://zustand-demo.pmnd.rs/) | State Management |
| [TanStack Query](https://tanstack.com/query) | Data Fetching |
| [React Hook Form](https://react-hook-form.com/) | Form Handling |
| [Zod](https://zod.dev/) | Validation |
| [Three.js / R3F](https://docs.pmnd.rs/react-three-fiber) | 3D Graphics |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Socket.io Client](https://socket.io/) | Real-time Communication |
| [Simple Peer](https://github.com/feross/simple-peer) | WebRTC |

### Backend
| Technology | Purpose |
|------------|---------|
| [Node.js](https://nodejs.org/) | Runtime |
| [Express.js](https://expressjs.com/) | Web Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [MongoDB](https://www.mongodb.com/) | Database |
| [Mongoose](https://mongoosejs.com/) | ODM |
| [JWT](https://jwt.io/) | Authentication |
| [Socket.io](https://socket.io/) | Real-time Events |
| [Zod](https://zod.dev/) | Validation |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** >= 18.x ([Download](https://nodejs.org/))
- **npm** >= 9.x or **yarn** >= 1.22
- **MongoDB** >= 7.x ([Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/atlas))
- **Git** ([Download](https://git-scm.com/))


📁 Project Structure
hygieia/
├── client/                     # React Frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/            # Images, icons, fonts
│   │   ├── components/        # Reusable components
│   │   │   ├── ui/            # Base UI components
│   │   │   ├── layout/        # Layout components
│   │   │   ├── forms/         # Form components
│   │   │   └── 3d/            # Three.js components
│   │   ├── features/          # Feature modules
│   │   │   ├── auth/
│   │   │   ├── doctors/
│   │   │   ├── appointments/
│   │   │   ├── pharmacy/
│   │   │   ├── lab/
│   │   │   ├── cart/
│   │   │   └── video-call/
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Third-party configs
│   │   ├── pages/             # Page components
│   │   ├── services/          # API services
│   │   ├── stores/            # Zustand stores
│   │   ├── types/             # TypeScript types
│   │   ├── utils/             # Utility functions
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── server/                     # Node.js Backend
│   ├── src/
│   │   ├── config/            # Configuration files
│   │   ├── middleware/        # Express middleware
│   │   ├── models/            # Mongoose models
│   │   ├── modules/           # Feature modules
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   ├── doctors/
│   │   │   ├── appointments/
│   │   │   ├── products/
│   │   │   ├── orders/
│   │   │   └── lab-tests/
│   │   ├── socket/            # Socket.io handlers
│   │   ├── types/             # TypeScript types
│   │   ├── utils/             # Utility functions
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
├── README.md
└── LICENSE

🗺 Roadmap
Phase 1 - MVP ✅
 User authentication
 Doctor listing & search
 Appointment booking
 Basic pharmacy
 Responsive design
 3D UI elements
Phase 2 - In Progress 🚧
 Video consultations (WebRTC)
 Real-time chat
 Payment integration (Stripe)
 Email notifications
 Lab test booking
Phase 3 - Planned 📋
 Mobile app (React Native)
 Dark mode
 Multi-language support
 AI symptom checker
 Health analytics dashboard
 Doctor reviews & ratings
Phase 4 - Future 🔮
 Wearable device integration
 Electronic health records (EHR)
 Insurance integration
 Telemedicine kiosk support

 📧 Contact
Your Name - ahanyam3@gmail.com

Project Link: https://github.com/ahanyamariam/Hygieia-enhanced.git