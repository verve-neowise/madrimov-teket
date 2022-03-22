import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer/authReducer";
import { themeReducer } from "./theme/reducer/themeReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer
})

type RootType = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector