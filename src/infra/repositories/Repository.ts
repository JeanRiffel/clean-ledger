export interface Repository<T> {
  save(data: any): Promise<T>
  query(params: any): Promise<T>
}