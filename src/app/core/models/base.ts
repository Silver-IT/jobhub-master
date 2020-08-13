export interface Entity {
  id?: string;
  deletedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export enum Opinion {
  Yes = 'YES',
  No = 'NO',
  NotSure = 'NOT_SURE'
}

export interface Location {
  latitude: number;
  longitude: number;
}

export enum TimeUnit {
  Year = 'YEAR',
  Month = 'MONTH',
  Week = 'WEEK',
  Day = 'DAY',
  Hour = 'HOUR',
}

export enum SortByDateType {
  MostRecent = 'MOST_RECENT',
  FromOldest = 'FROM_OLDEST'
}

export enum ArchivedFilterType {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED'
}

export enum SourceFoundUs {
  Referral = 'REFERRAL',
  Google = 'GOOGLE',
  Instagram = 'INSTAGRAM',
  Facebook = 'FACEBOOK',
  Pinterest = 'PINTEREST',
  Linkedin = 'LINKEDIN',
  PastCustomer = 'PAST_CUSTOMER',
  HomeShow = 'HOME_SHOW',
  Signage = 'SIGNAGE',
  Other = 'OTHER'
}

export interface MapMarker<T> {
  latitude: number;
  longitude: number;
  address: string;
  meta: T;
}

export interface ChartItem {
  name: string;
  value: number;
}

export enum SeparatorType {
  Comma = 'COMMA',
  Slash = 'SLASH'
}

export const DEFAULT_FILTER_FROM_DATE = new Date('Jan 1, 1900').toISOString();
export const DEFAULT_FILTER_TO_DATE = new Date('Jan 1, 2100').toISOString();
