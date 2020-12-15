import React, { Fragment } from 'react';

import { POSITIONS } from '../../../constants';

import './addTaskForm.css';

const AddTaskForm = ({
    inputDate,
    inputTypeSport,
    inputKm,
    inputComment,
    handleInputDateChange,
    handleSelectChange,
    handleInputChange,
    handleTextAreaChange,
    handleAdd }) => {

    // const { name, text, position, date } = showData;
    return (
        <Fragment>
            <form className="form__content">
                {/* Date */}<br />
                <label>
                    Date:
            <input type="date" name="pubDate" value={inputDate} onChange={handleInputDateChange} />
                </label>

                {/* Select */}<br />
                <select value={inputTypeSport} onChange={handleSelectChange}>
                    {POSITIONS.map(({ id, value, title }) => (
                        <option key={id} value={value}>{title}</option>
                    ))}
                </select>

                {/* Input */}<br />
                <label>
                    km:
            <input type="text" name="name" value={inputKm} onChange={handleInputChange} />
                </label>

                {/* Textarea */}<br />
                <label htmlFor="text">Comments:</label>
                <textarea id="text" value={inputComment} onChange={handleTextAreaChange} />

                {/* Button */} <br />
                <button onClick={handleAdd}>Add</button>
            </form>
            {/* 
            <h2>{name}</h2>
            <h3>{text}</h3>
            <h3>{position}</h3>
            <h3>{date}</h3>
            */}


        </Fragment>
    )
}

export default AddTaskForm;
