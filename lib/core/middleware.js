import {setResponseCode, setErrorResponse} from "../utils/utility.js";

export const isLogin = (req, res, next) => {
    const {userAccessToken, clientAccessToken} = req.session;
    if (userAccessToken && clientAccessToken) {
        next()
    } else {
        setResponseCode(req, res, 401)
    }
}