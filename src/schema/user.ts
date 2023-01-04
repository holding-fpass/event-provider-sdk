import { Certificate } from "./certificate";
import { Course } from "./course";
import { Device } from "./device";
import { Metadata } from "./metadata";
import { Playlist } from "./playlist";
import { ProviderExtra } from "./provider";
import {
  Resource,
  ResourceType,
  DisplayResource,
  SearchableResource,
} from "./resource";
import { Scope } from "./scope";
import { Subscription } from "./subscription";
import { Transaction } from "./transaction";
import { Whitelabel } from "./whitelabel";
import { FormResponse } from "./form";
import { Tag } from "./tag";
import { Interaction } from "./interaction";

export enum UserPermission {
  ADMINISTRATOR = "administrator",
  MACHINE = "machine",
  MENTOR = "mentor",
  PRODUCER = "producer",
  STUDENT = "student",
  SYSTEM = "system",
}

export enum UserData {
  TAX_ID = "taxId",
  NAME = "name",
  EMAIL = "email",
  PHONE = "phone",
  ROLL = "roll",
  COMPANY = "company",
  CEP = "cep",
  ROAD = "road",
  HOUSE_NUMBER = "houseNumber",
  COMPLEMENT = "complement",
  DISTRICT = "district",
  CITY = "city",
  STATE = "state",
  EXTERNAL_ID = "externalId",
  CUSTOM_001 = "custom_001",
  CUSTOM_002 = "custom_002",
  CUSTOM_003 = "custom_003",
  CUSTOM_004 = "custom_004",
  CUSTOM_005 = "custom_005",
  CUSTOM_006 = "custom_006",
  CUSTOM_007 = "custom_007",
  CUSTOM_008 = "custom_008",
  CUSTOM_009 = "custom_009",
  CUSTOM_010 = "custom_010",
}

export enum UserStatus {
  CREATED = "created",
  ACTIVE = "active",
  UNAVALIABLE = "unavaliable",
  DELETED = "deleted",
}

export const UserStatusTransitionMap = new Map<UserStatus, UserStatus[]>([
  [UserStatus.CREATED, [UserStatus.ACTIVE, UserStatus.DELETED]],
  [UserStatus.ACTIVE, [UserStatus.DELETED, UserStatus.UNAVALIABLE]],
  [UserStatus.UNAVALIABLE, [UserStatus.DELETED]],
  [UserStatus.DELETED, [UserStatus.CREATED]],
]);
export class User extends Resource<UserStatus> implements SearchableResource {
  id!: string;
  resourceType = ResourceType.USER;
  transitionMap = UserStatusTransitionMap;
  email!: string;
  name?: string;
  taxId?: string;
  phone?: string;
  externalId?: string;
  token?: string;
  permission!: UserPermission;
  providerExtra?: ProviderExtra[];
  // Data
  data?: Record<UserData, string>;
  // Media
  imageUrl?: string;
  image128x128?: string;
  // Permissions
  whitelabel!: Whitelabel;
  devices?: Partial<Device>[];
  scopes?: Scope[];
  restricted?: boolean;
  // Assessements
  formResponses?: Partial<FormResponse>[];
  certificates?: Partial<Certificate>[];
  // Extras
  contentExtra?: Metadata[];
  tags?: Partial<Tag>[];
  _systemTags?: Partial<Tag>[];
  // Interactions
  interactionsLeave?: Interaction[];
  // Purchases
  balance?: number;
  subscriptions?: Partial<Subscription>[];
  courses?: Partial<Course>[];
  transactions?: Partial<Transaction>[];
  // Playlist
  favoritePlaylist?: Partial<Playlist>;
  suggestPlaylist?: Partial<Playlist>;
  // SearchableResource implementation
  isPublic = false;
  asDisplayResource(resource: any): DisplayResource {
    const data = resource as User;
    return {
      resourceType: ResourceType.USER,
      resourceId: data.resourceId,
      h1: data.name,
    };
  }
}
