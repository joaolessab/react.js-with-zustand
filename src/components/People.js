import React from 'react';
import { usePeopleStore } from '../store';

export default function People(){
    const people = usePeopleStore(state => state.people);

    return (
        <div>
            <p>We have {people.length} people in our store.</p>
            <ul>
                {people.map(person => (
                    <li key={person}>{person}</li>
                ))}
            </ul>
        </div>
    )
}