import React, { useState, Fragment } from 'react';
import { POSITIONS } from '../../../constants';

import './addTaskForm.css';

const AddTaskForm = (props) => {
    const [inputDate, setInputDate] = useState('');
    const [selectText, setSelectText] = useState('');
    const [inputText, setInputText] = useState('');
    const [textAreaText, setTextAreaText] = useState('');
    const [showData, setShowData] = useState({
        name: '',
        text: '',
        position: '',
        date: '',
    });

    function handleInputDateChange({ target: { value } }) {
        setInputDate(value);
    }

    function handleSelectChange({ target: { value } }) {
        setSelectText(value);
    }

    function handleInputChange({ target: { value } }) {
        setInputText(value);
    }

    function handleTextareaChange({ target: { value } }) {
        setTextAreaText(value);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        setShowData({
            name: inputText,
            text: textAreaText,
            position: selectText,
            date: inputDate,
        });
        setInputDate('');
        setSelectText('');
        setInputText('');
        setTextAreaText('');
    }
    const { name, text, position, date } = showData;
    return (
        <Fragment>
            <form className="form__content">
                {/* Date */}<br />
                <label>
                    Date:
            <input type="date" name="pubDate" value={inputDate} onChange={handleInputDateChange} />
                </label>

                {/* Select */}<br />
                <select value={selectText} onChange={handleSelectChange}>
                    {POSITIONS.map(({ id, value, title }) => (
                        <option key={id} value={value}>{title}</option>
                    ))}
                </select>

                {/* Input */}<br />
                <label>
                    km:
            <input type="text" name="name" value={inputText} onChange={handleInputChange} />
                </label>

                {/* Textarea */}<br />
                <label htmlFor="text">Comments:</label>
                <textarea id="text" value={textAreaText} onChange={handleTextareaChange} />

                {/* Button */} <br />
                <button onClick={handleAdd}>Add</button>
            </form>

            <h2>{name}</h2>
            <h3>{text}</h3>
            <h3>{position}</h3>
            <h3>{date}</h3>
        </Fragment>
    )
}

export default AddTaskForm;