export interface OverallStats {
  projects: number;
  estimates: number;
  applicants: number;
  customers: number;
  ytd: number;
}

export interface ProjectsStat {
  inProgress: number;
  estimatePending: number;
  finalProposalPending: number;
  pendingSiteVisitSchedule: number;
}

export interface Income {
  date?: string;
  stripe: number;
  ach: number;
  cash: number;
}
