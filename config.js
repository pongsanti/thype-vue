module.exports = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return {
        PORT: process.env.PORT || 5000
      }
    default:
      return {
        MONGODB_URI: 'mongodb://localhost:27017/thype',
        PORT: 3000
      }
  }
}
