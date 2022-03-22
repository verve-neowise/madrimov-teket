const user = {
    username: 'username',
    password: '1234'
}

const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(() => resolve(ms), ms))
}

const athorincate = async (username: string, password: string) => {
    await delay(2000)
    if(username === user.username && password === user.password){
        return true
    }else{
        throw new Error('error')       
    }
}

export{
    athorincate
}