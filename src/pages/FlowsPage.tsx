import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Card from "../components/Card";

import { listFlows } from "../api/flows.api";
import type { FlowDefinition } from "../models/flow";

export default function FlowsPage() {
  const [flows, setFlows] = useState<FlowDefinition[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    listFlows()
      .then(setFlows)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <h1>Flows</h1>

      {loading && <p>Loading flows...</p>}

      {!loading && flows.length === 0 && <p>No flows found.</p>}

      {flows.map(flow => (
        <Card key={flow.id}>
          <h2>{flow.name}</h2>

          <p>
            Flow ID: <strong>{flow.id}</strong>
          </p>

          <button
            onClick={() => navigate(`/flows/${flow.id}/runs`)}
          >
            View Runs →
          </button>
        </Card>
      ))}
    </Layout>
  );
}
