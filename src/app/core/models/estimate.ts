import { Entity } from './base';
import {
  CostUnit,
  Project,
  ProjectAccessoryType,
  ProjectLocationType,
  ProjectShapeType,
  ProjectTimelineType
} from './project';
import { MaterialType } from './idea-board';
import { Schedule } from './schedule';
import { DeclineReason } from './decline';

export interface SiteVisitSchedule {
  id?: string;
  from: string;
  to: string;
  selected?: boolean;
}

export enum EstimateStatus {
  Declined = 'DECLINED',
  Pending = 'PENDING',
  SiteVisitScheduled = 'SITE_VISIT_SCHEDULED',
}

export interface EstimateItem {
  id: string;
  type: ProjectAccessoryType;
  materials: MaterialType[];
  locationType: ProjectLocationType;
  size: string;
  comment: string;
  costUnit: CostUnit;
  pricePerUnit: number;
}

export interface Estimate extends Entity {
  siteVisitSchedules: Schedule[];
  timelineType: ProjectTimelineType;
  projectType: ProjectAccessoryType;
  materials: MaterialType[];
  locationType: ProjectLocationType;
  groundState: string; // `What's currently there` field
  projectSize: string;
  shapeType: ProjectShapeType;
  coreProjectComment: string;
  costUnit: CostUnit;
  pricePerUnit: number;
  requestDetails: string;
  items: EstimateItem[];
  comment: string;
  project?: Project;
  status: EstimateStatus;
  contractorUserId: string;
  declineReasons: DeclineReason[];
  declineComment: string;
}
