import { Routes, Route, Navigate } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Building } from "./pages/Building";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="/buildings" />} />
        <Route path="/buildings" element={<Home />} />
        <Route path="/building/:id" element={<Building />} />
      </Route>
    </Routes>
  );
}
