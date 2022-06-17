
export interface IRedisProvider {
    get(key: string): Promise<void>;
}