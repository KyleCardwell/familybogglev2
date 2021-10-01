import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider, createTheme  } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import logger from 'redux-logger'
// import { createMuiTheme } from '@material-ui/core';

const store = createStore(reducer, applyMiddleware(logger))

const theme = createTheme();

const useStyles = makeStyles((theme) => {
  root: {
    // some css that access to theme
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

