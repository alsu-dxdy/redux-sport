import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
    handleAdd,
}) => {

    return (
        <form className="form__content">
            {/* Date */}<br />
            <label>
                Date:
            <Field
                    component="input"
                    type="date"
                    name="dateOfTask"
                    value={inputDate}
                    onChange={handleInputDateChange} />
            </label>

            {/* Select */}<br />
            <label>
                Type of sport:
            <Field
                    component="select"
                    name="typeOfTask"
                    value={inputTypeSport}
                    onChange={handleSelectChange}>
                    {POSITIONS.map(({ id, value, title }) => (
                        <option key={id} value={value}>{title}</option>
                    ))}
                </Field>
            </label>

            {/* Input */}<br />
            <label>
                Distance, km:
            <Field
                    component="input"
                    type="text"
                    name="distanceOfTask"
                    value={inputKm}
                    onChange={handleInputChange} />
            </label>

            {/* Textarea */}<br />
            <label htmlFor="text">Comments:
            <Field
                    component="textarea"
                    name="commentOfTask"
                    value={inputComment}
                    onChange={handleTextAreaChange}
                    id="text" />
            </label>

            {/* Button */} <br />
            <button onClick={handleAdd}>Add</button>
        </form>
    )
}

const AddTaskReduxForm = reduxForm({ form: 'addTask' })(AddTaskForm);



export default AddTaskReduxForm;
