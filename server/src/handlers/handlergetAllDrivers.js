const getAllDrivers = require('../controllers/getAllDrivers')

const handlergetAllDrivers = async (req, res) => {
  try {
    const drivers = await getAllDrivers()
    if (!drivers) {
      throw new Error('No drivers found')
    }
    res.status(200).json(drivers)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = handlergetAllDrivers
