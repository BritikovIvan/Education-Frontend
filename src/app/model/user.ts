export interface User {
    id: number;
    fullName: string;
    email: string;
    password: string;
    role: UserRole;
}

export enum UserRole {
    Admin = 'Admin',
    Professor = 'Professor',
    Teacher = 'Teacher',
    Student = 'Student'
}