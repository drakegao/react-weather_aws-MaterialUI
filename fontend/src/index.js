import React from 'react';
import ReactDOM from 'react-dom';
import Immutable, { Map } from 'immutable';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootEpic } from './duck';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const epicMiddleware = createEpicMiddleware();

// Set up Redux DevTool compose enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composeEnhancers =
//   typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//           serialize: {
//               immutable: Immutable
//           }
//       }) : compose;


const store = createStore(rootReducer, Map({}),
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
  );

epicMiddleware.run(rootEpic);

//const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));
//const store = createStore(rootReducer, Map({}), enhancer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
