const getNameDrivers = require('../controllers/getNameDrivers')

const handlerGetNameDrivers = async (req, res) => {
  const name = req.query.name

  try {
    const driverName = await getNameDrivers(name)

    res.status(200).json(driverName)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = handlerGetNameDrivers
