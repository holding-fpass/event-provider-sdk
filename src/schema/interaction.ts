import { User } from "@sentry/node";
import { Resource, ResourceType } from "./resource";

export enum InteractionStatus {
  CREATED = "created",
  ACTIVE = "active",
}

export enum InteractionType {
  CLICK = "click",
  OPEN = "open",
  VIEW = "view",
}

export enum InteractionDataforwardType {
  WEBHOOK = "webhook",
  MONGODB = "mongodb",
  GCP_CLOUD_STORAGE = "gcp-cloud-storage",
  NONE = "none",
}

export const InteractionStatusTransitionMap = new Map<
  InteractionStatus,
  InteractionStatus[]
>([[InteractionStatus.CREATED, [InteractionStatus.ACTIVE]]]);

export class Interaction extends Resource<InteractionStatus> {
  productId!: string;
  productType!: ResourceType;
  type!: InteractionType;
  user!: Pick<User, "id">;
  // Media
  mediaStart?: number;
  mediaEnd?: number;
  mediaCount?: number;
}
