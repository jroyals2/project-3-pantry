const express = require('express')
const router = express.Router({mergeParams: true})
const { User, Pantry } = require('../db/schema')



router.post('/', async (req, res) => {
  try{
    const newPantry = req.body.pantry
    const user = await User.findById(req.params.userId)
    user.pantry.push(newPantry)
    const saved = await user.save()
    res.json(saved)
  } catch (err)  {
    res.json(err)
  }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        const pantry = user.pantry.id(req.params.id)
         res.json(pantry)   
    } catch (err) {
        res.send(err)
      }
})

router.patch('/:id', async (req, res) => {
  
  const updatedPantry = req.body
  const user = await User.findById(req.params.userId)
  const pantry = user.pantry.id(req.params.id)

  pantry.pantryName = updatedPantry.pantryName
  pantry.location = updatedPantry.location
  
  const saved = await user.save()
  res.json(saved)
 })

router.delete('/:id', async (req, res) => {

  const user = await User.findById(req.params.userId)
  user.pantry.id(req.params.id).remove()
  
  const saved = await user.save()
  res.json(saved)
})

module.exports = router