const getIdDbDrivers = require('../controllers/getIdDbDrivers')

const handlerIdDbDrivers = async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const driver = await getIdDbDrivers(id)
    if (!driver) {
      throw new Error('Driver not found')
    }
    res.status(200).json(driver)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = handlerIdDbDrivers
