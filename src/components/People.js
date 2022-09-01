import React from 'react';
import usePeopleStore from '../stores/PeopleStore';

export default function People(){
    const people = usePeopleStore(state => state.people);
    const test = usePeopleStore(state => state.test);

    return (
        <div>
            <p>We have {people.length} people in our store.</p>
            <ul>
                {people.map(person => (
                    <li key={person}>{person}</li>
                ))}
            </ul>
            <br/>
            <p>Test:</p>
            <p>{JSON.stringify(test)}</p> 
        </div>
    )
}