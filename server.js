const app = require('./app')
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${process.env.PORT || 5000}`)
  })
}).catch(err => {
  console.log(err)
})
