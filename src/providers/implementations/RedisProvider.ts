import Redis from "ioredis";
import { IRedisProvider } from "../IRedisProvider";
import redisConfig from "../../config/redis";

export class RedisProvider implements IRedisProvider {
    private redis: any;

    constructor() {
        this.redis = new Redis(redisConfig);

        this.redis.on("connect", () => {
            console.log('Redis connection estabilished');
        });


        this.redis.on("error", (error) => {
            console.log(`Redis error, service degraded: ${error}`);
        });
    }

    async get(key: string): Promise<void> {

    }
    
}