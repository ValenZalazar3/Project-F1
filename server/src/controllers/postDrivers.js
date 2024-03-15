const { Driver, Team } = require('../db')

const postDriver = async ({
  id,
  name,
  surname,
  image,
  birthday,
  nationality,
  teams,
  description
}) => {
  const newDriver = await Driver.create({
    id,
    name,
    surname,
    image,
    birthday,
    nationality,
    description,
    createdInDd: true
  })

  const teamsDb = await Team.findAll({
    where: { name: teams }
  })
  newDriver.addTeams(teamsDb)

  return newDriver
}

module.exports = postDriver
