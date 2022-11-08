import {REMOVE_TOKEN, UPDATE_TOKEN} from "../actionTypes";

const updateToken = (token:any) => {
    console.log(token + " IN ACTION")
    return  {
        type: UPDATE_TOKEN,
        token: token,
        isLoggedIn: true
    }
}
const removeToken = () => {
    return {
        type: REMOVE_TOKEN,
        token: '',
        isLoggedIn: false
    }
}

export { updateToken, removeToken }