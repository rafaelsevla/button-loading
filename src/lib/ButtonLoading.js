import React from 'react';
import styled from 'styled-components'

const colors = {
  primary: '#7001e7',
  danger: '#9c0000'
}

const ButtonLoading = ({ title, color, loading, styles, spinnerBackground, spinnerColor }) => (
  <Button color={colors[color]} style={styles}>
    {loading ? (
        <Spinner
          spinnerBackground={spinnerBackground}
          spinnerColor={spinnerColor}
        />
      ) : title
    }
  </Button>
);

ButtonLoading.defaultProps = {
  title: 'Click in me',
  color: 'primary',
  loading: false,
  styles: {},
  spinnerBackground: '#f3f3f3',
  spinnerColor: '#3498db'
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: .8rem 2rem;
  border-radius: 7px;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  min-width: 185px;
  min-height: 70px;
  color: #fff;
  background-color: ${props => props.color};
  border: ${props => props.type} solid 1px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:active {
    opacity: 0.9;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px rgba(121,82,179,.25);
  }
`

const Spinner = styled.div`
  @keyframes spinner {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(1000deg); }
    100% { transform: rotate(360deg); }
  }

  border: 5px solid ${props => props.spinnerBackground};
  border-top: 5px solid ${props => props.spinnerColor};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spinner 2s linear infinite;
`

export default ButtonLoading;
