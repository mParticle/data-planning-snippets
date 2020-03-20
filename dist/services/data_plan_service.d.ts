import { DataPlan, DataPlanDocument, DataPlanResults, DataPlanVersion } from '@mparticle/data-planning-models';
import { Batch, BaseEvent } from '@mparticle/event-models';
interface AccessCredentials {
    workspaceId: number;
    clientId: string;
    clientSecret: string;
}
interface ValidationOptions {
    serverMode?: boolean;
}
export declare class DataPlanService {
    private workspaceId?;
    private clientId?;
    private clientSecret?;
    private apiURL;
    constructor(credentials?: AccessCredentials);
    private getToken;
    private buildUrl;
    private getAPIURL;
    private getValidationAPIURL;
    createDataPlan(dataPlanToCreate: DataPlan): Promise<DataPlan>;
    createDataPlanVersion(dataPlanId: string, dataPlanVersion: DataPlanVersion): Promise<DataPlanVersion>;
    deleteDataPlan(dataPlanId: string): Promise<boolean>;
    deleteDataPlanVersion(dataPlanId: string, versionNumber: number): Promise<boolean>;
    getDataPlan(dataPlanId: string): Promise<DataPlan>;
    getDataPlans(): Promise<DataPlan[]>;
    getDataPlanVersion(dataPlanId: string, versionNumber: number): Promise<DataPlanDocument>;
    updateDataPlan(dataPlanId: string, dataPlan: DataPlan): Promise<DataPlan>;
    updateDataPlanVersion(dataPlanId: string, versionNumber: number, dataPlanVersion: DataPlanVersion): Promise<DataPlanVersion>;
    validateEvent(event: BaseEvent, dataPlanVersion: DataPlanVersion, options?: ValidationOptions): Promise<DataPlanResults>;
    validateBatch(batch: Batch, dataPlanVersion: DataPlanVersion, options?: ValidationOptions): Promise<DataPlanResults>;
    private validateOnServer;
}
export {};
