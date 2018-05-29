const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const googleAuthConstants = require("../constants/index");
const EmployeeSchema = require("../api/employee/employee.model");

exports.useGoogle = () => {
    passport.use(new googleStrategy({
            clientID: googleAuthConstants.clientID,
            clientSecret: googleAuthConstants.clientSecret,
            callbackURL: googleAuthConstants.callbackUrl,
        },
      async (accessToken, refreshToken, profile, done) => {
            if (profile._json.domain === 'tothenew.com') {
              let user = await  EmployeeSchema.findOne({
                email: profile.emails[0].value
              }).lean().exec();
              if (user && user.image) {
                return done(null, user)
              } else if (user && !user.image) {
                await EmployeeSchema.update({email: user.email}, {$set: {image: profile._json.image.url}}).exec()
                let user = await EmployeeSchema.findOne({
                  email: profile.emails[0].value
                }).lean().exec()
                return done(null,user)
              } else {
                EmployeeSchema.create({
                    empName: profile.displayName,
                    email: profile.emails[0].value,
                    image: profile._json.image.url,
                  }, (err, user) => {
                    return done(null, user)
                  }
                )
              }

            }
            else {
                return done(null)
            }

        }
        ));

    passport.serializeUser((user, done) => {
        done(null, user)
    })

};
