const postDriver = require('../controllers/postDrivers')

const handlerPostDrivers = async (req, res) => {
  const dataInput = req.body

  try {
    const newDriver = await postDriver(dataInput)
    res.status(200).json(newDriver)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = handlerPostDrivers
