
// 用户token
const storageKey = 'token'

function getToken() {
  return localStorage.getItem(storageKey)
}

function setToken(val) {
  return localStorage.setItem(storageKey, val)
}

function removeToken() {
  return localStorage.removeItem(storageKey)
}


export default {
  getToken,
  setToken,
  removeToken
}