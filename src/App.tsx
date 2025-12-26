import { Routes, Route } from "react-router-dom";
import FlowsPage from "./pages/FlowsPage";
import FlowRunsPage from "./pages/FlowRunsPage";
import RunDetailPage from "./pages/RunDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FlowsPage />} />
      <Route path="/flows/:flowId/runs" element={<FlowRunsPage />} />
      <Route path="/runs/:runId" element={<RunDetailPage />} />
    </Routes>
  );
}

export default App;
