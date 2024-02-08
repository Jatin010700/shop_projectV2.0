// mongoDB.ts
import mongoose from 'mongoose';

const ConnectMongoDB = async (): Promise<void> => {
  try {
    const mongoEnv: string = process.env.MONGO_DB_URL || '';
    console.log('MongoDB Connection String:', mongoEnv);

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(mongoEnv, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as mongoose.ConnectOptions);
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default ConnectMongoDB;
