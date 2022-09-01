import React, { useRef } from 'react';
import usePeopleStore from '../stores/PeopleStore';

export default function Input(){
    const inputRef = useRef();
    
    const addPerson = usePeopleStore(state => state.addPerson);
    const editTest = usePeopleStore(state => state.editTest);

    const add = () => {
        addPerson(inputRef.current.value);
        inputRef.current.value = '';
    }

    const edit = () => {
        editTest('test', 'test2');
    }

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={add}>Add Person</button>
            <br/>
            <button onClick={edit}>Edit Test</button>
        </div>
    )
}