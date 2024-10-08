export type SalaryCardLabels = {
  period: string;
  download: string;
  seeMore: string;
}

export type SalaryCardProps = {
  salaryId: number;
  currency?: string;
  startDate?: string;
  endDate?: string;
  docLink?: string;
  labels?: SalaryCardLabels;
}
