const express = require('express')
const router = express.Router({ mergeParams: true })
const { User, Pantry, Item } = require('../db/schema')


router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        const pantry = user.pantry.id(req.params.pantryId)
        const item = pantry.items.id(req.params.id)
        res.json(item)
    } catch (err) {
        res.send(err)
    }
})

router.patch('/:id', async (req, res) => {
    try {
    const updatedItem = req.body
    const user = await User.findById(req.params.userId)
    const pantry = user.pantry.id(req.params.pantryId)
    const item = pantry.items.id(req.params.id)
  
    item.itemName = updatedItem.itemName
    item.quantity = updatedItem.quantity
    item.parLevel = updatedItem.parLevel
    
    const saved = await user.save()
    res.json(saved)
    } catch (err) {
        res.send(err)
    }
   })



module.exports = router