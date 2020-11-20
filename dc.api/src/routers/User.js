module.exports = app => {
    const router = '/api/user'
    app.get(`${router}/:id`, async (req, res) => {
        const User = app.controllers.UserController
        res.send(await User.find({ _id: req.params.id }))
    })
    app.get(`${router}/document/:chipId`, async (req, res) => {
        const User = app.controllers.UserController
        res.send(await User.find({ chip_id: req.params.chipId.trim() }))
    })
}