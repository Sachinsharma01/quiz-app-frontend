import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./quiz";
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Main/>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
