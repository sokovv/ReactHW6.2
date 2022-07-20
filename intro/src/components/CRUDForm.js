import React from 'react';

import { v4 as uuidv4 } from "uuid";

export default class CRUDForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
      }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(uuidv4(), this.state.text);
    this.setState({ text: '' });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className="CRUDForm" onSubmit={this.handleSubmit}>
        <label>
          <div>
            <h2>New Note</h2>
          </div>
          <textarea
            className="CRUDForm-textarea"
            onChange={this.handleChange}
            name="text"
            value={this.state.text}
            required
          />
        </label>
        <button className="CRUDForm-button" />
      </form>
    );
  }
}