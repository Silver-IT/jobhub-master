import { Entity } from './base';

export interface NetworkContractorCategory extends Entity {
  id?: string;
  name: string;
  published: boolean;
}

export interface NetworkContractor extends Entity {
  id: string;
  companyName: string;
  address: string;
  contacts: string;
  website: string;
  serviceDescription: string;
  category: NetworkContractorCategory;
  logoUrl: string;
}
