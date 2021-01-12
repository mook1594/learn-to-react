import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        나의 새롭고 멋진 컴포넌트 {name} <br />
        children {children} <br />
        {favoriteNumber}
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
