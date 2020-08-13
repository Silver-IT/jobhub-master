import { Entity } from './base';
import { enumToOptions } from '../utils/enum.util';

export enum JobType {
  PartTime = 'PART_TIME',
  FullTime = 'FULL_TIME',
}

export enum SalaryType {
  Yearly = 'YEAR',
  Monthly = 'MONTH',
  HOURLY = 'HOUR',
}

export interface Job extends Entity {
  id?: string;
  title: string;
  description: string;
  type: JobType;
  salary: number;
  salaryType: SalaryType;
  remote: boolean;
  hardSkills?: string[];
  softSkills?: string[];
}

export interface Applicant {
  email: string;
  fullName: string;
  phone: string;
  cv: string;
  job: Job;
}


export function parseJobType(type: JobType, remote: boolean) {
  let text = '';
  if (JobType.PartTime) {
    text = 'Part-Time';
  } else if (JobType.FullTime) {
    text = 'Full-Time';
  }
  if (remote) {
    text += ' Remote';
  }
  return text;
}

export const hiringOptions = {
  jobTypeOptions: enumToOptions<JobType>(JobType),
  salaryTypeOptions: enumToOptions<SalaryType>(SalaryType)
};
