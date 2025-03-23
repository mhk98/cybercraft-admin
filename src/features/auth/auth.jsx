import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Helper function to get the auth token
const getAuthToken = () => {
  return localStorage.getItem("token");  // You can use sessionStorage or other storage methods as well
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybercraft-backend-7r0v.onrender.com/api/v1/",

    // This will attach the token to every request that requires authorization
    prepareHeaders: (headers) => {
      const token = getAuthToken(); // Retrieve token from storage
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // Add token to headers if available
      }
      return headers;
    },
  }),
  tagTypes: ["auth"], 
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/user/login",
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: ["auth"], 
    }),

    userRegister: build.mutation({
      query: (registerData) => ({
        url: "/user/register",
        method: "POST",
        body: registerData,
      }),
      invalidatesTags: ["auth"], 
    }),

  }),
});

// Export hooks to use in your components
export const {
  useUserRegisterMutation,
  useUserLoginMutation,
} = authApi;