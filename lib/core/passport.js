import {OIDCStrategy} from 'passport-azure-ad';
import FacebookStrategy from "passport-facebook";
import {Strategy} from "passport-google-oauth20"

import application from "./application.js";
import {encrypt} from "../utils/utility.js";

const passport = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser((user, done) => {
        done(null, user);
    })

    // ADFS signup strategy
    passport.use(new OIDCStrategy({
            identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
            responseType: 'code',
            responseMode: 'query',
            allowHttpForRedirectUrl: true,
            validateIssuer: false,
            passReqToCallback: false,
            scope: ['email', 'profile', 'openid', 'offline_access', 'Mail.Read'],
            clientID: process.env.AZURE_AD_CLIENT_ID, // Azure Client ID
            redirectUrl: process.env.AZURE_REDIRECT_URI, // Azure Redirect Uri
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET // Azure Client Secret
        },
        (iss, sub, profile, accessToken, refreshToken, done) => {
            let {aud, name, oid, email, tid, nonce} = profile._json
            accessToken = encrypt(accessToken);
            refreshToken = encrypt(refreshToken)
            return application.azureLogin(accessToken, refreshToken, aud, name, email, oid, tid, nonce)
                .then(user => done(null, {_id: user, accessToken}))
        }
    ))

    // Facebook signup strategy
    passport.use(
        "facebook",
        new FacebookStrategy(
            {
                clientID: '65a4sd56f45sad',
                clientSecret: 'as65df654as5df4',
                callbackURL: 'http://localhost:3000/facebook-callbak',
                profileFields: ["id", "emails", "name"]
            },
            (accessToken, refreshToken, profile, done) => {
                let user = {
                    id: profile.id,
                    email: profile.email,
                    first_name: profile.name.givenName,
                    last_name: profile.name.familyName,
                    provider: "facebook"
                }

                user.created = true

                return done(null, user)
            }
        )
    )

    // Facebook signup strategy
    passport.use(
        "google",
        new Strategy(
            {
                clientID: '6a5sdf65ads4f6',
                clientSecret: '6s54df56as4f465as',
                callbackURL: 'http://localhost:3000/google-callbak',
                scope: ["profile"]
            },
            (accessToken, refreshToken, profile, done) => {

                let user = {
                    id: profile.id,
                    email: profile.email,
                    first_name: profile.name.givenName,
                    last_name: profile.name.familyName,
                    provider: "google"
                }

                user.created = true

                return done(null, user)
            }
        )
    )
}

export default passport
