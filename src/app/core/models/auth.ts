import { Entity } from './base';
import { Project } from './project';
import { PatioPackageSchedule } from './schedule';

export interface LoginResponse {
  accessToken: string;
}

export enum UserRole {
  Contractor = 'CONTRACTOR',
  Customer = 'CUSTOMER',
  SuperAdmin = 'SUPER_ADMIN',
}

export enum InvitationStatus {
  Pending = 'PENDING',
  Sent = 'SENT',
  Accepted = 'ACCEPTED'
}

export interface CreditCard extends Entity {
  cardName: string;
  cardNumber: string;
  yy: string;
  mm: string;
  cvv: string;
}

export interface UserSpecificProfile {
  id?: string;
  user?: User;
}

export interface User extends Entity {
  email: string;
  isEmailVerified: boolean;
  role: UserRole;
  firstName: string;
  lastName: string;
  phone: string;
  avatar?: string;
  ideas?: string[];
  creditCard: CreditCard;
  address?: string;
  latitude?: number;
  longitude?: number;
  invitationStatus: InvitationStatus;
}

export interface Customer extends User {
  projectCount: number;
  ideaCount: number;
}

export interface DecodedToken {
  id: string;
  email: string;
  isEmailVerified: boolean;
  role: UserRole;
  iat: number;
  exp: number;
}

export interface Profile {
  firstName: string;
  lastName: string;
  phone: string;
  avatar?: string;
}

export interface AcceptInvitePayload {
  temporaryPassword: string;
  password: string;
  token: string;
}

export interface CustomerRegisterPayload {
  projects?: Project[];
  patioPackage?: PatioPackageSchedule;
  user: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    ideas: string[];
    address?: string;
    latitude?: number;
    longitude?: number;
  };
}
