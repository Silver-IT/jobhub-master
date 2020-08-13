import { Entity } from './base';
import { Project, ProjectAccessoryType } from './project';
import { ImageAttachment } from './attachment';
import { DeclineReason } from './decline';

export enum FinalProposalStatus {
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED',
  Pending = 'PENDING',
}


export enum HardscapeBrand {
  Belgard = 'BELGARD',
  TechoBloc = 'TECHO_BLOC',
  Unilock = 'UNILOCK',
  Cambridge = 'CAMBRIDGE',
  Nicolock = 'NICOLOCK',
  Rinox = 'RINOX',
  Pavestone = 'PAVESTONE',
  Ideal = 'IDEAL',
  Other = 'OTHER',
}

export enum WarrantyWorkmanShip {
  OneYear = '1_YEAR',
  TwoYears = '2_YEARS',
  ThreeYears = '3_YEARS',
  FourYears = '4_YEARS',
  FiveYears = '5_YEARS',
}

export interface AccessoryLayout extends Entity {
  type: ProjectAccessoryType;
  comment: string;
  attachments: ImageAttachment[];
}

export interface CostEstimate extends Entity {
  type: ProjectAccessoryType;
  comment: string;
  accept: boolean;
  cost: number;
}

export interface ProcedureStep extends Entity {
  title: string;
  comment: string;
}

export interface ProjectProcedure extends Entity {
  type: ProjectAccessoryType;
  steps: ProcedureStep[];
}

export interface FinalProposal extends Entity {
  existingSiteAssessment: string;
  paversSize: string;
  paversQuality: string;
  paversColor: string;
  layouts: AccessoryLayout[];
  existingMaterialRemoval: string;
  procedures: ProjectProcedure[];
  startDate: Date;
  endDate: Date;
  workPlan: string;
  attachments: ImageAttachment[];
  costEstimates: CostEstimate[];
  status: FinalProposalStatus;
  declineReasons: DeclineReason[];
  declineComment: string;
  discount: number;
  applyTax: boolean;
  project: Project;
}
