import { MaterialType } from './idea-board';

export interface Portfolio {
  name: string;
  image: string; // TODO: confirm when we start on portfolio project
  materials: MaterialType[];
  address?: string;
  email?: string;
  phone?: string;
  comment: string;
}
