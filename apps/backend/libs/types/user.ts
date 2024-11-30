export type User = {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    createdAt: number;
    updatedAt: number | null;
    deleted: boolean;
    deletedAt: string | null
}

export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER"
}