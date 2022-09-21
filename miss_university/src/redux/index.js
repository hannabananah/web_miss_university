import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// 리듀서
import { langReducer } from "./reducers/langReducer";

import counter from "./module/counter";

const rootReducer = combineReducers({langData: langReducer,counter})

const store = createStore(rootReducer);

export default store;







