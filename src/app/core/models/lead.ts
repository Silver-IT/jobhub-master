import { ArchivedFilterType, Entity, SortByDateType, SourceFoundUs } from './base';

export enum LeadType {
  ContactUs = 'CONTACT_US',
  PatioPackage = 'PATIO_PACKAGE',
  LandingPage = 'LANDING_PAGE',
  Other = 'OTHER',
}

export enum LeadStatus {
  Lead = 'LEAD',
  Processed = 'PROCESSED',
  Archived = 'ARCHIVED',
  Declined = 'DECLINED'
}

export interface Lead extends Entity {
  type: LeadType;
  fullName: string;
  phone: string;
  email: string;
  status: LeadStatus;
  address?: string;
  latitude?: number;
  longitude?: number;
  sourceFoundUs?: SourceFoundUs;
  message?: string;
}

export interface FilterLeads {
  sortByDate: SortByDateType;
  archivedType: ArchivedFilterType;
}
