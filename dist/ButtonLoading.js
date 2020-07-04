import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @keyframes spinner {\n    0% { transform: rotate(0deg); }\n    50% { transform: rotate(1000deg); }\n    100% { transform: rotate(360deg); }\n  }\n\n  border: 5px solid ", ";\n  border-top: 5px solid ", ";\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  animation: spinner 2s linear infinite;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n  padding: .8rem 2rem;\n  border-radius: 7px;\n  line-height: 1.5;\n  text-align: center;\n  vertical-align: middle;\n  min-width: 185px;\n  min-height: 70px;\n  color: #fff;\n  background-color: ", ";\n  border: ", " solid 1px;\n\n  &:hover {\n    opacity: 0.7;\n    cursor: pointer;\n  }\n\n  &:active {\n    opacity: 0.9;\n  }\n\n  &:focus {\n    outline: 0;\n    box-shadow: 0 0 0 3px rgba(121,82,179,.25);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
var colors = {
  primary: '#7001e7',
  danger: '#9c0000'
};

var ButtonLoading = function ButtonLoading(_ref) {
  var title = _ref.title,
      type = _ref.type,
      loading = _ref.loading,
      styles = _ref.styles,
      spinnerBackground = _ref.spinnerBackground,
      spinnerColor = _ref.spinnerColor;
  return /*#__PURE__*/React.createElement(Button, {
    type: colors[type],
    style: styles
  }, loading ? /*#__PURE__*/React.createElement(Spinner, {
    spinnerBackground: spinnerBackground,
    spinnerColor: spinnerColor
  }) : title);
};

ButtonLoading.defaultProps = {
  title: 'Click in me',
  type: 'primary',
  loading: false,
  styles: {},
  spinnerBackground: '#f3f3f3',
  spinnerColor: '#3498db'
};
var Button = styled.button(_templateObject(), function (props) {
  return props.type;
}, function (props) {
  return props.type;
});
var Spinner = styled.div(_templateObject2(), function (props) {
  return props.spinnerBackground;
}, function (props) {
  return props.spinnerColor;
});
export default ButtonLoading;