//redux createStory == legacy_createStore
import { legacy_createStore } from "redux";
import reducers from "./reducers";

export const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
