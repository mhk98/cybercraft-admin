import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Helper function to get the auth token
const getAuthToken = () => {
  return localStorage.getItem("token");  // Modify this based on your token storage logic
};

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybercraft-backend-7r0v.onrender.com/api/v1/",
    prepareHeaders: (headers) => {
      const token = getAuthToken();  // Fetch the token
      if (token) {
        // If the token exists, add it to the headers
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["contact"], // Define the tag type for invalidation and refetching
  endpoints: (build) => ({
    getAllContact: build.query({
      query: () => ({
        url: "/contact",
      }),
      providesTags: ["contact"],
      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),

   
    
  }),
});

export const {
  useGetAllContactQuery,
} = contactApi;