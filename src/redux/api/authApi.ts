import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi'

const AUTH_URL = '/auth'
const authApi = baseApi.injectEndpoints({
  endpoints: (build:any) => ({
    signin: build.mutation({
      query: (data:any) => ({
        url : `${AUTH_URL}/signin`,
        method: "POST",
        data
      }),
      invalidatesTags:[tagTypes.user]
    }),
    signup: build.mutation({
      query: (data:any) => ({
        url : `${AUTH_URL}/signup`,
        method: "POST",
        data
      }),
      invalidatesTags:[tagTypes.user]
    }),

    changePassword: build.mutation({
      query: (data:any) => ({
        url : `${AUTH_URL}/change-password/${data.id}`,
        method: "PATCH",
        data:data.body
      }),
      invalidatesTags:[tagTypes.user]
    }),
  }),
  overrideExisting: false,


})

export const { useSigninMutation,useSignupMutation ,useChangePasswordMutation} = authApi;