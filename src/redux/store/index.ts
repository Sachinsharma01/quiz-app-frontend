import {createStore} from "redux";
import rootReducer from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage
}

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, composeWithDevTools());
const persistor = persistStore(store)

export  { store , persistor};