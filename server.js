var express    = require('express')
var app        = express()
var bodyParser = require('body-parser')
var shortid = require('shortid')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8080

var router = express.Router()

// Unsafely enable cors
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// logging middleware
router.use(function(req, res, next) {
    console.log('\nReceived:',{url: req.originalUrl, body: req.body, query: req.query})
    next()
})

// Simple in memory database
const database = [
  { name: 'Tea Chats', id: 0, users: ['Ryan','Nick', 'Danielle'], messages: [{name: 'Ryan', message: 'ayyyyy', id: 'gg35545', reaction: null},{name: 'Nick', message: 'lmao', id: 'yy35578', reaction: null}, {name: 'Danielle', message: 'leggooooo', id: 'hh9843', reaction: null}]},
  { name: 'Coffee Chats', id: 1, users: ['Jessye'], messages: [{name: 'Jessye', message: 'ayy', id: 'ff35278', reaction: null}]}
]


// Utility functions
const findRoom = (roomId) => {
  const room = database.find((room) => {
    return room.id === parseInt(roomId)
  })
  if (room === undefined){
    return {error: `a room with id ${roomId} does not exist`}
  }
  return room
}

const findRoomIndex = (roomId) => {
  const roomIndex = database.findIndex((room) => {
    return room.id === parseInt(roomId)
  })
  return roomIndex
}

const findMessageIndex = (room, messageId) => {
  const messageIndex = room.messages.findIndex((message) => {
    return message.id === messageId
  })
  return messageIndex
}

const logUser = (room, username) => {
  const userNotLogged = !room.users.find((user) => {
    return user === username
  })

  if (userNotLogged) {
    room.users.push(username)
  }
}

// API Routes
router.get('/rooms', function(req, res) {
    const rooms = database.map((room) => {
      return {name: room.name, id: room.id}
    })
    console.log('Response:',rooms)
    res.json(rooms)
})

const goodsSummary = {
  category: [
    { category: "Food", total: 168 },
    { category: "Clothes", total: 700 },
    { category: "Games", total: 120 },
    { category: "Health", total: 320 },
    { category: "Sports", total: 460 },
    { category: "Garde", total: 130 },
    { category: "Electronics", total: 76 }
  ],
  topGoods: [
    { name: "Utopia Towels Towel", category: "Clothes", soldCount: 1600 },
    { name: "Nike Man Pants XO", category: "Clothes", soldCount: 1450 },
    { name: "PS 5", category: "Electronics", soldCount: 950 },
    { name: "Breathe of the wild", category: "Games", soldCount: 919 },
    { name: "Echo Dot Large", category: "Electronics", soldCount: 901 },
    { name: "Apple XR", category: "Electronics", soldCount: 860 },
    { name: "Apple Watch", category: "Electronics", soldCount: 850 },
    { name: "Apple XS", category: "Electronics", soldCount: 826 },
    { name: "MAC Book", category: "Electronics", soldCount: 817 },
    { name: "Dog Food Nutural", category: "Pet", soldCount: 714 }
  ],
  status: {
    monthly: 80,
    yearly: 50
  },
  sales: [
    {
      month: "Jan",
      year: "2020",
      revenue: 7
    },
    {
      month: "Jan",
      year: "2021",
      revenue: 3.9
    },
    {
      month: "Feb",
      year: "2020",
      revenue: 6.9
    },
    {
      month: "Feb",
      year: "2021",
      revenue: 4.2
    },
    {
      month: "Mar",
      year: "2020",
      revenue: 9.5
    },
    {
      month: "Mar",
      year: "2021",
      revenue: 5.7
    },
    {
      month: "Apr",
      year: "2020",
      revenue: 14.5
    },
    {
      month: "Apr",
      year: "2021",
      revenue: 8.5
    },
    {
      month: "May",
      year: "2020",
      revenue: 18.4
    },
    {
      month: "May",
      year: "2021",
      revenue: 11.9
    },
    {
      month: "Jun",
      year: "2020",
      revenue: 21.5
    },
    {
      month: "Jun",
      year: "2021",
      revenue: 15.2
    },
    {
      month: "Jul",
      year: "2020",
      revenue: 25.2
    },
    {
      month: "Jul",
      year: "2021",
      revenue: 17
    },
    {
      month: "Aug",
      year: "2020",
      revenue: 26.5
    },
    {
      month: "Aug",
      year: "2021",
      revenue: 16.6
    },
    {
      month: "Sep",
      year: "2020",
      revenue: 23.3
    },
    {
      month: "Sep",
      year: "2021",
      revenue: 14.2
    },
    {
      month: "Oct",
      year: "2020",
      revenue: 18.3
    },
    {
      month: "Oct",
      year: "2021",
      revenue: 10.3
    },
    {
      month: "Nov",
      year: "2020",
      revenue: 13.9
    },
    {
      month: "Nov",
      year: "2021",
      revenue: 6.6
    },
    {
      month: "Dec",
      year: "2020",
      revenue: 9.6
    },
    {
      month: "Dec",
      year: "2021",
      revenue: 4.8
    }
  ]
}

