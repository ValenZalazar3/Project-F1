const { Driver, Team } = require('../db')

const getDbDrivers = async () => {
  const drivers = await Driver.findAll({
    include: {
      model: Team
    }
  })
  return drivers
}

module.exports = getDbDrivers
