const { Router } = require('express')
const routerDriver = require('./router/routerDrivers')
const routerTeams = require('./router/routerTeams')

const router = Router()

router.use('/drivers', routerDriver)
router.use('/teams', routerTeams)

module.exports = router
