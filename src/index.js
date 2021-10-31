import React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import DialogDemo from './DialogModal';

const element = (
  <StyledEngineProvider injectFirst>
    <DialogDemo />
  </StyledEngineProvider>
);
ReactDOM.render(element, document.querySelector('#root'));
