import { ResourceType } from './type'

export abstract class ResourceBase {
  constructor(
    public resourceId: string,
    public resourceType: ResourceType,
    public data?: any
  ) {}
}