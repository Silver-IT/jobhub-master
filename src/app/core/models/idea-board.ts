import { ProjectAccessoryType } from './project';

export enum MaterialType {
  Pavers = 'PAVERS',
  NaturalStone = 'NATURAL_STONE',
  BlueStone = 'BLUE_STONE',
  Granite = 'GRANITE',
  Brick = 'BRICK',
  SrwSystems = 'SRW_SYSTEMS',
  Slate = 'SLATE',
  FieldStone = 'FIELD_STONE',
  Boulders = 'BOULDERS',
  Concrete = 'CONCRETE',
  StampedConcrete = 'STAMPED_CONCRETE',
  SyntheticGrass = 'SYNTHETIC_GRASS',
  ManufacturedBlock = 'MANUFACTURED_BLOCK',
  Veneer = 'VENEER',
  Other = 'OTHER',
}

export interface Idea {
  id: string;
  indexNumber: number;
  url: string;
  projectType: ProjectAccessoryType;
  materialTypes: MaterialType[];
  createdAt: string;
  updatedAt: string;
  selected?: boolean;
}
