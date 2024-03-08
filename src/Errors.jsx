import { Component } from "react";
import PropTypes from "prop-types";

export default class Errors extends Component {
  state = {
    error: false,
  };

  static getDerivedStateFromError(error) {
    this.setState({ error });
    return {
      error: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.error ? <div>Some error</div> : this.props.children}
      </div>
    );
  }
}

Errors.propTypes = {
  children: PropTypes.node,
};
