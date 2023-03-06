const router = require('express').Router();
const UserModel = require('../users/users-model');

const bcrypt = require('bcryptjs');

router.post('register', async (req,res,next)=>{
    try {
        //kullanıcıyı req body'den aldım.
        const newUser = req.body;  //username, password

        //kullanıcıyı passwordunu hashledik.
        const hash = bcrypt.hashSync(newUser.password, 8);
        newUser.password = hash;

        //kullanıcıyı kayıt ettik.
        const registeredUser = await UserModel.create(newUser);
        res.status(201).json(registeredUser);

    } catch (err) {
        next(err);
    }
})

router.post('login', async (req,res,next)=>{
    try {
        // login bilgilerini aldık
        const {username, password} = req.body;

        //kullanıcyı aldık
        const presentUser = await UserModel.findByFilter({username}).first();
        const isPasswordTrue = bcrypt.compareSync(password, presentUser.password); // !!!!

        //credentil kontrolü yaptık
        if (presentUser && isPasswordTrue) {
            req.session.user = presentUser;
            res.status(200).json({message: "Hoış geldin"});
        } else {
            res.status(401).json({message: "Bilgileriniz doğru değil!"})
        }
    } catch (err) {
        next(err);
    }
    
})

router.get('logout', (req,res,next)=>{
    try {
        if(req.session.user) {
            req.session.destroy(err => {
                if(err){
                    next({
                        message: "Oturum kapatılırken hata oluştu!"
                    })
                } else {
                    res.status(200).json({message:"Oturum başarı ile sonlandırıldı..."})
                }
            })
        } else {
            res.status(200).json({message: "Oturum bulunamadı!"})
        }
    } catch(err) {
        next(err);
    }
})

router.post('reset/password', (req,res,next)=>{
    //sizde!!!
})

module.exports = router;

