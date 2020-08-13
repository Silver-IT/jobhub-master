import { User } from './auth';
import { Project } from './project';
import { PatioPackage, PatioPackageAddition } from './patio-package';

export enum ScheduleType {
  SiteVisitSchedule = 'SITE_VISIT_SCHEDULE',
  ProjectStart = 'PROJECT_START',
  PickOutPaver = 'PICK_OUT_PAVER'
}

export enum ScheduleStatus {
  Pending = 'PENDING',
  Accepted = 'ACCEPTED',
  Expired = 'EXPIRED',
  Declined = 'DECLINED',
  Done = 'DONE',
}

export interface Schedule {
  id?: string;
  type: ScheduleType;
  from: string;
  to: string;
  status: ScheduleStatus;
  data?: {
    name: string;
    id: string;
    user?: User;
    project?: Project;
    patioPackage?: PatioPackageSchedule;
  };
}

export interface Calendar {
  id: string;
  summary: string;
  timeZone: string;
  backgroundColor: string;
  foregroundColor: string;
}

export interface AddCalendarEventPayload {
  start: string;
  end: string;
  summary: string;
  description: string;
}

export interface PatioPackageSchedule {
  packageType: PatioPackage;
  additional?: PatioPackageAddition[];
  option?: string;
}

export interface ScheduleTimeSlot {
  from: Date;
  to: Date;
}

export enum ScheduleDuration {
  Minutes30 = 30,
  Minutes60 = 60
}
