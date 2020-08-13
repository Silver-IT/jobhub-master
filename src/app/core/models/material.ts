import { Entity } from './base';
import { ProjectAccessoryType } from './project';

export enum MaterialAmountType {
  Bags = 'BAGS',
  Yards = 'YARDS',
  Roll = 'ROLL',
  SquareFeet = 'SQUARE_FEET',
  LinerFeet = 'LINER_FEET',
  Pallets = 'PALLETS',
  Tubes = 'TUBES',
  Unit = 'UNIT',
}

export enum MaterialOrderGroupType {
  Layout = 'LAYOUT',
  LayoutAccessory = 'LAYOUT_ACCESSORY',
  Bulk = 'BULK',
  Other = 'OTHER',
}


export interface MaterialRequestItem extends Entity {
  type: ProjectAccessoryType;
  notes: string[];
}

export interface MaterialOrderItem extends Entity {
  amount: string;
  amountType: MaterialAmountType;
  color: string;
  name?: string;
  brand?: string;
  style?: string;
  requestDate?: string;
  comment?: string;
}

export interface MaterialOrderGroup extends Entity {
  items: MaterialOrderItem[];
  layoutType: ProjectAccessoryType;
  groupType: MaterialOrderGroupType;
}
