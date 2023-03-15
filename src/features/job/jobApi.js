import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/api/v1/job",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),

    jobApply: builder.mutation({
      query: (data) => ({
        url: "/api/v1/job",
        method: "PATCH",
        body: data,
      }),
    }),

    jobQuestion: builder.mutation({
      query: (data) => ({
        url: "/api/v1/apply",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ASK"],
    }),

    jobReplay: builder.mutation({
      query: (data) => ({
        url: "/api/v1/reply",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Reply"],
    }),

    getJobs: builder.query({
      query: () => ({
        url: "/api/v1/job",
      }),
      providesTags: ["Jobs"],
    }),

    JobById: builder.query({
      query: (id) => ({
        url: `/api/v1/job/${id}`,
      }),
      providesTags: ["ASK", "Reply"],
    }),

    appliedJobByEmailMatch: builder.query({
      query: (email) => ({
        url: `/api/v1/apply/${email}`,
      }),
    }),
  }),
});

export const {
  usePostJobMutation,
  useGetJobsQuery,
  useJobByIdQuery,
  useJobApplyMutation,
  useAppliedJobByEmailMatchQuery,
  useJobQuestionMutation,
  useJobReplayMutation,
} = jobApi;
