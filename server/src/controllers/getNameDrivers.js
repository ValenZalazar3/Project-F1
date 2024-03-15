const { axios } = require('axios')
const getAllDrivers = require('../controllers/getAllDrivers')
const uri = 'http://localhost:5000/drivers'

const getNameDrivers = async (name) => {
  const allDrivers = await getAllDrivers()

  const allNameDrivers = allDrivers.filter((el) => {
    return el.name.includes(
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    )
  })

  return allNameDrivers
}

module.exports = getNameDrivers
