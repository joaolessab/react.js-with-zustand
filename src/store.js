import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
// DevTools: enables Redux extension to view our states in the browser
// Persist: allows to persist our state in our client storage (even if we refresh the app)

let settingsStore = (set) => ({
    dark: false,
    toogleDarkMode: () => 
        set((state) => ({ dark: !state.dark })),
})

let peopleStore = (set) => ({
    people: ['John Doe', 'Jane Doe'],
    addPerson: (person) =>
        set((state) => ({ people: [...state.people, person] })),
})

settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: 'user_settings' });

peopleStore = devtools(peopleStore);

export const useSettingStore = create(settingsStore);
export const usePeopleStore = create(peopleStore);