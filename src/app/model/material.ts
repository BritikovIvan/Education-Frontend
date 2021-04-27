import { Discipline } from "./discipline";

export interface Material {
    id: number;
    name: string;
    type: string;
    creationDate: Date;
    reviewFinishDate: Date;
    discipline: Discipline;
    author: string;
    reviewer: string;
    description: string;
    reviewStatus: string;
}