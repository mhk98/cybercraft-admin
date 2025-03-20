import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Helper function to get the auth token
const getAuthToken = () => {
  return localStorage.getItem("token");  // Modify this based on your token storage logic
};

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
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
    createContact: build.mutation({
      query: (data) => ({
        url: "/contact/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["contact"],  // Invalidate the product tag after this mutation
    }),

    deleteContact: build.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],  // Invalidate the product tag after deletion
    }),

    updateContact: build.mutation({
      query: ({ id, data }) => ({
        url: `/contact/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["contact"],  // Invalidate the product tag after this mutation
    }),

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
  useCreateContactMutation,
  useGetAllContactQuery,
  useDeleteContactMutation,
  useUpdateContactMutation
} = contactApi;