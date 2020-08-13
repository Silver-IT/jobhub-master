import { PageName } from './page-name';

export class PageVisitOverview {
  page: PageName;
  sub: string;
  count: number;
}

export interface SessionCount {
  date: string;
  count: number;
}
