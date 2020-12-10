import { CHANGE_LIST_REPO, CHANGE_LIST_USER } from "../actions/type";

const changeReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_LIST_USER:
            return {
                ...state,
                listUser: action.payload
            }
            break;
            case CHANGE_LIST_REPO:
            return {
                ...state,
                listRepo: action.payload
            }
            break;
        default:
            return state;
    }
}
export default changeReducer;