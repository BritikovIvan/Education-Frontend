import { User } from "./user";

export interface Discipline {
    id: number;
    name: string;
    abbreviation: string;
    description: string;
    author: User;
}