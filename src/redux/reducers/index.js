import { CHANGE_LIST_REPO, CHANGE_LIST_USER, SET_LOADING } from "../actions/type";

const changeReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_LIST_USER:
            return {
                ...state,
                listUser: action.payload
            }
            case CHANGE_LIST_REPO:
            return {
                ...state,
                listRepo: action.payload
            }
            case SET_LOADING :
                return {
                    ...state,
                    loading: action.payload
                }
        default:
            return state;
    }
}
export default changeReducer;