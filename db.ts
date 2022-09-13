import mongoose, { ConnectOptions } from 'mongoose';

const connectDb = async () => {
  try {
    // Atlas URI as a string instead of process.env.ATLAS_URI for development purposes
    const conn = await mongoose.connect('mongodb+srv://rsaaremetscosmos:CbRCzgx8YdEWpl0M@cosmosodyssey.6yqobyz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export { connectDb };
