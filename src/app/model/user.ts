export interface User {
    id: number;
    fullName: string;
    email: string;
    password: string;
    role: UserRole;
}

export enum UserRole {
    ADMIN = 'Admin',
    PROFESSOR = 'Professor',
    TEACHER = 'Teacher',
    STUDENT = 'Student'
}