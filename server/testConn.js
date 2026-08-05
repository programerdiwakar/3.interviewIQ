import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const uri = process.env.MONGODB_URL
if(!uri){
  console.error('MONGODB_URL not set in .env')
  process.exit(1)
}

console.log('Attempting to connect to MongoDB...')

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully')
    process.exit(0)
  })
  .catch(err => {
    console.error('MongoDB connection error:')
    console.error(err && err.message ? err.message : err)
    // Print driver error name and stack for more detail when available
    if(err && err.name) console.error('Error name:', err.name)
    if(err && err.stack) console.error(err.stack)
    process.exit(1)
  })
