import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App title="Vivek Singh App" />, document.getElementById('root'));

serviceWorker.unregister();
