import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const COMPANY_URL = "/project";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    addCompany: build.mutation({
        query: (data:any) => ({
          url : `${COMPANY_URL}`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.company]
      }),

    companies: build.query({
      query: (arg: any) => {
        return {
          url: COMPANY_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          company:response,
          meta,
        };
      },
      providesTags: [tagTypes.company],
    }),

    companyById: build.query({
      query: (id: string) => ({
        url: `${COMPANY_URL}/${id}`,
        method: "GET"

      }),
      providesTags: [tagTypes.company]
    }),

    updateCompany: build.mutation({
      query: (data: any) => ({
        url: `${COMPANY_URL}/${data.id}`,
        method: "PATCH",
        data: data.body
      }),
      invalidatesTags: [tagTypes.company]
    }),


    deleteCompany: build.mutation({
      query: (id: string) => ({
        url: `${COMPANY_URL}/${id}`,
        method: "DELETE"

      }),
      invalidatesTags: [tagTypes.company]
    }),

  }),
});

export const { useAddCompanyMutation,useCompaniesQuery,useLazyCompanyByIdQuery,useUpdateCompanyMutation,useDeleteCompanyMutation } = adminApi;
