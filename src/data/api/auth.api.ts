import { Auth } from "../model/auth.model"
import { User } from "../model/user.model"

const registeredUser = new User("username", "1234")
const userToken = "ajsdlajxcoiuaoiu92318739821ykasnmzxnckjzhasdeiuas"

const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(() => resolve(ms), ms))
}

export const authorincate = async (user: User) => {
    await delay(2000)
    if(user.username === registeredUser.username && user.password === registeredUser.password){
        return new Auth(user.username, userToken)
    }else{
        throw new Error('authorization error!')       
    }
}
