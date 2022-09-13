import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGreetingAsync = createAsyncThunk('fetchGreeting', async () => {
  const response = await fetch('http://localhost:3000/api/v1/greetings');
  const greeting = await response.json();
  return greeting.message;
});

export const greetingSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: '',
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getGreetingAsync.fulfilled]: (state, action) => action.payload,
  },
});

export default greetingSlice.reducer;
