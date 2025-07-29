import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import taskReducer from "../features/task/taskSlice";
import journalReducer from "../features/journal/journalSlice";
import moodReducer from "../features/mood/moodSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    journals: journalReducer,
    moods: moodReducer,
  },
});
