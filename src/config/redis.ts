import { RedisOptions } from "ioredis";

type RedisConfig = RedisOptions

export default {
    host: process.env.REDIS_HOST || '127.0.0.1',
    password: process.env.REDIS_PASS,
    port: Number(process.env.REDIS_PORT) || 6379,
    db: Number(process.env.REDIS_DB) || 0
} as RedisConfig