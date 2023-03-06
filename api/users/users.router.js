const router = require('express').Router();
const UserModel = require('../users/users-model');
const md = require('../auth/auth-middleware');

router.get('/', md.protected, async (req,res,next)=>{
    try {
        const users = await UserModel.find();
        res.status(201).json(users);

    } catch (err) {
        next(err);
    }
})

module.exports = router;

