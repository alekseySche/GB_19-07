import React, { useState, useRef } from 'react';
import { AUTHORS } from '../../constants';

export const Form = ({ onSendMessage }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const handleChange = (e) => {
    setValue(e.target.value);
}

    const handleSubmit = (e) => {
    e.preventDefault();

    onSendMessage({
    author: AUTHORS.human,
    id: Date.now(),
    text: value,
    });
    setValue('');
}

    return (
    <form onSubmit={handleSubmit}>
    <input ref={inputRef} type="text" value={value} onChange={handleChange} />
    <input type="submit" />
    </form>
)
}