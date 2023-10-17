import {
  Global,
  Injectable
} from '@nestjs/common';
import {ObjectId} from 'mongodb';


@Global()
@Injectable()
export class UtilityService {
  generateObjectId(): string {
    const objectId = new ObjectId();
    return objectId.toHexString();
  }


}
