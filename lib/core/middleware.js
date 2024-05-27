import {ObjectId} from 'mongodb'

export const isLogin = (req, res, next) => {
    if (req.session && req.session.passport && req.session.passport.user && req.isAuthenticated() && ObjectId.isValid(req.session.passport.user._id))
        next()
    else
        res.render('login')
}
