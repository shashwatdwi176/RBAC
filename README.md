# MERN Role-Based Access Control (RBAC)

This is a **Role-Based Access Control (RBAC)** system built with the **MERN stack** (MongoDB, Express, React, Node.js) and **Vite** for the frontend. The application allows users to register, login, and perform role-based operations. Admin users can manage other users, including creating and deleting accounts. Access control is enforced using middleware to ensure only authorized users perform sensitive actions.

## Features

- **User Registration and Authentication**
  - Secure password hashing using `bcryptjs`.
  - JWT-based authentication with secure cookies.

- **Role-Based Access**
  - Middleware to restrict access to admin-only routes.
  - Users can only perform actions allowed by their roles.

- **Admin Management**
  - Admins can view, create, and delete users.

- **Frontend**
  - Built using React and Vite for fast performance.
  - Interactive UI for managing users and roles.

## Prerequisites

Make sure you have the following installed:

- **Node.js**: >= 14.x
- **npm** or **yarn**
- **MongoDB**

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/shashwatdwi176/RABC
cd RABC
