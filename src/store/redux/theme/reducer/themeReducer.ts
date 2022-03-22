import { DARK_THEME, LIGHT_THEME } from "../types/types";

const initialState: string = 'light'

export interface ThemeAction {
    type: string,
}

function setLocal(value: string) {
    localStorage.setItem('theme', value)
}

export const themeReducer = (state: string = initialState, action: ThemeAction) => {
    switch (action.type) {
        case DARK_THEME:
            setLocal('dark')
            return 'dark'
        case LIGHT_THEME:
            setLocal('light')
            return 'light'
        default: return state
    }
}