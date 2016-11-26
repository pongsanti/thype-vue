module.exports = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return {}
    default:
      return {
        MONGODB_URI: 'mongodb://localhost:27017/thype',
        PORT: 3000
      }
  }
}
