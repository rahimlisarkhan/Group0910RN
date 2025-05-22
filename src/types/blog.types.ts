export type Status = 'active' | 'inactive' | 'pending'; //union
export type License = 'BASIC' | 'PRO' | 'ENTERPRISE';

type Role = ['admin', 'user', 'guest']; //tuple

export interface AuthPayload {
  email: string;
  password: string;
  full_name: string;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export type UserAddress = {
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
};

export type Profile = {
  name: string;
  age: number;
  email: string;
  status: Status;
  createdAt: Date;
  imgData: unknown;
  gender: Gender;
  gallery: (string | null)[];
  isActive: boolean;
  isAdmin: boolean;
  img_url: string | null;
  role: Role;
  address: UserAddress;
};

export type PlatformUser = {
  id: string;
  name: string;
  license: License;
  status: Status;
  partner: string;
  slack_url: string;
};

// const user: Profile<> = {

// }

// export type Account = Profile & PlatformUser;

// const user: Account = {
//   id: '123',
//   name: 'John Doe',
//   license: 'BASIC',
//   status: 'active',
//   partner: 'Partner A',
//   slack_url: 'https://slack.com/user/123',
//   createdAt: new Date(),
//   imgData: null,
// }

// type CssTypes = {
//   [key: string]: string | number | undefined;
// };

// Axios -> Zuntand-> Account

export interface ICategory {
  id: number;
  name: string;
}

export interface Actors {
  id: number;
  name: string;
  surname: string;
  img_url: string;
}

export interface IMovieIdData extends IMovie {
  actors: Actors[];
}

export interface IMovie {
  id: 398;
  title: string;
  cover_url: string;
  fragman: string;
  watch_url: string;
  adult: boolean;
  run_time_min: number;
  imdb: number;
  overview: string;
  created_at: string;
  category: ICategory;
}

export interface IProfile {
  id: number;
  full_name: string;
  email: string;
  img_url: string;
  created_at: string;
}

export interface IToken {
  access_token: string;
}

export interface IAuthResponse {
  tokens: IToken;
  profile: IProfile;
}
