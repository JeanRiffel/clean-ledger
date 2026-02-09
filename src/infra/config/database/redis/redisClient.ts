import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_HOST,
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

await redisClient.connect();

console.log("✅ Connected to Redis");

export default redisClient;
