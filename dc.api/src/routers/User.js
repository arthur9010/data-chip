module.exports = app => {
    const router = '/api/user'
    app.get(router, async (req, res) => {
        const User = app.controllers.UserController
        res.send(await User.findAll())
    })
}