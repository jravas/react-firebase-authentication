import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategory, updateCategory } from "../redux/actions";

const INITIAL_STATE = { name: "" };

class CategoryEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.submitAction = this.submitAction.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  submitAction(event) {
    const { id } = this.props.match.params;
    const { updateCategory } = this.props;
    const { name } = this.state;
    event.preventDefault();
    updateCategory(id, name);
  }
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
                  name="name"
                  value={name}
                  onChange={this.handleInput}
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
