const express = require('express')
const router = express.Router({ mergeParams: true })
const { User, Pantry, Item } = require('../db/schema')


router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        const pantry = user.pantry.id(req.params.pantryId)
        console.log(pantry)
        const item = pantry.items.id(req.params.id)
        res.json(item)
    } catch (err) {
        res.send(err)
    }
})



module.exports = router