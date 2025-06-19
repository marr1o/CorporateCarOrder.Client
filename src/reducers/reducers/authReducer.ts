import { AuthActionTypes, AuthTypes } from "../../enums/Enums"

type AuthActionType = {
    type: AuthActionTypes,
    payload: AuthTypes
}

type AuthStateType = {
    authType: AuthTypes
}

const defaultState: AuthStateType = {
    authType: AuthTypes.NONE
}

const authReducer = (state: AuthStateType = defaultState, action: AuthActionType) => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return { ...state, authType: action.payload }
        default:
            return state;
    }
}

export default authReducer;