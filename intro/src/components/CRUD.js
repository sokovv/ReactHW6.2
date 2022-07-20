import React from 'react';
import CRUDForm from './CRUDForm';
import CRUDNote from './CRUDNote';

const serverURL = 'http://localhost:7777/notes';

export default class CRUD extends React.Component {
    constructor(props) {
        super(props);
        this.state = { notes: [] };
      }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(serverURL)
      .then(response => response.json())
      .then(result => {
        this.setState({
          notes: [...result]
        });
      });
  }

  postData = (id, content) => {
    const data = JSON.stringify({ id, content });
    fetch(serverURL, {
      method: 'POST',
      body: data,
    })
      .then(this.getData);
  }

  deleteData = (id) => {
    fetch(`${serverURL}/${id}`, {
      method: 'DELETE'
    })
      .then(this.getData);
  }

  render() {
    return (
      <div className="CRUD">
        <header className="CRUD-header">
          <h1>Notes</h1>
          <div className="CRUD-reload" onClick={this.getData} />
        </header>
        <ul className="CRUD-notes">
          {this.state.notes.map((note) =>
            <CRUDNote key={note.id} content={note.content}>
              <div
                className="CRUD-delete"
                onClick={() => this.deleteData(note.id)}
              />
            </CRUDNote>
          )}
        </ul>
        <CRUDForm addNote={this.postData} />
      </div>
    );
  }
}