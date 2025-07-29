// src/features/journals/journalSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import journalService from "./journalService";

// Get token from state
const getToken = (thunkAPI) => thunkAPI.getState().auth.user.token;

const initialState = {
  journals: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// Get all journals
export const getJournals = createAsyncThunk(
  "journals/getAll",
  async (_, thunkAPI) => {
    try {
      return await journalService.getJournals(getToken(thunkAPI));
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

// Create journal
export const createJournal = createAsyncThunk(
  "journals/create",
  async (journalData, thunkAPI) => {
    try {
      return await journalService.createJournal(journalData, getToken(thunkAPI));
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

// Update journal
export const updateJournal = createAsyncThunk(
  "journals/update",
  async ({ id, journalData }, thunkAPI) => {
    try {
      return await journalService.updateJournal(id, journalData, getToken(thunkAPI));
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

// Delete journal
export const deleteJournal = createAsyncThunk(
  "journals/delete",
  async (journalId, thunkAPI) => {
    try {
      return await journalService.deleteJournal(journalId, getToken(thunkAPI));
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);

const journalSlice = createSlice({
  name: "journals",
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
      .addCase(getJournals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getJournals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.journals = action.payload;
      })
      .addCase(getJournals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createJournal.fulfilled, (state, action) => {
        state.journals.push(action.payload);
      })
      .addCase(updateJournal.fulfilled, (state, action) => {
        const index = state.journals.findIndex(
          (t) => t._id === action.payload._id
        );
        if (index !== -1) state.journals[index] = action.payload;
      })
      .addCase(deleteJournal.fulfilled, (state, action) => {
        state.journals = state.journals.filter(
          (journal) => journal._id !== action.payload.id
        );
      });
  },
});

export const { reset } = journalSlice.actions;
export default journalSlice.reducer;
