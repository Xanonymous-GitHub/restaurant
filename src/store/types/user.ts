export interface User {
  id: string;
  name: string;
  level: UserLevel;
  avatar?: string;
  description?: string;
  verified: number;
}

export enum UserLevel {
  ALPHA = 'alpha',
  BETA = 'beta',
  GAMMA = 'gamma',
  OMEGA = 'omega'
}

