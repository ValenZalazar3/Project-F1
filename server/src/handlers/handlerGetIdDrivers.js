const getIdDrivers = require('../controllers/getIdDrivers')

const handlerGetIdDrivers = async (req, res) => {
  const { id } = req.params

  try {
    const driverId = await getIdDrivers(id)

    if (driverId) {
      res.status(200).json(driverId)
    } else {
      res.status(400).send('No se encontro driver con ese ID')
    }
  } catch (error) {
    res.status(404).send({ error: error.message })
  }
}

module.exports = handlerGetIdDrivers
