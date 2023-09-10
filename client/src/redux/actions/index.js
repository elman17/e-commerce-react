import { configureStore } from '@reduxjs/toolkit';
import { reviewSlice } from "./reducer/reviewsReducer";

export const store = configureStore({
  reducer: {
    reviews: reviewSlice.reducer, 
  },
});
