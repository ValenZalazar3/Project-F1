const getIdDrivers = require('../controllers/getIdDrivers')
const getIdDbDrivers = require('../controllers/getIdDbDrivers')
const handlerGetIdDrivers = async (req, res) => {
  const { id } = req.params

  try {
    if (id.length < 5) {
      const driverId = await getIdDrivers(id)
      return res.status(200).json(driverId)
    }
    const driver = await getIdDbDrivers(id)
    res.status(200).json(driver)
  } catch (error) {
    res.status(404).send({ error: error.message, otro: 'al pasto' })
  }
}

module.exports = handlerGetIdDrivers
