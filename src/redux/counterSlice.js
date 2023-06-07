import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latestNews: [],
  popularNews: [],
  latestNewsError: "",
  popularNewsError: "",
  isLoading: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setLatestNews: (state, action) => {
      state.latestNews = action.payload;
    },
    setPopularNews: (state, action) => {
      state.popularNews = action.payload;
    },
    setLatestNewsError: (state, action) => {
      state.latestNewsError = action.payload;
    },
    setPopularNewsError: (state, action) => {
      state.popularNewsError = action.payload;
    },
    setLoadingData: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setLatestNews,
  setPopularNews,
  setLatestNewsError,
  setPopularNewsError,
  setLoadingData,
} = counterSlice.actions;

export default counterSlice.reducer;
