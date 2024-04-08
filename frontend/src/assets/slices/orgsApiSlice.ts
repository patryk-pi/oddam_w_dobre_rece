import { ORGS } from "../constants";
import { apiSlice } from "./apiSlice";

export const orgsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrgs: builder.query({
            query: (cursor = "") => ({
                url: `${ORGS}?cursor=${cursor}`,
            }),
            providesTags: ["Orgs"],
        }),
        getAllOrgs: builder.query({
            query: () => ({
                url: ORGS,
            }),
            providesTags: ["Orgs"],
        }),
    }),
});

export const { useGetOrgsQuery, useGetAllOrgsQuery } = orgsApiSlice;
