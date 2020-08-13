import { Entity, Opinion } from './base';
import { MaterialType } from './idea-board';
import { ImageAttachment } from './attachment';
import { User, UserSpecificProfile } from './auth';
import { enumToOptions } from '../utils/enum.util';
import { DeclineReason, declineReasonLabels } from './decline';
import { Estimate } from './estimate';
import { FinalProposal, HardscapeBrand, WarrantyWorkmanShip } from './final-proposal';
import { SortByDateType } from './base';
import { Schedule } from './schedule';
import { Milestone } from './milestone';

export enum ProjectAccessoryType {
  Steps = 'STEPS',
  SittingWall = 'SITTING_WALL',
  Pillars = 'PILLARS',
  Lighting = 'LIGHTING',
  Patio = 'PATIO',
  Walkway = 'WALKWAY',
  RetainingWall = 'RETAINING_WALL',
  PoolPatio = 'POOL_PATIO',
  FirePit = 'FIRE_PIT',
  DrivewayParking = 'DRIVEWAY_PARKING',
  Veneer = 'VENEER',
  Fireplace = 'FIREPLACE',
  OutdoorKitchen = 'OUTDOOR_KITCHEN',
  CleaningSanding = 'CLEANING_SANDING',
  MinorRepair = 'MINOR_REPAIR',
  LandscapingPlants = 'LANDSCAPING_PLANTS',
  Other = 'OTHER',
}

export const projectAccessoryTypeLabels = {
  [ProjectAccessoryType.Steps]: 'Steps',
  [ProjectAccessoryType.SittingWall]: 'Sitting Wall',
  [ProjectAccessoryType.Pillars]: 'Pillars',
  [ProjectAccessoryType.Lighting]: 'Lighting',
  [ProjectAccessoryType.Patio]: 'Patio',
  [ProjectAccessoryType.Walkway]: 'Walkway',
  [ProjectAccessoryType.RetainingWall]: 'Retaining Wall',
  [ProjectAccessoryType.PoolPatio]: 'Pool Patio',
  [ProjectAccessoryType.FirePit]: 'Fire Pit',
  [ProjectAccessoryType.DrivewayParking]: 'Driveway Parking',
  [ProjectAccessoryType.Veneer]: 'Veneer',
  [ProjectAccessoryType.Fireplace]: 'Fireplace',
  [ProjectAccessoryType.OutdoorKitchen]: 'Outdoor Kitchen',
  [ProjectAccessoryType.CleaningSanding]: 'Cleaning Sanding',
  [ProjectAccessoryType.MinorRepair]: 'Minor Repair',
  [ProjectAccessoryType.LandscapingPlants]: 'Landscaping Plants',
  [ProjectAccessoryType.Other]: 'Custom Project',
};

// same as ProjectAccessoryType but available on idea board filter
export enum AvailableProjectAccessoryType {
  Patio = 'PATIO',
  Walkway = 'WALKWAY',
  PoolPatio = 'POOL_PATIO',
  RetainingWall = 'RETAINING_WALL',
  DrivewayParking = 'DRIVEWAY_PARKING',
}

export enum ProjectLocationType {
  FrontYard = 'FRONT_YARD',
  BackYard = 'BACK_YARD',
  SideYard = 'SIDE_YARD',
  PartOfPatioDesign = 'PART_OF_PATIO_DESIGN',
  Other = 'OTHER',
}

export enum ProjectShapeType {
  Straight = 'STRAIGHT',
  CurvedCorners = 'CURVED_CORNERS',
  SShaped = 'S_SHAPED',
  FreeForm = 'FREE_FORM',
  Other = 'OTHER',
}

export enum MachineAccessType {
  Yes = 'YES',
  No = 'NO',
  NotSure = 'NOT_SURE',
}

export enum PropertyGradeType {
  Level = 'LEVEL',
  FairlyLevel = 'FAIRLY_LEVEL',
  WellOutOfLevel = 'WELL_OUT_OF_LEVEL',
}

export enum SoilType {
  Clay = 'CLAY',
  Sand = 'SAND',
  Rock = 'ROCK',
  TopSoil = 'TOP_SOIL',
}

export enum DrainageType {
  Dry = 'DRY',
  SoftInSpring = 'SOFT_IN_SPRING',
  WetYearRound = 'WET_YEAR_ROUND',
}

export enum ProjectTimelineType {
  Immediately = 'IMMEDIATELY',
  About30Days = 'ABOUT_30_DAYS',
  About1To3Months = 'ABOUT_1_TO_3_MONTHS',
  About3To6Months = 'ABOUT_3_TO_6_MONTHS',
  MoreThan6Months = 'MORE_THAN_6_MONTHS',
}

export enum CleanupRequiredType {
  TopSoil = 'TOPSOIL',
  NoTopSoil = 'NO_TOPSOIL',
  TopSoilAndSeed = 'TOPSOIL_AND_SEED',
  Other = 'OTHER',
}

export enum PreferredPricePoint {
  Economy = 'ECONOMY',
  Average = 'AVERAGE',
  AboveAverage = 'ABOVE_AVERAGE',
}

export enum PreferredColor {
  EarthTone = 'EARTH_TONE',
  Brown = 'BROWN',
  ShaleGrey = 'SHALE_GREY',
  ChamplainGrey = 'CHAMPLAIN_GREY',
  OnyxBlack = 'ONYX_BLACK',
  DanvilleBlend = 'DANVILLE_BLEND',
  Sherwood = 'SHERWOOD',
  ChestnutBrown = 'CHESTNUT_BROWN',
  Sandlewood = 'SANDLEWOOD',
  Hickory = 'HICKORY',
  BedfordBrown = 'BEDFORD_BROWN'
}

export enum CostUnit {
  SquareFoot = 'SQUARE_FOOT',
  LinerFoot = 'LINER_FOOT',
  Total = 'TOTAL',
  TotalPlusTax = 'TOTAL_PLUS_TAX',
  Step = 'STEP',
  Pillar = 'PILLAR',
  Unit = 'UNIT'
}

export interface ProjectAccessory extends Entity {
  type: ProjectAccessoryType;
  materials: MaterialType;
  locationType: ProjectLocationType;
  size: string;
  shape: ProjectShapeType;
  groundState: string;
  comment: string;
}

export interface RegisterProject extends Project {
  accessories: ProjectAccessoryType[];
  attachments: string[];
}

export interface Project extends Entity {
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  projectType: ProjectAccessoryType;
  locationType: ProjectLocationType;
  projectSize: string;
  shapeType: ProjectShapeType;
  timelineType: ProjectTimelineType;
  machineAccess: MachineAccessType;
  propertyGrade: PropertyGradeType;
  soilType: SoilType;
  drainageType: DrainageType;
  comment?: string;
  budget: number;
  estimate?: Estimate;
  finalProposal?: FinalProposal;
  contractor?: UserSpecificProfile;
  milestones?: Milestone[];
  customer?: UserSpecificProfile;
  assignedContractor?: User;
  contractSignedDate?: string;
  refund?: Refund;
  estimateSkipped: boolean;
  user: User;
  siteVisitPassed?: boolean;
  governmentConfirmed?: boolean;
  governmentCallComment?: string;
}

export interface DeclineProject {
  declineReasons: DeclineReason[];
  declineComment: string;
}

export interface ConstructionProcessItem {
  image: string;
  title: string;
  description: string;
  layoutTypeNames?: string;
}

export interface ProjectDetail extends Project {
  user: User;
  accessories: ProjectAccessory[];
  interestedInFinancing: Opinion;
  designRequired: boolean;
  cleanUpType: CleanupRequiredType;
  materials: MaterialType[];
  requestDetails: string;
  manufacturer: string;
  productName: string;
  preferredSize: string;
  preferredTexture: string;
  preferredPricePoint: PreferredPricePoint;
  preferredColors: PreferredColor[];
  additionalDesigns: string;
  exteriorUtilities: string;
  exteriorHazards: string;
  exteriorInconveniences: string;
  materialStorage: string;
  materialHaulOut: string;
  downSpouts: string;
  shrubRemoval: string;
  attachments: ImageAttachment[];
  estimate?: Estimate;
  finalProposal?: FinalProposal;
  status?: ProjectStatus;
  milestones?: Milestone[];
  patioPackageProject?: boolean;
  pickOutPaverSchedule?: Schedule;
}

export interface ProjectRegister {
  projects: Project[];
  ideas: string[];
}

export const projectOptions = {
  projectTimelineTypes: enumToOptions<ProjectTimelineType>(ProjectTimelineType),
  opinion: enumToOptions<Opinion>(Opinion),
  cleanupRequiredTypes: enumToOptions<CleanupRequiredType>(CleanupRequiredType),
  materialTypes: enumToOptions<MaterialType>(MaterialType),
  preferredColors: enumToOptions<PreferredColor>(PreferredColor),
  projectLocationTypes: enumToOptions<ProjectLocationType>(ProjectLocationType),
  projectShapeTypes: enumToOptions<ProjectShapeType>(ProjectShapeType),
  costUnitTypes: enumToOptions<CostUnit>(CostUnit),
  preferredPricePoints: enumToOptions<PreferredPricePoint>(PreferredPricePoint),
  machineAccessTypes: enumToOptions<MachineAccessType>(MachineAccessType),
  soilTypes: enumToOptions<SoilType>(SoilType),
  propertyGradeTypes: enumToOptions<PropertyGradeType>(PropertyGradeType),
  drainageTypes: enumToOptions<DrainageType>(DrainageType),
  projectAccessoryTypes: enumToOptions<ProjectAccessoryType>(ProjectAccessoryType, projectAccessoryTypeLabels),
  manufacturerTypes: enumToOptions<HardscapeBrand>(HardscapeBrand),
  declineReasons: enumToOptions<DeclineReason>(DeclineReason, declineReasonLabels),
  warrantyTypes: enumToOptions<WarrantyWorkmanShip>(WarrantyWorkmanShip),
};

export const landscapingProcess = [{
  image: 'assets/images/icons/landscaping-process/consult.svg',
  title: 'Consult & Plan',
  description: 'We will spend time at the start of our engagement with the client to understand their main objectives and goals with the construction of the new ',
  layoutTypeNames: ''
}, {
  image: 'assets/images/icons/landscaping-process/materials.svg',
  title: 'Material Selection & Procurement',
  description: 'We will provide recommendations for material choices and color combinations to the client based on your desired aesthetic, durability and usability objectives. We can provide paver samples onsite or meet with clients to look at all the available options. Upon choosing materials, J & D Landscaping will order the materials and schedule all required pavers and other materials.'
}, {
  image: 'assets/images/icons/landscaping-process/pre-construction.svg',
  title: 'Pre-construction meeting',
  description: 'Prior to starting work on the first day of construction, J & D Landscaping will meet with the client to conduct a pre-construction walkthrough to ensure both parties are on the same page and that all questions have been answered prior to starting the project. We will review the laydown and construction plan that was developed in the initial phase and confirm that all requests are completed and that conditions are suitable for a high-quality project.'
}, {
  image: 'assets/images/icons/landscaping-process/construction.svg',
  title: 'Construction',
  description: 'During the construction process, we will ensure a tidy and neat job site with daily clean-ups to reduce the inconvenience of construction. During this process, J & D Landscaping will operate Monday thru Friday from 7am to 5pm, and provide daily updates to the client. If there are any questions during the construction process J & D Landscaping will always have a foreman on site who can address any concerns. Additionally, the company owners are available via mobile phone at any time for any potential escalations or unresolved issues.'
}, {
  image: 'assets/images/icons/landscaping-process/post-construction.svg',
  title: 'Post-construction meeting',
  description: 'Upon completion of the project, J & D Landscaping will meet with the customer to conduct a post-construction walkthrough to ensure the project has been completed as promised and conduct a project completion and acceptance process.'
}];

export enum ProjectStatus {
  ProjectCreated = 'PROJECT_CREATED',
  ConsultationScheduled = 'CONSULTATION_SCHEDULED',
  EstimatePending = 'ESTIMATE_PENDING',
  ReviewEstimate = 'REVIEW_ESTIMATE',
  SiteVisitScheduled = 'SITE_VISIT_SCHEDULED',
  EstimateDeclined = 'ESTIMATE_DECLINED',
  CreatingFinalProposal = 'CREATING_FINAL_PROPOSAL',
  FinalProposalPending = 'FINAL_PROPOSAL_PENDING',
  ReviewFinalProposal = 'REVIEW_FINAL_PROPOSAL',
  FinalProposalAccepted = 'FINAL_PROPOSAL_ACCEPTED',
  FinalProposalDeclined = 'FINAL_PROPOSAL_DECLINED',
  ContractRequested = 'CONTRACT_REQUESTED',
  ReviewContract = 'REVIEW_CONTRACT',
  ProjectScheduled = 'PROJECT_SCHEDULED',
  ProjectCompleted = 'PROJECT_COMPLETED',
  CompletedSiteVisit = 'COMPLETED_SITE_VISIT',
}

export interface Refund {
  id: string;
  amount: number;
  refundDate: Date;
  comment: string;
}

export enum ProjectStatusFilterType {
  All = 'ALL',
  EstimatePending = 'ESTIMATE_PENDING',
  FinalProposalPending = 'FINAL_PROPOSAL_PENDING',
  FinalProposalSent = 'FINAL_PROPOSAL_SENT',
  InProgress = 'IN_PROGRESS',
}

export interface FilterProjects {
  contractorId: string;
  sortByDate: SortByDateType;
  status: ProjectStatusFilterType;
  projectType: ProjectAccessoryType;
}
