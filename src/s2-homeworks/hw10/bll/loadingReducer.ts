const initState: InitStateType = {
    isLoading: false,
}

type InitStateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {isLoading: action.isLoading};
        }
        default:
            return state;
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
