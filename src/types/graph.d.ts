export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHello(name: String!): SayHelloResponse!\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype User {\n  id: ID!\n  email: String!\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  phoneNumber: String\n  profilePhoto: String\n  updatedAt: String\n  createdAt: String!\n  isEmailVerified: Boolean!\n  isPhoneVerified: Boolean!\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  fullName: String\n  lastLng: Float!\n  lastLat: Float!\n  lastOrientation: Float\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: SayHelloResponse;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number | null;
  password: string | null;
  phoneNumber: string | null;
  profilePhoto: string | null;
  updatedAt: string | null;
  createdAt: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  fullName: string | null;
  lastLng: number;
  lastLat: number;
  lastOrientation: number | null;
}
