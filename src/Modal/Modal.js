import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: true
    };
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isClosed: false })}>
          Open modal
        </button>

        {!this.state.isClosed && (
          <div className="modal">
            <div className="modal-body">
              <h1>Modal</h1>
              <p>Awesome modal!</p>
              <button onClick={() => this.setState({ isClosed: true })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
