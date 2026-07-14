# 🚛 TransitOps – Fleet Management System

A modern **Fleet Management System** built using the **MERN Stack** that helps organizations efficiently manage vehicles, drivers, trips, maintenance, fuel consumption, and operational expenses through a centralized web application.

Designed with scalability, security, and usability in mind, TransitOps streamlines fleet operations while providing real-time insights into vehicle performance and operational costs.

---

## 📌 Features

### 🔐 Authentication & Authorization
- Secure JWT Authentication
- Role-Based Access Control (RBAC)
- Protected Routes
- Password Encryption using bcrypt

### 🚚 Vehicle Management
- Register New Vehicles
- Update Vehicle Information
- View Vehicle Details
- Vehicle Status Tracking
- Vehicle Availability Management

### 👨‍✈️ Driver Management
- Driver Registration
- Driver Profile Management
- License Details & Expiry Tracking
- Driver Assignment

### 🛣️ Trip Management
- Create Trips
- Assign Drivers
- Assign Vehicles
- Track Trip Status
- Trip History

### 🔧 Maintenance Management
- Schedule Maintenance
- Maintenance History
- Service Records
- Vehicle Health Tracking

### ⛽ Fuel Management
- Fuel Log Management
- Fuel Cost Tracking
- Mileage Records
- Fuel Efficiency Analysis

### 💰 Expense Tracking
- Maintenance Expenses
- Fuel Expenses
- Trip Expenses
- Overall Operational Costs

### 📊 Dashboard & Analytics
- Fleet Overview
- Vehicle Statistics
- Driver Statistics
- Fuel Reports
- Maintenance Reports
- Expense Reports

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- CSS3
- Axios

## Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js
- REST APIs

## Database
- MongoDB Atlas
- Mongoose ODM

## Development Tools
- Git
- GitHub
- VS Code
- Postman

---

# 📂 Project Structure

```
TransitOps/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Mananchovatiya/TransitOps-Fleet-Management-System.git

cd TransitOps-Fleet-Management-System
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd client

npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd ../server

npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** directory.

Example:

```env
PORT=5050

MONGODB_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_ORIGIN=http://localhost:5173
```

If your frontend uses environment variables, create:

```env
client/.env

VITE_API_URL=http://localhost:5050/api
```

---

# ▶️ Run the Project

### 1. Start the Backend

```bash
cd server

# Seed the database (Run only once)
npm run seed

# Start the development server
npm run dev
```

### 2. Start the Frontend

```bash
cd client

npm run dev
```

---

The application will be available at

```
Frontend:
http://localhost:5173

Backend:
http://localhost:5050
```

---

# 🚀 Future Enhancements

- Email Notifications
- SMS Alerts
- GPS Vehicle Tracking
- Live Vehicle Location
- Interactive Maps
- Driver Performance Dashboard
- Predictive Maintenance
- AI-based Route Optimization
- Mobile Application
- PDF Report Export

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Protected API Routes
- Role-Based Authorization
- Environment Variable Configuration

---

# 📈 Learning Outcomes

This project helped strengthen my understanding of:

- MERN Stack Development
- REST API Design
- Authentication & Authorization
- MongoDB & Mongoose
- CRUD Operations
- State Management
- Backend Architecture
- API Integration
- Full Stack Application Development
- Git & GitHub Collaboration

---

# 👨‍💻 Author

**Manan Chovatiya**

GitHub:
https://github.com/Mananchovatiya

LinkedIn:
https://www.linkedin.com/in/mananchovatiya/