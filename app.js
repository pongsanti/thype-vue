let config = require('./config')()
let path = require('path')
let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let mongodb = require('mongodb')
let ObjectID = mongodb.ObjectID

// static files
app.use(express.static(path.join(__dirname, 'node_modules', 'bulma')))
app.use(express.static(path.join(__dirname, 'dist')))
// json parser
app.use(bodyParser.json())

let db

const MONGODB_URI = config.MONGODB_URI
const PORT = config.PORT
const TYPEE_COLLECTIONS = 'typees'

// DB connection
mongodb.MongoClient.connect(MONGODB_URI, (err, database) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }

  db = database
  console.log('Database connection ready')

  let server = app.listen(PORT || 3000, () => {
    let port = server.address().port
    console.log(`App now running on port ${port}`)
  })
})

// root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

// create new typee
app.post('/typees', (req, res) => {
  let newTypee = req.body
  newTypee.createDate = new Date()

  db.collection(TYPEE_COLLECTIONS).insertOne(newTypee, (err, doc) => {
    if (err) {
      handleError(res, err.message, 'Failed to create new typee.')
    } else {
      res.status(201).json(doc.ops[0])
    }
  })
})

// random one typee
app.get('/typees', (req, res) => {
  db.collection(TYPEE_COLLECTIONS).aggregate({$sample: {size: 1}}, (err, doc) => {
    if (err) {
      handleError(res, err.message, 'Failed to get typee.')
    } else {
      res.status(201).json(doc)
    }
  })
})

// get a typee by id
app.get('/typees/:id', (req, res) => {
  db.collection(TYPEE_COLLECTIONS).findOne({ _id: new ObjectID(req.params.id) }, (err, doc) => {
    if (err) {
      handleError(res, err.message, 'Failed to get typee.')
    } else {
      res.status(200).json(doc)
    }
  })
})

let handleError = (res, reason, message, code) => {
  console.log(`ERROR: ${reason}`)
  res.status(code || 500).json({error: message})
}
