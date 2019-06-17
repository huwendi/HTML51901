import React from 'react';
import ReactDOM from 'react-dom';
//根组件
import App from './App';
import ErrorBoundary from './components/error-boundary'
import store from './store'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <App />
        </Provider>
    </ErrorBoundary>, 
    document.getElementById('root')
);


// serviceWorker.register();
serviceWorker.unregister();
