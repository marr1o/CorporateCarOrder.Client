import { IsAuthorizedActionTypes, PageActionTypes, PagesEnum } from "../../enums/Enums"

type IsAuthorizedActionType = {
    type: IsAuthorizedActionTypes,
    payload: boolean
}

type IsAuthorizedStateType = {
    isAuthorized: boolean
}

const defaultState: IsAuthorizedStateType = {
    isAuthorized: false
}

const isAuthorizedReducer = (state: IsAuthorizedStateType = defaultState, action: IsAuthorizedActionType) => {
    switch (action.type) {
        case IsAuthorizedActionTypes.SET_IS_AUTHORIZED:
            return { ...state, page: action.payload }
        default:
            return state;
    }
}

export default isAuthorizedReducer;