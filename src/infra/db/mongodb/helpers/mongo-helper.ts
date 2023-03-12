import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (url: string): Promise<void> {
    this.connection = await MongoClient.connect(process.env.MONGODB_URI)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}