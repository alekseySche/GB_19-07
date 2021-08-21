import React, { useState, useRef, useEffect } from 'react';
import { AUTHORS } from '../../constants';
import { useInput } from '../../utils/useInput';

export const Form = ({ onSendMessage }) => {
  const inputRef = useRef();

  const { value, handleChange, reset } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSendMessage({
      id: Date.now(),
      text: value,
    });
    reset();
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" value={value} onChange={handleChange} />
      <input type="submit" />
    </form>
  )
}
