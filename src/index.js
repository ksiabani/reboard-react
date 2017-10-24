import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store, {history} from './store/store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('#root')
);

registerServiceWorker();
