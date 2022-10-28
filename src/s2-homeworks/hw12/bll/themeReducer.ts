const initState: initStateType = {
    themeId: 1,
}

type initStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ChangeThemeIdAC): initStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export type ChangeThemeIdAC = { type: "SET_THEME_ID", id: number };
export const changeThemeId = (id: number): ChangeThemeIdAC => ({type: "SET_THEME_ID", id}); // fix any
