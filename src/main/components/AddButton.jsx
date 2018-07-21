import React, { Component } from "react";
import Plus from "@/main/images/plus.svg";

export default class AddButon extends Component {
  openModal(e) {
    e.preventDefault();
    this.props.openModal({ modal: true });
  }
  render() {
    return (
      <div className="add-button" onClick={this.openModal.bind(this)}>
        <img src={Plus} alt="Add icon" />
      </div>
    );
  }
}
