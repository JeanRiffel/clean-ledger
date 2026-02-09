import { MongoDatabase } from "../config/database/mongodb/mongo-database";
import { Repository } from "./Repository";

export class LoggerRepository implements Repository<any>{
  constructor(private readonly database: MongoDatabase){}

  
  async save(data: any): Promise<any> {
    const mongoDB =  this.database.getDb()
    const logs = (await mongoDB).collection('logs')  
    await logs.insertOne(data)
  }
  query(params: any): Promise<any> {
    throw new Error("Method not implemented.");
  }



}