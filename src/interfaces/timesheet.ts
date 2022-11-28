export interface ITimesheet {
  totalHoursSubjected: string;
  predictedHoursSubjected: string;
  monthTotalHours: string;
  extraHours: string;
  missingHours: string;
  timesheet: {
    project: string;
    activities: string;
    start: string;
    hours: string;
    subjectedHours: string;
  }[];
}
