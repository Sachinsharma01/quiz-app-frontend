import {REMOVE_TOKEN, UPDATE_TOKEN} from "../actionTypes";

const initialState = {
    token: ''
};

const tokenReducer:any = (state:any = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_TOKEN:
            console.log(action.token + " IN REDUX")
            return {
                ...state,
                token: action.token,
            };
        case REMOVE_TOKEN:
            return {
                ...state,
                token: ''
            };

        default:
            return state;

    }
}

export default tokenReducer;