import {
  Field,
  ObjectType
} from '@nestjs/graphql';
import {ResidentialProperty} from '../core/domains';


@ObjectType()
export class RealtorResidentialPropertySchema extends ResidentialProperty {

  @Field({nullable: true})
  id: string;

  @Field({nullable: true})
  buildingAmenity?: string;

  @Field({nullable: true})
  buildingBathroomTotal?: number;

  @Field({nullable: true})
  buildingBedroom?: number;

  @Field({nullable: true})
  buildingSizeInterior: number;

  @Field({nullable: true})
  buildingStoriesTotal: number;

  @Field({nullable: true})
  buildingType: string;

  @Field({nullable: true})
  distance: string;

  @Field({nullable: true})
  landLandscapeFeature: string;

  @Field({nullable: true})
  landSizeTotal: string;

  @Field({nullable: true})
  listingBoundary: string;

  @Field({nullable: true})
  mlsNumber: string;

  @Field({nullable: true})
  postalCode: string;

  @Field({nullable: true})
  priceUnformattedValue: number;

  @Field({nullable: true})
  propertyAmenityNearBy: string;

  @Field({nullable: true})
  propertyOwnershipType: string;

  @Field({nullable: true})
  propertyParkingSpaceTotal: number;

  @Field({nullable: true})
  propertyParkingType: string;

  @Field({nullable: true})
  propertyType: string;

  @Field({nullable: true})
  provinceName: string;

  @Field({nullable: true})
  remark: string;

  @Field({nullable: true})
  city?: string;

  @Field({nullable: true})
  listedTime: Date;

  @Field({nullable: true})
  modifiedTime: Date;

}
