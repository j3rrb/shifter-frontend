import { ILog } from "@/interfaces/log.interface";
import { ICreateUserForm, ILoginForm } from "@/interfaces/user.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    createUser: builder.mutation<any, ICreateUserForm>({
      query: ({ name, password, username }) => ({
        url: "/user",
        method: "POST",
        body: { name, password, username },
      }),
    }),
    login: builder.mutation<any, ILoginForm>({
      query: (body) => ({
        url: "/auth",
        body,
        method: "POST",
      }),
    }),
    getLogs: builder.query<ILog[], { limit?: number; page?: number }>({
      query: ({ limit, page }) => ({
        url: "/user/logs",
        params: {
          limit,
          page,
        },
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetLogsQuery,
  useLazyGetLogsQuery,
  useLoginMutation,
} = userApi;
