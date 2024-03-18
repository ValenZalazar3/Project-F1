const { Router } = require('express')
const handlergetAllDrivers = require('../../handlers/handlergetAllDrivers')
const handlerGetNameDrivers = require('../../handlers/handlerGetNameDrivers')
const handlerGetIdDrivers = require('../../handlers/handlerGetIdDrivers')
const handlerPostDrivers = require('../../handlers/handlerPostDrivers')

const routerDriver = Router()
routerDriver.get('/', handlergetAllDrivers)
routerDriver.get('/name', handlerGetNameDrivers) // peticion http://localhost:3001/drivers/name?name=Lewis
routerDriver.get('/:id', handlerGetIdDrivers)
routerDriver.post('/', handlerPostDrivers)
module.exports = routerDriver
