const axios = require('axios')
const uri = 'http://localhost:5000/drivers'

const getIdDrivers = async (id) => {
  const driver = await axios(`${uri}/${id}`)

  const driverId = {
    id: driver.data.id,
    name: driver.data.name.forename,
    surname: driver.data.name.surname,
    image: driver.data.image.url,
    birthdate: driver.data.dob,
    nationality: driver.data.nationality,
    teams: driver.data.teams,
    description: driver.data.description
  }

  return driverId
}

module.exports = getIdDrivers
