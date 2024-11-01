import { createApi } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../helpers/config/envConfig";
import { axiosBaseQuery } from "../../../helpers/axios/axiosBaseQuery";
import { tagTypesList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "Api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
