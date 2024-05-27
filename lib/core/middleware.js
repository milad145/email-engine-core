import {ObjectId} from 'mongodb'
import {setResponseCode, setErrorResponse} from "../utils/utility.js";

export const isLogin = (req, res, next) => {
    const {user} = req.session.passport;
    if (req.isAuthenticated() && ObjectId.isValid(user)) {
        next()
    } else {
        res.render('index')
    }
}
