import * as types from '../types'
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  posts:[],
  post:{},
  loading: false,
  error: null,
  message: ''
}
export const postReducer = (state = initialState, action) =>{
  switch (action.type) {

        case HYDRATE:
            return {
                ...state,
                ...action.payload.postReducer,

            };
    case types.TICK:
      return {
        ...state,
        message: action.payload,
        };
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case types.GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}