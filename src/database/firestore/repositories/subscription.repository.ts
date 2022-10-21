import { ResourceType, Subscription } from '../../../schema';
import { CommonFirestoreRepository, ICommonFirestoreRepositoryConstructorParams } from './common.repository';

interface ISubscriptionFirestoreRepositoryConstructorParams extends Omit<ICommonFirestoreRepositoryConstructorParams, 'entity'> {}

export class SubscriptionFirestoreRepository extends CommonFirestoreRepository<Subscription> {
  public constructor(params: ISubscriptionFirestoreRepositoryConstructorParams) {
    const superParams: ICommonFirestoreRepositoryConstructorParams = {
      whitelabel: params.whitelabel,
      entity: ResourceType.SUBSCRIPTION,
    };

    super(superParams);
  }
}