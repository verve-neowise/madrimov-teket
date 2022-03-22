import { ThemeAction } from "../reducer/themeReducer"
import { DARK_THEME, LIGHT_THEME } from "../types/types"

export const darkTheme = ():ThemeAction => {
    return{
        type: DARK_THEME
    }
}

export const lightTheme = ():ThemeAction => {
    return{
        type: LIGHT_THEME
    }
}