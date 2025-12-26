import { http } from "./http";
import type { FlowRun } from "../models/run";

export const listRuns = () =>
  http<FlowRun[]>("/flows/runs");

export const runsForFlow = (flowId: string) =>
  http<FlowRun[]>(`/flows/${flowId}/runs`);

export const getRun = (runId: number) =>
  http<FlowRun>(`/flows/runs/${runId}`);
