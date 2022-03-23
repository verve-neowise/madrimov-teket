import { Observable } from "rxjs"
import { Auth } from "../model/auth.model"
import { error, loading, Network, success } from "../model/network.model"
import { User } from "../model/user.model"
import * as authApi from "../api/auth.api" 

const authorincate = (user: User) => {

    return new Observable<Network<Auth>>( subscriber => {
        
        subscriber.next(loading<Auth>())

        authApi.authorincate(user)
            .then(res => {
                subscriber.next(success(res))
            })
            .catch(reason => {
                subscriber.next(error(reason))
            })
    })
}

export default {
    authorincate
}