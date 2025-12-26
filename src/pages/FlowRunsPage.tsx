import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "../components/Layout";
import Card from "../components/Card";

import { runsForFlow } from "../api/runs.api";
import type { FlowRun } from "../models/run";

export default function FlowRunsPage() {
  const { flowId } = useParams<{ flowId: string }>();
  const navigate = useNavigate();

  const [runs, setRuns] = useState<FlowRun[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!flowId) return;

    runsForFlow(flowId)
      .then(setRuns)
      .finally(() => setLoading(false));
  }, [flowId]);

  return (
    <Layout>
      <h1>Runs</h1>
      <p>
        Flow ID: <strong>{flowId}</strong>
      </p>

      {loading && <p>Loading runs...</p>}

      {!loading && runs.length === 0 && <p>No runs found.</p>}

      {runs.map(run => (
        <Card key={run.id}>
          <div className="run-row">
            <div>
              <strong>Run #{run.id}</strong>
              <p>Status: {run.status}</p>
            </div>

            <button onClick={() => navigate(`/runs/${run.id}`)}>
              Details →
            </button>
          </div>
        </Card>
      ))}
    </Layout>
  );
}
