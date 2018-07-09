import React, { Component } from "react";
import { db } from "../../firebase";

const INITIAL_STATE = {
  title: "",
  content: ""
};
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }
  onSubmit = event => {
    event.preventDefault();
    const { title, content } = this.state;
    db.doCreateProduct(title, content);
  };
  render() {
    return (
      <div>
        <h2>add product</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Title"
              onChange={event =>
                this.setState(byPropKey("title", event.target.value))
              }
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Content"
              onChange={event =>
                this.setState(byPropKey("content", event.target.value))
              }
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddItem;
