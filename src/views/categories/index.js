import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import * as actions from "../../actions";
import withAuthorization from "../../components/withAuthorization";
import CategoryList from "./CategoryList";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  submitAction = event => {
    const { addCategory } = this.props;
    event.preventDefault();
    addCategory(this.state.name);
    this.setState({ name: "" });
  };
  componentWillMount() {
    this.props.fetchCategories();
  }
  render() {
    const { categories } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.submitAction}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.name}
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary float-right">submit</button>
              </div>
            </form>
          </div>
        </div>
        <br />
        <CategoryList categories={categories} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesState.categories
});
const authCondition = authUser => !!authUser;
export default compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    actions
  )
)(Categories);
