import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/reset.css';
import './css/index.css';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
