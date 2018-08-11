import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import initialState from './components/container/helper/appstate';
import registerServiceWorker from './registerServiceWorker';

// For now, the AppFormik component will be used just to keep the old reference
//    while making the transition
ReactDOM.render(<App values={initialState} />, document.getElementById('root'));
registerServiceWorker();
