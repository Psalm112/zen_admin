import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
      serializableCheck: {
        ignoredActions: [
          "products/fetchAll/fulfilled",
          "products/fetchById/fulfilled",
        ],
        ignoredPaths: ["products.currentProduct", "products.products"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
