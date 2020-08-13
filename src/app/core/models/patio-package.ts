export enum PatioPackage {
  Economy = 'ECONOMY_SERIES',
  Entertainment = 'ENTERTAINMENT_SERIES',
  Executive = 'EXECUTIVE_SERIES',
  DeckExtender = 'DECK_EXTENDER_SERIES',
  Walkway = 'WALKWAY_PACKAGES',
  PoolPatio = 'NEW_POOL_PATIO_PACKAGES',
  HardscapeBar = 'HARDSCAPE_BAR',
  HardscapeCouch = 'HARDSCAPE_COUCH',
  HardscapeGrill = 'HARDSCAPE_GRILL',
}

export enum PatioPackageAddition {
  FirePit = 'FIRE_PIT',
  SittingWall = 'SITTING_WALL',
  Pillars = 'PILLARS',
  WallLights = 'WALL_LIGHTS',
  OutdoorSpeakers = 'OUTDOOR_SPEAKERS',
  TimberFrameOrVinylPavilion = 'TIMBER_FRAME_OR_VINYL_PAVILION',
  OutdoorLighting = 'OUTDOOR_LIGHTING',
  LandscapeDesignAndInstallation = 'LANDSCAPE_DESIGN_AND_INSTALLATION',
  GraniteSteps = 'GRANITE_STEPS',
  SideRetainingWalls = 'SIDE_RETAINING_WALLS',
  Curbing = 'CURBING',
  PoolCoping = 'POOL_COPING',
}

export const patioPackageAdditions = [
  {image: 'assets/images/accessory-types/fire-pit.png', value: PatioPackageAddition.FirePit, label: 'Fire Pit'},
  {image: 'assets/images/accessory-types/sitting-wall.png', value: PatioPackageAddition.SittingWall, label: 'Sitting Wall'},
  {image: 'assets/images/accessory-types/pillars.png', value: PatioPackageAddition.Pillars, label: 'Pillars'},
  {image: 'assets/images/accessory-types/lighting.png', value: PatioPackageAddition.WallLights, label: 'Wall Lights'},
  {image: 'assets/images/accessory-types/outdoor-speaker.png', value: PatioPackageAddition.OutdoorSpeakers, label: 'Outdoor speakers'},
  {image: 'assets/images/accessory-types/timber-frame.png', value: PatioPackageAddition.TimberFrameOrVinylPavilion, label: 'Timber frame or Vinyl pavilion'},
  {image: 'assets/images/accessory-types/outdoor-light.png', value: PatioPackageAddition.OutdoorLighting, label: 'Outdoor lighting'},
  {image: 'assets/images/accessory-types/landscape-design.png', value: PatioPackageAddition.LandscapeDesignAndInstallation, label: 'Landscape design and installation'},
  {image: 'assets/images/accessory-types/granite-step.png', value: PatioPackageAddition.GraniteSteps, label: 'Granite Steps'},
  {image: 'assets/images/accessory-types/side-retaining-wall.png', value: PatioPackageAddition.SideRetainingWalls, label: 'Side Retaining Walls'},
  {image: 'assets/images/accessory-types/curbing.png', value: PatioPackageAddition.Curbing, label: 'Curbing'},
  {image: 'assets/images/accessory-types/pool-coping.png', value: PatioPackageAddition.PoolCoping, label: 'Pool Coping'},
];

export class PatioPackageOption {
  label: string;
  price?: number;
  value?: any;

  constructor(label: string, price?: number, value?: any) {
    this.label = label;
    this.price = price;
    this.value = value;
  }
}

export function getPatioPackageAdditions(values: PatioPackageAddition[]): {image: string, label: string, value: PatioPackageAddition}[] {
  return patioPackageAdditions.filter(option => values.find(x => x === option.value));
}
