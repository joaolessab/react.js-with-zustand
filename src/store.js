import create from 'zustand';

const store = create((set) => ({
    people: ['John Doe', 'Jane Doe'], 
}));