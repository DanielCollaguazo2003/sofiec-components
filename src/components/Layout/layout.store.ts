import { create } from 'zustand';

export interface AppLayoutStoreState {
  isMobileSidebarOpen: boolean;
  isDesktopSidebarCollapsed: boolean;
  openMobileSidebar: () => void;
  closeMobileSidebar: () => void;
  toggleMobileSidebar: () => void;
  toggleDesktopSidebar: () => void;
}

export const useAppLayoutStore = create<AppLayoutStoreState>((set) => ({
  isMobileSidebarOpen: false,
  isDesktopSidebarCollapsed: false,
  openMobileSidebar: () => set({ isMobileSidebarOpen: true }),
  closeMobileSidebar: () => set({ isMobileSidebarOpen: false }),
  toggleMobileSidebar: () => set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
  toggleDesktopSidebar: () => set((state) => ({ isDesktopSidebarCollapsed: !state.isDesktopSidebarCollapsed })),
}));
