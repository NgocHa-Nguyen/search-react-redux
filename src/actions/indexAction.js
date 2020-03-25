import * as types from "../types/indexType";
import { request } from "../unitls/apiRequest";

export const getDataList = () => {
    return async dispatch => {
      try {
        let resp;
        resp = await request("jsonplaceholder.typicode.com/posts", "get");
        dispatch(setFetchData(resp.data))
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  

  export const setFetchData = fetchData => ({
    type : types.GET_DATA,
    data : fetchData
  })