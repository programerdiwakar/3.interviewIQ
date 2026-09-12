# Interview IQ 🤖 – AI-Powered Mock Interview Platform

Interview IQ is a full-stack MERN web application that provides a voice-interactive mock interview simulation powered by AI [1, 2]. Candidates can set up interviews manually or upload their PDF resume to automatically extract job roles, skills, and past projects [5, 6]. The AI agent speaks questions out loud, listens to candidate responses, provides real-time feedback, generates comprehensive performance analytics, and allows downloading full PDF evaluation reports [1, 7, 13, 16].

---

## 🌟 Key Features

- **Google Authentication & Credit System**: Secure social sign-in via Firebase Google Auth, granting new users 100 free credits upon registration [3, 4, 64].
- **Automated AI Resume Parsing**: Upload PDF resumes parsed via `pdfjs-dist` and OpenRouter (GPT-4o mini) to automatically extract candidate role, experience, skills, and past projects [5, 6, 342, 355].
- **Voice-Interactive Simulation**: Hands-free interaction using browser-native Speech Recognition (Speech-to-Text) and Speech Synthesis (Text-to-Speech) synchronized with a responsive video avatar [1, 520, 567, 605].
- **Adaptive 5-Question Format**: Progressive difficulty scaling—2 Easy (60s limit), 2 Medium (90s limit), and 1 Hard (120s limit) question [6, 453].
- **Real-Time AI Feedback & Scoring**: Instant constructive feedback after each question, evaluating responses across Communication, Technical Accuracy, and Confidence [7, 8, 13, 15, 474].
- **Performance Dashboard & Analytics**: Interactive visualization of scores with Recharts area graphs and overall performance ratings out of 10 [13, 15, 719, 725].
- **Downloadable PDF Performance Reports**: Client-side multi-page PDF generation using `jspdf` and `jspdf-autotable` featuring detailed feedback and score breakdowns [16, 734].
- **Interview History**: Saved session logs tracking completed and incomplete interviews with re-accessible analytics [2, 16, 17, 422].
- **Razorpay Monetization & Verification**: Credit-based usage (50 credits per interview) with purchasable starter/pro credit packages, secured via backend HMAC SHA-256 signature verification using Node's `crypto` module [17, 18, 766, 801, 804].

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js (Vite) [26, 69]
- **State Management**: Redux Toolkit & React Redux [192, 195]
- **Styling & Animations**: Tailwind CSS [75], Framer Motion [4, 97]
- **Data Visualization**: Recharts [719, 720], React Circular Progressbar [526, 527]
- **Voice & Documents**: Web Speech API [567, 605], `jspdf` & `jspdf-autotable` [734]
- **Icons & HTTP Client**: React Icons [81], Axios [81]

### Backend
- **Runtime & Framework**: Node.js [27], Express.js [25, 28]
- **Database**: MongoDB Atlas with Mongoose ODM [29, 41, 50]
- **AI Integration**: OpenRouter API (GPT-4o mini) [329, 330]
- **File Processing**: Multer [320, 325], `pdfjs-dist` [342, 348]
- **Authentication & Security**: Firebase Auth [3, 113], JsonWebToken (JWT) [32, 130, 133], Cookie-Parser [31, 32], Node `crypto` [789]
- **Payment Gateway**: Razorpay SDK [787, 791]

### Deployment
- Hosted on **Render** (Web Service & Static Site) [840, 845].

---

## 📁 Directory Structure

```
interview-iq/
├── client/                   # Frontend React (Vite) application
│   ├── src/
│   │   ├── assets/           # Media assets (videos, images)
│   │   ├── components/       # Reusable UI components (Navbar, Timer, AuthModal)
│   │   ├── pages/            # Page views (Home, Auth, InterviewPage, History, Pricing)
│   │   ├── redux/            # Redux store & user slices
│   │   └── utils/            # Firebase SDK setup & helpers
│   └── package.json
└── server/                   # Backend Node.js / Express API
    ├── config/               # DB connection & token generation
    ├── controllers/          # Auth, User, Interview, and Payment business logic
    ├── middleware/           # Auth verification (isAuth) & Multer disk storage
    ├── models/               # Mongoose schemas (User, Interview, Payment)
    ├── routes/               # API endpoint routing
    ├── services/             # OpenRouter AI & Razorpay services
    └── index.js              # Express app entry point
```

---

## 🔑 Environment Variables

### Backend (`server/.env`)
```env
PORT=8000
MONGODB_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
FRONTEND_URL=http://localhost:5173
```

### Frontend (`client/.env`)
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account
- Firebase & OpenRouter API Keys
- Razorpay Merchant / Test Account

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/interview-iq.git
   cd interview-iq
   ```

2. **Setup Server**:
   ```bash
   cd server
   npm install
   # Create .env and populate variables
   npm run dev
   ```

3. **Setup Client**:
   ```bash
   cd ../client
   npm install
   # Create .env and populate variables
   npm run dev
   ```

---

## 🔌 API Endpoints Summary

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/google` | No | Google social sign-in & JWT cookie setup [136, 150] |
| `GET` | `/api/auth/logout` | Yes | Clears session JWT cookie [152, 153] |
| `GET` | `/api/user/current-user` | Yes | Retrieves authenticated user profile & credits [181, 186] |
| `POST` | `/api/interview/analyze-resume` | Yes | Uploads PDF resume & extracts skills/role via AI [320, 360] |
| `POST` | `/api/interview/generate-questions` | Yes | Deducts 50 credits & initializes 5 AI questions [431, 490] |
| `POST` | `/api/interview/submit-answer` | Yes | Evaluates candidate answer transcript & scores metrics [461, 491] |
| `POST` | `/api/interview/finish` | Yes | Calculates final scores & marks session completed [479, 491] |
| `GET` | `/api/interview/get-user-interviews` | Yes | Fetches candidate's past interview history [649, 659] |
| `GET` | `/api/interview/report/:id` | Yes | Fetches detailed analytics report for session [654, 660] |
| `POST` | `/api/payment/order` | Yes | Creates Razorpay payment order [796, 809] |
| `POST` | `/api/payment/verify` | Yes | Verifies HMAC SHA-256 signature & increments credits [801, 809] |

---

## 📜 License

Distributed under the MIT License.
