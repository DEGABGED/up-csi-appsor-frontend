import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/AppFormik';
import initialState from './components/container/helper/appstate';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App values={initialState} />, document.getElementById('root'));
registerServiceWorker();
