import { Session } from './index'

const TOKEN_KEY = 'QM-TOKN',
const USERINFO_KEY = 'QM-USERINFO',

//token 相关方法
export function setToken(token) {
    Session.set(TOKEN_KEY, token);
}
export function getToken() {
    Session.get(TOKEN_KEY);
}
export function remToken() {
    Session.set(TOKEN_KEY);
}

//userinfo 相关方法
export function setUserInfo(userinfo) {
    Session.set(USERINFO_KEY, userinfo);
}
export function getUserInfo() {
    Session.get(USERINFO_KEY);
}
export function remUserInfo() {
    Session.set(USERINFO_KEY);
}