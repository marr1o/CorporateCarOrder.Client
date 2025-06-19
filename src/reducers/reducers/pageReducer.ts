import { PageActionTypes, PagesEnum } from "../../enums/Enums"

type PageActionType = {
    type: PageActionTypes,
    payload: PagesEnum
}

type PageStateType = {
    page: PagesEnum
}

const defaultState: PageStateType = {
    page: PagesEnum.HOME
}

const pageReducer = (state: PageStateType = defaultState, action: PageActionType) => {
    switch (action.type) {
        case PageActionTypes.SET_PAGE:
            return { ...state, page: action.payload }
        default:
            return state;
    }
}

export default pageReducer;