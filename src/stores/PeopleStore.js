import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
// DevTools: enables Redux extension to view our states in the browser
// Persist: allows to persist our state in our client storage (even if we refresh the app)

let peopleStore = (set) => ({
    people: ['John Doe', 'Jane Doe'],
    addPerson: (person) =>
        set((state) => ({ people: [...state.people, person] })),
})

const usePeopleStore = create(devtools(peopleStore));

export default usePeopleStore;