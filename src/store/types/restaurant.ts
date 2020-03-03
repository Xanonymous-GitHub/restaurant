export interface Restaurant {
  name: string;
  subName: string;
  description: string;
  rating: Rating;
}

export enum Rating {
  FIVE = 5,
  FOUR = 4,
  THREE = 3,
  TWO = 2,
  ONE = 1,
  BAD = 0
}
