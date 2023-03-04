import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Building } from "./pages/Building";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/building" element={<Building />} />
      </Route>
    </Routes>
  );
}
