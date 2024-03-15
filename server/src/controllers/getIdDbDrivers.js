const { Driver, Team } = require('../db')

const getIdDbDrivers = (id) => {
  console.log(id)
  return Driver.findByPk(id, {
    include: {
      model: Team
    }
  })
}

module.exports = getIdDbDrivers
