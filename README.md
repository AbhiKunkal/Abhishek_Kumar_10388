


# Task Management System (Kanban Based)

## Overview
This is a full-stack Task Management System built with authentication and a Kanban-style task board.
Each user can create, view, update, and manage their own tasks across different statuses.

The project follows RESTful API principles, enforces user-specific task isolation, and uses a minimal UI as required.

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Frontend
- React (Vite)
- Axios
- React Router

---

## Features

- User authentication (Register, Login, Logout)
- User profile management
- Task CRUD operations
- Kanban board with task status columns:
  - Pending
  - In-Progress
  - Completed
- Task status updates persisted via backend APIs
- User-specific task isolation
- Minimal UI as per assignment instructions

---

## Project Structure

```

Abhishek_Kumar_10388/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   └── api/
│   ├── .env.example
│   └── package.json
│
└── README.md

````

---

## Backend Setup

```bash
cd backend
npm install
node src/server.js
````

### Backend Environment Variables (`.env.example`)

```
PORT=5000
MONGO_URI=
JWT_SECRET=
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Frontend Environment Variables (`.env.example`)

```
VITE_API_BASE_URL=http://localhost:5000
```

---

## API Overview

### Authentication Routes

* `POST /auth/register`
* `POST /auth/login`
* `POST /auth/logout`

### User Routes (Protected)

* `GET /users/me`
* `PUT /users/me`
* `DELETE /users/me`

### Task Routes (Protected)

* `POST /tasks`
* `GET /tasks`
* `GET /tasks/:id`
* `PUT /tasks/:id`
* `DELETE /tasks/:id`

---

## Notes

* JWT-based authentication is used
* All tasks are user-specific
* Minimal UI is intentional and follows assignment guidelines
* Kanban interactions are implemented via task status updates

---

## Author

**Abhishek Kumar**
B.Tech Final Year Student





