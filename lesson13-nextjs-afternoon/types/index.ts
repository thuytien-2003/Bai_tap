/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  assigneeId?: number;
  [key: string]: any;
}
