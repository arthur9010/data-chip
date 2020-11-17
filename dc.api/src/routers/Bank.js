module.exports = app => {
    const baseUrl = '/api/bank'
    app.get(baseUrl, async (req, res) => {
        const Bank = app.controllers.BankController
        res.send(await Bank.findAll())
    })
    app.get(`${baseUrl}/:id`, async (req, res) => {
        const Bank = app.controllers.BankController
        res.send(await Bank.find({user_id: req.params.id}))
    })
    app.put(`${baseUrl}/debit/`, async (req, res) => {
        const Bank = app.controllers.BankController
        res.send(await Bank.debit({ ...req.body }))
    })
}