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
    WORKSHOP = "Workshop",
    QUESTIONNAIRE = "Questionnaire",
    TEST = "Test",
    LABORATORY_WORK = "Laboratory work",
    EXAM = "Exam"
}

export enum ReviewStatus {
    DRAFT = "Draft",
    READY_FOR_REVIEW = "Ready for review",
    UNDER_REVIEW = "Under review",
    BACK_TO_REWORK = "Back to rework",
    CANCRLLED = "Cancelled",
    REVIEWED = "Reviewed"
}