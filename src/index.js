import React from 'react';
import ReactDOM from 'react-dom';
import ButtonLoading from './lib/ButtonLoading'

ReactDOM.render(
  <div>
    <ButtonLoading />
    <ButtonLoading loading />
    <ButtonLoading color='danger' />
    <ButtonLoading color='danger' loading />
  </div>,
  document.getElementById('root')
);
