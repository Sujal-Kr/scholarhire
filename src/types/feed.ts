export interface JobVacancy {
  OrgName: string;
  VacancyFor: string;
  NumberOfPeople: number;
  Salary: string;
  ExperienceLevel: string;
  Duration: string;
  DateOfPosting: string;
  LastOfRegistration: string;
  IfApplied: boolean;
  Location: string;
  KeyResponsibilities: string[];
  SkillsRequired: string[];
  WhoCanApply: string[];
  NumberOfOpenings: number;
  AnnualCTC?: string;
}
  