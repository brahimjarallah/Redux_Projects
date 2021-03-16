import Axios from "axios"

export const fetchPosts = () => async (dispatch, getState) => {

    const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
   
    dispatch({
          type: 'FETCH_POSTS',
          payload: response.data
    })
}

