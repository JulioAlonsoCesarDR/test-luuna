import { createStore } from "redux";
import reducer  from "./reducers";

const INITIAL_STATE = {
    listUser: [],
    listRepo:[],
    loading: false,
}

export const store = createStore( reducer, INITIAL_STATE, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());