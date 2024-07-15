import { useState } from 'react';

export default function PeopleList() {
    let [name, setName] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        setName(formData.get('name'));
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' />
                <input type='submit' value='Submit' />

            </form>

            <p>{name}</p>
        </>
    );
}