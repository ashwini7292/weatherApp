
const FETCH_WHEATHER = "FETCH_WHEATHER"


const initialState = {
    weatherinfo : {}
}
 
 const weatherInfo = (state = initialState ,action) => {
    switch(action.type){
        case FETCH_WHEATHER:
            return{
                ...state,
                weatherinfo: action.payload
            }
        default:
                return {...state}
    }
 }

 export default weatherInfo;