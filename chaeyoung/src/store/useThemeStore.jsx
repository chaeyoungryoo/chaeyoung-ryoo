import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "light", // 기본 상태
  toggleTheme: () => set((state) => ({
    theme: state.theme === "light" ? "dark" : "light", // 상태 변경
  })),
}));

export default useThemeStore;
