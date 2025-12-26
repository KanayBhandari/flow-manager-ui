import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import Card from "../components/Card";

import { getRun } from "../api/runs.api";
import type { FlowRun } from "../models/run";

export default function RunDetailPage() {
  const { runId } = useParams<{ runId: string }>();
  const [run, setRun] = useState<FlowRun | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!runId) return;

    getRun(Number(runId))
      .then(setRun)
      .finally(() => setLoading(false));
  }, [runId]);

  if (loading) {
    return (
      <Layout>
        <p>Loading run details...</p>
      </Layout>
    );
  }

  if (!run) {
    return (
      <Layout>
        <p>Run not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Run #{run.id}</h1>

      <Card>
        <p>
          <strong>Status:</strong> {run.status}
        </p>
        <p>
          <strong>Started:</strong> {run.start_time}
        </p>
        <p>
          <strong>Ended:</strong> {run.end_time ?? "In progress"}
        </p>
      </Card>

      <Card>
        <h2>Tasks</h2>

        {run.tasks?.map(task => (
          <div key={task.id} className="task-row">
            <span>{task.task_name}</span>
            <span>{task.success ? "✅" : "❌"}</span>
          </div>
        ))}
      </Card>
    </Layout>
  );
}
