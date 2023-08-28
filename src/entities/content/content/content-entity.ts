import { ResourceType, Whitelabel } from "../../../schema";
import {
  ComplementaryMaterialClient,
  IComplementaryMaterialClient
} from "../complementary-material";

export namespace IContentClient {
  export interface IHTTPContent<Metadata = Record<string, unknown>> {
    resourceId: string;
    resourceType: ResourceType.CONTENT;
    name: string;
    type: IContentClient.EContentType;
    slug: string;
    description: string;
    image144x80: string;
    image1440x720: string;
    dateStart: string | null;
    dateEnd: string | null;
    duration: number | null;
    forms: {
      userTestForm: string | null;
      examForm: string | null;
      contentEndForm: string | null;
      publicRatingForm: string | null;
    };
    free: boolean;
    mentors: string[];
    tags: string[];
    courseId: string;
    complementaryMaterials: IComplementaryMaterialClient.IHTTPComplementaryMaterial[];
    whitelabel: Whitelabel;
    metadata: Metadata | null;
    createdAt: string;
    updatedAt: string;
  }

  export enum EContentType {
    VIDEO = 'video',
    MEET = 'meet',
    LIVE = 'live',
    LINK = 'link',
    EXAM = 'exam',
    SLIDESHOW = 'slideshow',
  }

  export namespace IClass {
    export interface IProps<Metadata = Record<string, unknown>> {
      resourceId: string;
      resourceType: ResourceType.CONTENT;
      name: string;
      type: IContentClient.EContentType;
      slug: string;
      description: string;
      image144x80: string;
      image1440x720: string;
      dateStart: Date | null;
      dateEnd: Date | null;
      duration: number | null;
      forms: {
        userTestForm: string | null;
        examForm: string | null;
        contentEndForm: string | null;
        publicRatingForm: string | null;
      };
      free: boolean;
      mentors: string[];
      tags: string[];
      courseId: string;
      complementaryMaterials: ComplementaryMaterialClient[];
      whitelabel: Whitelabel;
      metadata: Metadata | null;
      createdAt: Date;
      updatedAt: Date;
    }

    export namespace IMethods {
      export interface IConstructor {
        resourceId: IContentClient.IClass.IProps['resourceId'];
        resourceType: IContentClient.IClass.IProps['resourceType'];
        name: IContentClient.IClass.IProps['name'];
        type: IContentClient.IClass.IProps['type'];
        slug: IContentClient.IClass.IProps['slug'];
        description: IContentClient.IClass.IProps['description'];
        image144x80: IContentClient.IClass.IProps['image144x80'];
        image1440x720: IContentClient.IClass.IProps['image1440x720'];
        dateStart: IContentClient.IClass.IProps['dateStart'];
        dateEnd: IContentClient.IClass.IProps['dateEnd'];
        duration: IContentClient.IClass.IProps['duration'];
        forms: IContentClient.IClass.IProps['forms'];
        free: IContentClient.IClass.IProps['free'];
        mentors: IContentClient.IClass.IProps['mentors'];
        tags: IContentClient.IClass.IProps['tags'];
        courseId: IContentClient.IClass.IProps['courseId'];
        complementaryMaterials: IContentClient.IClass.IProps['complementaryMaterials'];
        whitelabel: IContentClient.IClass.IProps['whitelabel'];
        metadata: IContentClient.IClass.IProps['metadata'];
        createdAt: IContentClient.IClass.IProps['createdAt'];
        updatedAt: IContentClient.IClass.IProps['updatedAt'];
      }
    }
  }
}

export class ContentClient {
  private props: IContentClient.IClass.IProps;

  public constructor(props: IContentClient.IClass.IMethods.IConstructor) {
    this.props = props;
  }

  public get resourceId(): IContentClient.IClass.IProps['resourceId'] {
    return this.props.resourceId;
  }

  public get resourceType(): IContentClient.IClass.IProps['resourceType'] {
    return this.props.resourceType;
  }

  public get name(): IContentClient.IClass.IProps['name'] {
    return this.props.name;
  }

  public get type(): IContentClient.IClass.IProps['type'] {
    return this.props.type;
  }

  public get slug(): IContentClient.IClass.IProps['slug'] {
    return this.props.slug;
  }

  public get description(): IContentClient.IClass.IProps['description'] {
    return this.props.description;
  }

  public get image144x80(): IContentClient.IClass.IProps['image144x80'] {
    return this.props.image144x80;
  }

  public get image1440x720(): IContentClient.IClass.IProps['image1440x720'] {
    return this.props.image1440x720;
  }

  public get dateStart(): IContentClient.IClass.IProps['dateStart'] {
    return this.props.dateStart;
  }

  public get dateEnd(): IContentClient.IClass.IProps['dateEnd'] {
    return this.props.dateEnd;
  }

  public get duration(): IContentClient.IClass.IProps['duration'] {
    return this.props.duration;
  }

  public get forms(): IContentClient.IClass.IProps['forms'] {
    return this.props.forms;
  }

  public get free(): IContentClient.IClass.IProps['free'] {
    return this.props.free;
  }

  public get mentors(): IContentClient.IClass.IProps['mentors'] {
    return this.props.mentors;
  }

  public get tags(): IContentClient.IClass.IProps['tags'] {
    return this.props.tags;
  }

  public get courseId(): IContentClient.IClass.IProps['courseId'] {
    return this.props.courseId;
  }

  public get complementaryMaterials(): IContentClient.IClass.IProps['complementaryMaterials'] {
    return this.props.complementaryMaterials;
  }

  public get whitelabel(): IContentClient.IClass.IProps['whitelabel'] {
    return this.props.whitelabel;
  }

  public get metadata(): IContentClient.IClass.IProps['metadata'] {
    return this.props.metadata;
  }

  public get createdAt(): IContentClient.IClass.IProps['createdAt'] {
    return this.props.createdAt;
  }

  public get updatedAt(): IContentClient.IClass.IProps['updatedAt'] {
    return this.props.updatedAt;
  }
}