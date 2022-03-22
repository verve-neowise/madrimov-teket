import { Dispatch } from "redux"
import { athorincate } from "../../../apis/user.api"
import { AuthAction } from "../interfaces/interfaces"
import { ERROR_AUTH, LOADING_AUTH, LOGOUT, SUCCESS_AUTH } from "../types/types"

const authAction = (type: string): AuthAction => {
    return {
        type: type,
    }
}

const logoutAction = (): AuthAction => {
    return{
        type: LOGOUT
    }
}

export const asyncLogoutAuthAction = () => {
    return (dispatch: Dispatch) => {
        dispatch(logoutAction())
    }
}

export const asyncAuthAction = (username: string, password: string) => {
    return (dispatch: Dispatch) => {
        dispatch(authAction(LOADING_AUTH))
        athorincate(username, password).then(
            () => dispatch(authAction(SUCCESS_AUTH))
        ).catch(() => dispatch(authAction(ERROR_AUTH)))
    }
}