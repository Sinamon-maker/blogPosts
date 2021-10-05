import * as types from '../types'
import axios from 'axios'

export const getPosts = () =>async dispatch => {
const res = await axios.get('https://simple-blog-api.crew.red/posts')
dispatch({
  type: types.GET_POSTS,
  payload: res.data
})
}


export const getPost = (postId) => async (dispatch) => {
  const res = await axios.get(
    `https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`
  );
  dispatch({
    type: types.GET_POST,
    payload: res.data,
  });
};


