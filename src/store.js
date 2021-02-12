import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";

//--reducers
import appReducer from "./reducers";


//--middleware
const middleware = applyMiddleware(thunk);

//--store
const store = createStore(appReducer,middleware)

export default store;

