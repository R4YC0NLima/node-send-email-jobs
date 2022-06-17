import { JobOptions, Job } from "bull";
import { IFilaProvider } from "../IFilaProvider";

export class FilaProvider implements IFilaProvider {
    add(name?: string | undefined, data?: object | undefined, opts?: JobOptions | undefined): Promise<Job<any>> {
        throw new Error("Method not implemented.");
    }
    process(processor: string | ((job: Job<any>, done?: any) => Promise<any>)): Promise<void> {
        throw new Error("Method not implemented.");
    }
}