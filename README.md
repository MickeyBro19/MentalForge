# MentalForge

**Your mental productivity cockpit.**  
Organize tasks, track your mood, and reflect with daily journaling — all in one streamlined dashboard.

---

## Live Demo  
[Visit MentalForge](Coming Soon..)

---

## Features

- Task Manager – Add, complete, and track your to-dos
- Journal – Log your thoughts, reflections, and daily notes
- Mood Tracker – Visually record your mood with custom emoji icons
- Dashboard Overview – Unified view of tasks, journal entries, and moods
- Calendar Integration *(Coming Soon)*
- OAuth Login *(Planned: Google, GitHub)*
- Mobile App *(Future Release: React Native)*

---

## Tech Stack

| Frontend       | Backend        | Database       | Authentication |
|----------------|----------------|----------------|----------------|
| React (Vite), React-Redux, Tailwind, Axios   | Node.js, Express | MongoDB (Mongoose) | JWT *(OAuth planned)* |

---

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB instance or Atlas URI

### Installation

```bash
# Clone the repository
git clone https://github.com/MickeyBro19/MentalForge.git
cd mentalforge

# Install backend dependencies
npm install

# Navigate to frontend
cd client
npm install
```

### Environment Variables

Create a `.env` file in the project root with the following:

```
MONGO_URI=your_mongo_db_connection
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the App

From the root directory:

```bash
# Run both frontend and backend
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173)  
The backend API will run on [http://localhost:5000](http://localhost:5000)

---

## Project Structure

```
mentalforge/
├── backend/             # Express API, routes, models
├── client/              # React frontend (Vite + Redux Toolkit)
│   ├── components/      # Reusable UI elements
│   ├── features/        # Redux slices
│   ├── pages/           # Screens like Dashboard, Journal
│   └── assets/          # Static files
├── .env
├── package.json
└── README.md
```

---

## Roadmap

- OAuth login (Google, GitHub)
- Calendar view for entries
- Mood analytics dashboard
- Push notifications
- Mobile version (React Native)
- Dark mode

---

## Author

**Mickey**  

---

## License

This project is licensed under the MIT License.
```

