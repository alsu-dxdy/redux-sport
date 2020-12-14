import React, { Component, Fragment } from 'react';
import { POSITIONS } from '../../constants';
import './main.css';

class Form extends Component {
  state = {
    inputText: '',
    textareaText: '',
    selectText: '',
    inputDate: '',
    showData: {
      name: '',
      text: '',
      position: '',
      date: '',
    }
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      inputText: value,
    })
  }

  handleTextareaChange = ({ target: { value } }) => {
    this.setState({
      textareaText: value,
    })
  }

  handleSelectChange = ({ target: { value } }) => {
    this.setState({
      selectText: value,
    })
  }

  handleInputDateChange = ({ target: { value } }) => {
    this.setState({
      inputDate: value,
    })
  }

  handleAdd = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText, inputDate } = this.state;
    this.setState({
      inputText: '',
      textareaText: '',
      selectText: '',
      inputDate: '',
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
        date: inputDate,
      }
    })
  }

  render() {
    const { inputText, textareaText, selectText, inputDate, showData } = this.state;
    const { name, text, position, date } = showData;

    return (
      <Fragment>
        <div className="form__content">
          <form>
            {/* Date */}<br />
            <label>
              Date:
            <input type="date" name="pubDate" value={inputDate} onChange={this.handleInputDateChange} />
            </label>

            {/* Select */}<br />
            <select value={selectText} onChange={this.handleSelectChange}>
              {POSITIONS.map(({ id, value, title }) => (
                <option key={id} value={value}>{title}</option>
              ))}
            </select>

            {/* Input */}<br />
            <label>
              km:
            <input type="text" name="name" value={inputText} onChange={this.handleInputChange} />
            </label>

            {/* Textarea */}<br />
            <label htmlFor="text">Comments:</label>
            <textarea id="text" value={textareaText} onChange={this.handleTextareaChange} />


            {/* Button */} <br />
            <button onClick={this.handleAdd}>Add</button>
          </form>
        </div>
        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
        <h3>{date}</h3>
      </Fragment>
    );
  }
}

export default Form;
