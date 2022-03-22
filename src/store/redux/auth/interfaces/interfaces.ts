export interface IAuth {
    success: boolean,
    loading: boolean,
    error: boolean | null
}


export interface AuthAction {
    type: string
}