import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from "./store/store";



const store = new Store();

export const Context = createContext({
    store,
})

ReactDOM.render(
    <Context.Provider value={{
        store
    }}>
        <App />
    </Context.Provider>,


    document.getElementById('root')
);
