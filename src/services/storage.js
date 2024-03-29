const setToken = (token, remember_me) => {
    if (remember_me) {
        localStorage.setItem('userToken', token)
    } else {
        sessionStorage.setItem('userToken', token)
    }
}

const getToken = () => {
    if (localStorage.getItem('userToken')) {
        return localStorage.getItem('userToken')
    }
    if (sessionStorage.getItem('userToken')) {
        return localStorage.getItem('userToken')
    }
    return null
}

const removeToken = () => {
    localStorage.removeItem('userToken')
    sessionStorage.removeItem('userToken')
}

const StorageService = {
    setToken,
    getToken,
    removeToken
}

export default StorageService
