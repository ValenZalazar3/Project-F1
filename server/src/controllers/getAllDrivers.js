const axios = require('axios')
const uri = 'http://localhost:5000/drivers'

const getAllDrivers = async () => {
  const { data } = await axios.get(uri)
  const drivers = data.map((driver) => {
    return {
      id: driver.id,
      name: driver.name.forename,
      surname: driver.name.surname,
      image: driver.image.url,
      birthdate: driver.dob,
      nationality: driver.nationality,
      teams: driver.teams,
      description: driver.description
    }
  })

  return drivers
}

module.exports = getAllDrivers
