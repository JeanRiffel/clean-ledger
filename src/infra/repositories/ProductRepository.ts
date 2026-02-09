import { Product } from "../../domain/product/entity/product-entity";
import { Repository } from "./Repository";
import { pool } from "../config/database/postgresql/pg";

export class ProductRepository implements Repository<any> {
  
  async save(data: Product): Promise<void> {

    
    const value = data.toGet()
    const price = value.price  

    await pool.query('INSERT INTO products (id, name, price) VALUES ($1, $2, $3) RETURNING *;', [ '9', 'teste', price ]);

    
  }
  query(params: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

}