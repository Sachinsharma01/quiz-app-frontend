import {REMOVE_TOKEN, UPDATE_TOKEN} from "../actionTypes";

const updateToken = (token:any) => {
    console.log(token + " IN ACTION")
    return  {
        type: UPDATE_TOKEN,
        token: token,
    }
}
const removeToken = () => {
    return {
        type: REMOVE_TOKEN,
        token: '',
    }
}

export { updateToken, removeToken }