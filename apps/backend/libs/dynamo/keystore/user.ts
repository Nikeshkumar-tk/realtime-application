import { createUniqueId } from "../../common/utils/utils";
import { User, UserRole } from "../../types/user";
import { KeyDiscriptor } from "../utils/keyDiscriptor";

export const getUserPrimaryKey = ({ email }: { email: string }) => {
  return `${KeyDiscriptor.USER}#${email}`
};

export const getUserSortKey = ({ email }: { email: string }) => {
  return `${KeyDiscriptor.USER}#${email}`;
};

export const getUserDynamoDBKeys = ({ email }: { email: string }) => {
  return {
    PK: getUserPrimaryKey({ email }),
    SK: getUserSortKey({ email }),
  };
};

export const createUserDBObject = (input: CreateUserObjectInput) => {
  const userObject: User = {
    id: createUniqueId(),
    email: input.email,
    ...getUserDynamoDBKeys({ email: input.email }),
    name: input.name,
    createdAt:Date.now(),
    updatedAt:null,
    deletedAt: null,
    deleted: false,
    role: UserRole.USER
  };
  return userObject
};

export type CreateUserObjectInput = {
  email: string;
  name: string;
};
