import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import itemsReducer from './items';
import cartItemReducer from './cart';
import reviewReducer from './review';

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const rootReducer = combineReducers({
    items: itemsReducer,
    session: sessionReducer,
    cart: cartItemReducer,
    reviews: reviewReducer
});

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore;