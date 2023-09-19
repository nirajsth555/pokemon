import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { persistStore } from 'redux-persist'

import rootReducer from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga);

export default store;
