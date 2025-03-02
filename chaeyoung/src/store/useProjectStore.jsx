import { create } from "zustand";

const useProjectStore = create((set) => ({
  filters: {
    techStack: "", // React, Vue 등
    projectType: "", // 웹앱, 이커머스 등
    status: "", // 완료, 진행 중
  },
  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),
  resetFilters: () =>
    set({
      filters: { techStack: "", projectType: "", status: "" },
    }),
}));

export default useProjectStore;