const categorySummary = [
  { id: 'u2tc', category: 'Food', total: 3140, left: 31 },
  { id: 'qtbc', category: 'Game', total: 1076, left: 41 },
  { id: 'v27c', category: 'Drink', total: 4300, left: 34 },
  { id: '92ti', category: 'Media', total: 7600, left: 31 },
  { id: 'u2ic', category: 'Medical', total: 100, left: 31 },
  { id: 'i29c', category: 'Book', total: 100, left: 31 },
  { id: 'u2tc', category: 'Kids', total: 100, left: 376 },
  { id: 'u2tc', category: 'Handmade', total: 400, left: 31 },
  { id: '4ojc', category: 'Health', total: 4300, left: 390 },
  { id: 'u9uc', category: 'Beauty', total: 1430, left: 693 },
  { id: 'u2ti', category: 'Sports', total: 1760, left: 890 },
  { id: 'u9ic', category: 'Outdoor', total: 1430, left: 397 },
  { id: 'u2p9', category: 'Garden', total: 1490, left: 761 }
]

const employees = [
  {employeeID: "ohV_5l", name: "Lily", department: "HR", title: "Sales", level: 5, address: "No 5 Ave, New Work"},
  {employeeID: "fTk07z", name: "Manly", department: "Sales", title: "Buyer", level: 10, address: "No 5 Ave, New Work"},
  {employeeID: "W8rt7a", name: "Ben", department: "IT", title: "IT Engineer", level: 8, address: "No 5 Ave, New Work"},
  {employeeID: "kx8wsq", name: "Aaron", department: "HR", title: "Sales", level: 2, address: "No 5 Ave, New Work"},
  {employeeID: "bo8vsn", name: "Vicky", department: "Operator", title: "Sales", level: 6, address: "No 5 Ave, New Work"},
  {employeeID: "QiiomW", name: "Vivian", department: "HR", title: "Sales", level: 4, address: "No 5 Ave, New Work"},
  {employeeID: "Pq7qxs", name: "Sean", department: "Service", title: "Driver", level: 5, address: "No 5 Ave, New Work"},
  {employeeID: "MxyxoJ", name: "Will", department: "Channel", title: "Sales", level: 3, address: "No 5 Ave, New Work"},
  {employeeID: "d$Y3cv", name: "George", department: "Sales", title: "Manager", level: 2, address: "No 5 Ave, New Work"},
  {employeeID: "y>zJbh", name: "Ted", department: "IT", title: "Consultant", level: 5, address: "No 5 Ave, New Work"},
  {employeeID: "Qi_omW", name: "Fish", department: "HR", title: "Sales", level: 4, address: "No 5 Ave, New Work"},
  {employeeID: "bqvqxs", name: "Shane", department: "Service", title: "Driver", level: 5, address: "No 5 Ave, New Work"},
  {employeeID: "dxycoJ", name: "Chunk", department: "Channel", title: "Sales", level: 3, address: "No 5 Ave, New Work"},
]

router.get('/goods/summary', function(req, res) {
  res.json(goodsSummary)
})

router.get('/category/summary', function(req, res) {
  res.json(categorySummary)
})

router.get('/employees/:page', function(req, res) {
  const page = findRoom(req.params.page).id
  res.json({
    total: employees.length,
    employees: employees.slice(8*(page-1), 8*page),
    unit: 8
  })
})

router.get('/rooms/:roomId', function(req, res) {
  room = findRoom(req.params.roomId)
  if (room.error) {
    console.log('Response:',room)
    res.json(room)
  } else {
    console.log('Response:',{name: room.name, id: room.id, users: room.users})
    res.json({name: room.name, id: room.id, users: room.users})
  }
})

router.route('/rooms/:roomId/messages')
  .get(function(req, res) {
    room = findRoom(req.params.roomId)
    if (room.error) {
      console.log('Response:',room)
      res.json(room)
    } else {
      console.log('Response:',room.messages)
      res.json(room.messages)
    }
  })
  .post(function(req, res) {
    room = findRoom(req.params.roomId)
    if (room.error) {
      console.log('Response:',room)
      res.json(room)
    } else if (!req.body.name || !req.body.message) {
      console.log('Response:',{error: 'request missing name or message'})
      res.json({error: 'request missing name or message'})
    } else {
      logUser(room, req.body.name)
      const reaction = req.body.reaction || null
      const messageObj = { name: req.body.name, message: req.body.message, id: shortid.generate(), reaction }
      room.messages.push(messageObj)
      console.log('Response:',{message: 'OK!'})
      res.json(messageObj)
    }
  })

app.use('/api', router)
app.listen(port)
console.log(`API running at localhost:${port}/api`)
