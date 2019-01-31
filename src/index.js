import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// For now, the AppFormik component will be used just to keep the old reference
//    while making the transition
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Prompts the user before closing the window (in case form data is present)
window.onbeforeunload = (evt) => {
  localStorage.removeItem('form-values');
  return true;
};
