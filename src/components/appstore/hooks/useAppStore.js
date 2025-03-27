import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { apps as initialApps } from '../data/apps';

const useAppStore = create(
  persist(
    (set) => ({
      apps: initialApps,
      addApp: (app) => set((state) => ({
        apps: [...state.apps, { id: Date.now().toString(), ...app }]
      })),
      updateApp: (id, updates) => set((state) => ({
        apps: state.apps.map(app => 
          app.id === id ? { ...app, ...updates } : app
        )
      })),
      removeApp: (id) => set((state) => ({
        apps: state.apps.filter(app => app.id !== id)
      }))
    }),
    {
      name: 'app-store'
    }
  )
);

export default useAppStore;