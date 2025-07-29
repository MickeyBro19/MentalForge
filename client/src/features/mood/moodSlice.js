// src/features/mood/moodSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moodService from "./moodService";

const getToken = (thunkAPI) => thunkAPI.getState().auth.user.token;

const initialState = {
  moods: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// CREATE
export const createMood = createAsyncThunk(
  "moods/create",
  async (moodData, thunkAPI) => {
    try {
      return await moodService.createMood(moodData, getToken(thunkAPI));
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// GET ALL
export const getMoods = createAsyncThunk("moods/getAll", async (_, thunkAPI) => {
  try {
    return await moodService.getMoods(getToken(thunkAPI));
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
  }
});

// UPDATE
export const updateMood = createAsyncThunk(
  "moods/update",
  async ({ id, moodData }, thunkAPI) => {
    try {
      return await moodService.updateMood(id, moodData, getToken(thunkAPI));
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// DELETE
export const deleteMood = createAsyncThunk("moods/delete", async (id, thunkAPI) => {
  try {
    return await moodService.deleteMood(id, getToken(thunkAPI));
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
  }
});

const moodSlice = createSlice({
  name: "moods",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoods.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.moods = action.payload;
      })
      .addCase(getMoods.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createMood.fulfilled, (state, action) => {
        state.moods.push(action.payload);
      })
      .addCase(updateMood.fulfilled, (state, action) => {
        const index = state.moods.findIndex((m) => m._id === action.payload._id);
        if (index !== -1) state.moods[index] = action.payload;
      })
      .addCase(deleteMood.fulfilled, (state, action) => {
        state.moods = state.moods.filter((m) => m._id !== action.payload.id);
      });
  },
});

export const { reset } = moodSlice.actions;
export default moodSlice.reducer;
