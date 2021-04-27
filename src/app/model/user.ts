export interface User {
    id: number;
    fullname: string;
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