import {REMOVE_TOKEN, UPDATE_TOKEN} from "../actionTypes";

const initialState = {
    token: '',
    isLoggedIn: false
};

const tokenReducer:any = (state:any = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_TOKEN:
            console.log(action.token + " IN REDUX")
            return {
                ...state,
                token: action.token,
                isLoggedIn: true
            };
        case REMOVE_TOKEN:
            return {
                ...state,
                token: '',
                isLoggedIn: false
            };

        default:
            return state;

    }
}

export default tokenReducer;