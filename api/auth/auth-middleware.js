function protected (req, res, next) {
    try {
        if(req.session.user) {
            next();
        } else {
            next({
                status: 401,
                message: "Önce login olmalısınız!"        
            })
        }
    } catch(err) {
        next(err);
    }
}

module.exports = {protected};
