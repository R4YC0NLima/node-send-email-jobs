import { IQueueProvider } from "../IQueueProvider";
import Queue from 'bull';
import * as jobs from '../../jobs';
import redisConfig from '../../config/redis';

const queues = Object.values(jobs).map(job => ({
    bull: new Queue<any>(job.key, {redis: redisConfig}),
    name: job.key,
    handle: job.handle
}));

export class QueueProvider implements IQueueProvider {
    constructor(public queues: any) {}

    async add(name: string, data: object): Promise<void> {
        const queue = this.queues.find((queue: any) => queue.name === name)
        
        return await queue.bull.add(data, queue.options);
    }

    async process(): Promise<void> {
        return this.queues.forEach((queue: any) => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (job:any, err: any) => {
                console.log('Job failed', job)
                console.log(err)
            })
        });
    }
}
