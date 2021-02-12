import { combineReducers } from "redux";
import weatherInfo from "./waether.reducer"

const appReducer = combineReducers({
    weatherInfo: weatherInfo
})

export default appReducer;