export const setToken = (token, remember_me) => {
    if (remember_me) {
        localStorage.setItem('token', token)
        return
    }
    sessionStorage.setItem('token', token)
}

export const removeToken = (token) => {
    localStorage.removeItem('token', token)
    sessionStorage.removeItem('token', token)
}
