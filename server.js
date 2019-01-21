const app = require('express')()
const cors = require('cors')

const restaurantRoutes = require('./api/restaurant/restaurantRoutes')
 

app.use(cors())

app.use('/restaurant', restaurantRoutes)


const server = app.listen(4000, () => console.info(`Example app listening on port 4000!`))
 
 
