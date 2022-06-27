import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
// DevTools: enables Redux extension to view our states in the browser
// Persist: allows to persist our state in our client storage (even if we refresh the app)

let store = (set) => ({
    people: ['John Doe', 'Jane Doe'],
    addPerson: (person) =>
        set((state) => ({ people: [...state.people, person] })),
})

store = devtools(store);
store = persist(store, { name: 'user_settings' });

const useStore = create(store);

export default useStore;