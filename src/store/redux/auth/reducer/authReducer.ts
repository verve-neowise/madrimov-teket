import { AuthAction, IAuth } from "../interfaces/interfaces"
import { ERROR_AUTH, LOADING_AUTH, LOGOUT, SUCCESS_AUTH } from "../types/types"


const initialState: IAuth = { success: false, loading: false, error: null }

function setLocal(value: boolean = false) {
    return localStorage.setItem('auth', value.toString())
}

export const authReducer = (state: IAuth = initialState, action: AuthAction): IAuth => {
    switch (action.type) {
        case LOADING_AUTH:
            setLocal(false)
            return { loading: true, success: false, error: false }
        case SUCCESS_AUTH:
            setLocal(true)
            return { loading: false, success: true, error: false }
        case ERROR_AUTH:
            setLocal(false)
            return { loading: false, success: false, error: true }
        case LOGOUT:
            localStorage.clear()
            return { loading: false, success: false, error: null }
        default: return state
    }
}