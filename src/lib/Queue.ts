import Queue from 'bull';
import redisConfig from '../config/redis';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
    bull: new Queue<any>(job.key, {redis: redisConfig}),
    name: job.key,
    handle: job.handle
}));

export default {
    queues,
    add(name: string, data: object) {
        const queue = this.queues.find((queue: any) => queue.name === name);

        return queue.bull.add(data, queue.options);
    },
    process() {
        return this.queues.forEach((queue: any) => {
            queue.bull.process(queue.handle);

            queue.bull.on('failed', (job: any, err: any) => {
                console.log('Job Failed', queue.key, job.data)
                console.log(err)
            })
        })
    }
}