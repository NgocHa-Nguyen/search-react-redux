import { GET_DATA, DETAIL_USER, SUM} from "../types/indexType";

const initialState = {
    APIdata: [],
    currenUser: {},
    result : 0
}
export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_DATA: {
        const newState = {...state}
        newState.APIdata = action.data
        return {...state, APIdata: newState.APIdata};
      }
      case DETAIL_USER: {
        const newState = {...state}
        let APIdata = newState.APIdata;
        let currenUser = APIdata.filter(user => user.id === action.id)[0];
        console.log(currenUser);
        return { ...state, currenUser };
      }
      case SUM: {
        console.log(action);
         const newState = {...state};
        newState.result = state.result +1;
        return(newState);
      }
      default:
        return state;
    };
}
 