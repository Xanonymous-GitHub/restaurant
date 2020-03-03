export interface User {
  id: string;
  name: string;
  level: UserLevel;
  avatar?: string;
  description?: string;
  verified?: boolean;
}

export enum UserLevel {
  ALPHA = 'alpha',
  BETA = 'beta',
  GAMMA = 'gamma',
  OMEGA = 'omega'
}
