import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categories = createApi({
<<<<<<< HEAD
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/category" }),
    tagTypes: ["Categories"],
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => "/",
            providesTags: ["Categories"],
        }),
        getCategoryById: builder.query({
            query: (id) => `/${id}`,
        }),
        createCategory: builder.mutation({
            query: (body) => ({
                url: "",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Categories"],
        }),
        updateCategory: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Categories"],
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Categories"],
        }),
    }),
});

export const {
    useGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = categories;
=======
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/category" }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "/",
      providesTags: ["Categories"],
    }),
    getCategoryById: builder.query({
      query: (id) => `/${id}`,
    }),
    createCategory: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Categories"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categories;
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
