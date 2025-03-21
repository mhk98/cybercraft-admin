// import cartSlice from "@/Redux-Thunk/reducers/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "../features/contact/contact";
import { authApi } from "../features/auth/auth";










const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [authApi.reducerPath]: authApi.reducer,

   
  

  
  
  
 
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        contactApi.middleware,
        authApi.middleware,
      
    ),
});

export default store;