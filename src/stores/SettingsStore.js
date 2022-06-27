import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
// DevTools: enables Redux extension to view our states in the browser
// Persist: allows to persist our state in our client storage (even if we refresh the app)

let settingsStore = (set) => ({
    dark: false,
    toogleDarkMode: () => 
        set((state) => ({ dark: !state.dark })),
})

settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: 'user_settings' });

const useSettingsStore = create(settingsStore);

export default useSettingsStore;