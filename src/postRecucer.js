const initialState = []
const postRecucer = (state = initialState, action) => {
    // console.log(action.type);
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state
    }
}
export default postRecucer
