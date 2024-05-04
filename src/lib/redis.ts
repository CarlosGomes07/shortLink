import { createClient } from "redis";

export const redis = createClient({
    url: 'redis://:docker1@localhost:6379'
})

redis.connect();