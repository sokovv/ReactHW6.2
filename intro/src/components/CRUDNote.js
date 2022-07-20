import React from 'react';

export default class CRUDNote extends React.Component {
    render() {
      return (
        <li className="CRUDNote">
          <div className="CRUDNote-container">
            <div className="CRUDNote-content">
              {this.props.content}
            </div>
            {this.props.children}
          </div>
        </li>
      );
    }
  }