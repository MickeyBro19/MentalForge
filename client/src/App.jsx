import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import TaskDashboard from "./pages/Dashboard/TaskDashboard";
import JournalDashboard from "./pages/Dashboard/JournalDashboard";
import MoodDashboard from "./pages/Dashboard/MoodDashboard";
import CalendarDashboard from "./pages/Dashboard/CalendarDashboard";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="tasks" element={<TaskDashboard />} />
          <Route path="journal" element={<JournalDashboard />} />
          <Route path="mood" element={<MoodDashboard />} />
          <Route path="calendar" element={<CalendarDashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
