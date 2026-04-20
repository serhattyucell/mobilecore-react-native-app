import { create } from 'zustand';

interface AppSettingsState {
  fullName: string;
  setFullName: (fullName: string) => void;
}

export const useAppSettingsStore = create<AppSettingsState>((set) => ({
  fullName: '',
  setFullName: (fullName: string) => set({ fullName }),
}));
