import { Job, JobOptions } from "bull";

export interface IFilaProvider {
    add(name?: string, data?: object, opts?: JobOptions): Promise<Job>;
    process(processor: ((job: Job, done?:any) => Promise<any>) | string): Promise<void>;
}