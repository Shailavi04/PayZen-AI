📊 PayZen AI – Payroll Management System

PayZen AI is a full-stack payroll management web application designed for modern organizations.
It provides secure, role-based payroll processing for HR teams and employees with a clean, scalable architecture.

🚀 Features
🔐 Authentication & Authorization

JWT-based authentication

Role-based access control (HR & Employee)

Protected routes for secure access

🧑‍💼 HR Dashboard

Run payroll cycles

View payroll history

Manage attendance entries

Monitor payroll processing status

👨‍💻 Employee Dashboard

View latest salary slip

Check attendance summary

Secure access to personal payroll data

🧾 Payroll Management

Automated salary calculation

Attendance-based payroll processing

Monthly payroll generation

Structured salary slips

🛡 Security

Token-based API authorization

Environment variable configuration

Company-level data isolation (backend-ready)

🏗 Tech Stack
Frontend

React (Vite)

React Router

Context API

Tailwind CSS / Custom CSS

Backend

Node.js

Express.js

MySQL

JWT Authentication

Tools

Git & GitHub

Axios / Fetch API

dotenv
## 📁 Project Folder Structure


```text
PayZen-AI/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── payrollController.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── payrollRoutes.js
│   │   │   └── attendanceRoutes.js
│   │   ├── middlewares/
│   │   │   └── authMiddleware.js
│   │   └── services/
│   │       └── payrollService.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── pages/
│   │   │   ├── Landing.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── HRDashboard.jsx
│   │   │   ├── EmployeeDashboard.jsx
│   │   │   ├── SalarySlip.jsx
│   │   │   └── Unauthorized.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
│
├── .env.example
├── .gitignore
└── README.md


⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/Shailavi04/PayZen-AI.git
cd PayZen-AI

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=payzen_ai
JWT_SECRET=your_secret


Run backend:

node server.js

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Open in browser:

http://localhost:5173

🔑 User Roles
HR

Run payroll

View payroll history

Update attendance

Monitor payroll status

Employee

View salary slip

Check payroll details

Secure access to personal data

🔒 Security Design

JWT tokens stored securely in localStorage

Protected API routes

Role validation at route level

Backend-ready for multi-tenant isolation

📈 Scalability & Future Enhancements

Multi-company support

AI-based payroll anomaly detection

PDF salary slip downloads

Refresh token implementation

Cloud deployment (AWS / Render)

🧠 Learning Outcomes

Full-stack application architecture

Secure authentication & authorization

REST API design

Clean UI/UX for enterprise software

GitHub & version control best practices

👩‍💻 Author

Shailavi Srivastava
GitHub: @Shailavi04

⭐ Acknowledgements

This project was built as part of a full-stack internship / learning initiative focusing on real-world payroll systems.
