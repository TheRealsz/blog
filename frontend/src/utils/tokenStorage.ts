const TOKEN_KEY = "token"

export function setTokenOnStorage(token: string ){
    localStorage.setItem(TOKEN_KEY, token)
}

export function getTokenFromStorage() {
    return localStorage.getItem(TOKEN_KEY)
}

export function removeTokenFromStorage() {
    localStorage.removeItem(TOKEN_KEY)
}