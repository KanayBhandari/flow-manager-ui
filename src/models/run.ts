export interface TaskRun {
  id: number;
  task_name: string;
  success: boolean;
  output: Record<string, any>;
  timestamp: string;
}

export interface FlowRun {
  id: number;
  flow_id: string;
  status: string;
  start_time: string;
  end_time: string | null;
  tasks?: TaskRun[];
}
