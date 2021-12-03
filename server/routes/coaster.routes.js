const router = require("express").Router()
const Coaster = require("../models/Coaster.model")


router.get("/allCoasters", (req, res) => {
  Coaster.find()
    .then(allCoasters => res.json(allCoasters))
    .catch(err => res.json({ err, errMessage: "Problema buscando Coasters" }))
})

router.get("/coaster/:id", (req, res) => {
  const { id } = req.params

  Coaster.findById(id)
    .then(theCoaster => res.json(theCoaster))
    .catch(err => res.json({ err, errMessage: "Problema buscando un Coaster" }))
})


router.post("/newCoaster", (req, res) => {
  const { title, description, inversions, length, imageUrl } = req.body

  Coaster.create({ title, description, inversions, length, imageUrl })
    .then(newCoaster => res.json(newCoaster))
    .catch(err => res.json({ err, errMessage: "Problema creando Coaster" }))
})

router.put("/editCoaster/:id", (req, res) => {
  const { id } = req.params
  const { title, description, inversions, length, imageUrl } = req.body

  Coaster.findByIdAndUpdate(id, { title, description, inversions, length, imageUrl }, { new: true })
    .then(updatedCoaster => res.json(updatedCoaster))
    .catch(err => res.json({ err, errMessage: "Problema editando Coaster" }))
})

router.delete("/deleteCoaster/:id", (req, res) => {
  const { id } = req.params

  Coaster.findByIdAndDelete(id)
    .then(deletedCoaster => res.json({ deletedCoaster }))
    .catch(err => res.json({ err, errMessage: "Problema borrando Coaster" }))
})

module.exports = router