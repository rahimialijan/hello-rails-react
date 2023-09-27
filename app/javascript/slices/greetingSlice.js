import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessage = createAsyncThunk(
  "greeting/fetchmessage",
  async () => {
    const response = await axios.get(
      "http://localhost:3000/api/random_greeting"
    );
    return response.data;
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState: { greeting: "", status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.greeting = action.payload.greeting;
      })
      .addCase(fetchMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
