import { ORGS } from "../constants";
import { apiSlice } from "./apiSlice";

export const orgsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrgs: builder.query({
            query: () => ORGS,
            providesTags: ["Orgs"],
        }),
    }),
});

export const { useGetOrgsQuery } = orgsApiSlice;
