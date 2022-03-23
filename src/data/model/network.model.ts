export class Network<T> {
    private readonly _value?: T
    readonly _error?: string
    readonly status: Status

    constructor(value?: T, error?: string, status?: Status) {
        this._value = value
        this._error = error
        this.status = status ? status : Status.SUCCESS
    }

    get value() : T {
        return this._value!
    }

    get error() : string {
        return this._error!
    }
}

export function success<T>(value: T) : Network<T> {
    return new Network(value, '', Status.SUCCESS)
}

export function error<T>(error: string): Network<T> {
    return new Network<T>(undefined, error, Status.ERROR)
}

export function loading<T>() : Network<T> {
    return new Network<T>(undefined, '', Status.LOADING)
}

export enum Status {
    LOADING,
    SUCCESS,
    ERROR
}