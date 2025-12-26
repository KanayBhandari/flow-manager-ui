import { http } from "./http";
import type { FlowDefinition } from "../models/flow";

export const listFlows = () =>
  http<FlowDefinition[]>("/flows/");

export const runFlow = (payload: any) =>
  http("/flow/run", {
    method: "POST",
    body: JSON.stringify(payload),
  });
