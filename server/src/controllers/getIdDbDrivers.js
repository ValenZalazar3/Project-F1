const { Driver, Team } = require('../db')

const getIdDbDrivers = (id) => {
  return Driver.findByPk(id, {
    include: {
      model: Team
    }
  })
}

module.exports = getIdDbDrivers
