import { GET_DATA } from "../types/indexType";

const initialState = {
    APIdata: []
}
export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_DATA: {
        const newState = {...state}
        newState.APIdata = action.data
        return {...state, APIdata: newState.APIdata};
      }
      default:
        return state;
    }
}
 