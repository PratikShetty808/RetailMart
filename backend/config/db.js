import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const options = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false
    }

    mongoose.connect(process.env.MONGO_URI, options, (error) => {
      if (error) {
        console.log('please make sure mongodb is installed and running!')
        return reject(error)
      } else {
        console.log('mongodb is connected')
        // resolve()
      }
    })
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB


