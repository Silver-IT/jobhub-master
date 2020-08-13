import { Project } from './project';

export enum MilestoneStatus {
  Pending = 'PENDING',
  ReleaseRequested = 'RELEASE_REQUESTED',
  Released = 'RELEASED'
}

export enum EditMilestoneType {
  CashPayment = 'CASH_PAYMENT',
  Refund = 'REFUND',
  AddOn = 'ADD_ON',
  Hold = 'HOLD',
}

export enum MilestoneType {
  Deposit,
  Start,
  Final,
  Hold,
}

export enum MilestoneAddOnType {
  Addon = 'ADDON',
  Hold = 'HOLD',
  Refund = 'REFUND',
}

export enum MilestoneShowMode {
  Customer = 'CUSTOMER',
  Admin = 'ADMIN',
}

export interface Milestone {
  id: string;
  project: Project;
  name: string;
  comment: string;
  order: MilestoneType;
  amount: number;
  paidDate: Date;
  payWithCash: boolean;
  status: MilestoneStatus;
  paymentAddOns?: PaymentAddOn[];
  hold?: Milestone;
}

export interface PaymentAddOn {
  id: string;
  amount: number;
  payDate: Date;
  comment: string;
}
