import { Status } from "./data/model/network.model"
import { User } from "./data/model/user.model"
import authRepository from "./data/repository/auth.repository"

authRepository.authorincate(new User("username", "1234"))
    .subscribe((observer) => {
        console.log(observer);
        
        if (observer.status === Status.LOADING) {
            console.log("loading");
        }
        else if (observer.status === Status.ERROR) {
            console.log(observer.error);
        }
        else {
            console.log(observer.value);
        }
    })


export {}