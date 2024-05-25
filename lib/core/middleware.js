import {setResponseCode, setErrorResponse} from "../utils/utility.js";

export const isLogin = (req, res, next) => {
    const {accessToken, clientAccessToken} = req.session;
    if (accessToken && clientAccessToken) {
        next()
    } else {
        setResponseCode(req, res, 401)
    }
}
