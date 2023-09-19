import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['generation', 'team']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    // reducer: rootReducer,
    reducer: persistedReducer,
    middleware: () => [sagaMiddleware]
});
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga);

export default store;
