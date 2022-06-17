

export interface IQueueProvider {
    queues:any,
    add(name: string, data: object): Promise<void>;
    process(queue: object): Promise<void>;
}