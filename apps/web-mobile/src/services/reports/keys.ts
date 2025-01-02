import { QueryKey } from '@tanstack/react-query';

export const recyclingReportsKey = (): QueryKey => ['useRecyclingReports'];

export const recyclingReportKey = (id: string): QueryKey => ['useRecyclingReport', id];

export const recyclingReportByUserKey = (id: string): QueryKey => ['useRecyclingReportByUser', id];
