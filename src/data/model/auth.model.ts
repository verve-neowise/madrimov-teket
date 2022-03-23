export class Auth {
    readonly username: string
    readonly token: string

    constructor(username: string, token: string) {
        this.username = username
        this.token = token
    }

    get isAuthorized(): boolean {
        return this.token != undefined
    }
}