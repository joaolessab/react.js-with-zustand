import React from 'react';
import useStore from '../store';

export default function People(){
    const people = useStore(state => state.people);

    return (
        <div>
            <p>We have {people.length} people in our store.</p>
            <ul>
                {people.map(person => (
                    <li>{person}</li>
                ))}
            </ul>
        </div>
    )
}