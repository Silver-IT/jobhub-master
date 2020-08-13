import { Project } from './project';
import { User } from './auth';
import { NetworkContractor } from './network-contractor';

export interface SearchResult {
  projects: Project[];
  customers: User[];
  contractors: User[];
  networkContractors: NetworkContractor[];
}
