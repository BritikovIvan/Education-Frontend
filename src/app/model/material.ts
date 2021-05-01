import { Discipline } from "./discipline";
import { User } from "./user";

export interface Material {
    id: number;
    name: string;
    type: MaterialType;
    creationDate: Date;
    reviewFinishDate: Date;
    academicDiscipline: Discipline;
    author: User;
    reviewer: User;
    description: string;
    reviewStatus: ReviewStatus;
}

export enum MaterialType {
    Workshop = "Workshop",
    Questionnaire = "Questionnaire",
    Test = "Test",
    Laboratory_work = "Laboratory work",
    Exam = "Exam"
}

export enum ReviewStatus {
    Draft = "Draft",
    Ready_for_review = "Ready for review",
    Under_review = "Under review",
    Back_to_rework = "Back to rework",
    Cancelled = "Cancelled",
    Reviewed = "Reviewed"
}