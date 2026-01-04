# 📊 PayZen AI  
### Payroll Management System

PayZen AI is a **full-stack payroll management web application** built for modern organizations.  
It enables **secure, role-based payroll processing** for HR teams and employees using a clean, scalable architecture.

---

## 🚀 Key Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (HR & Employee)
- Protected routes for secure navigation

### 🧑‍💼 HR Dashboard
- Run monthly payroll cycles
- View payroll history
- Manage attendance entries
- Monitor payroll processing status

### 👨‍💻 Employee Dashboard
- View latest salary slip
- Check attendance summary
- Secure access to personal payroll data

### 🧾 Payroll Management
- Automated salary calculation
- Attendance-based payroll processing
- Monthly payroll generation
- Structured salary slips

### 🛡 Security
- Token-based API authorization
- Environment variable configuration
- Backend-ready multi-tenant isolation

---

## 🏗 Tech Stack

### Frontend
- React (Vite)
- React Router
- Context API
- Tailwind CSS / Custom CSS

### Backend
- Node.js
- Express.js
- MySQL
- JWT Authentication

### Tooling
- Git & GitHub
- Axios / Fetch API
- dotenv

---

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
