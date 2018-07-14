import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategory, updateCategory } from "../redux/actions";

class CategoryEdit extends Component {
  state = {
    name: ""
  };
  submitAction = event => {
    const { id } = this.props.match.params;
    const { updateCategory } = this.props;
    const { name } = this.state;
    event.preventDefault();
    updateCategory(id, name);
  };
  componentWillMount() {
    const { fetchCategory } = this.props;
    const { id } = this.props.match.params;
    fetchCategory(id);
  }
  componentDidUpdate(prevProps) {
    const { name } = this.props.category;
    if (this.props.category !== prevProps.category) {
      this.setState({ name: name });
    }
  }

  render() {
    const { name } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.submitAction}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary float-right">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const actions = { fetchCategory, updateCategory };

const mapStateToProps = state => ({
  category: state.categoriesState.categories
});

export default connect(
  mapStateToProps,
  actions
)(CategoryEdit);
