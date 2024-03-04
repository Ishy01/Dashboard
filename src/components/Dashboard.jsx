import React from "react";
import { Link } from "react-router-dom";
import DashboardStatsGrid from "./DashboardStatsGrid";

export default function Dashboard() {
  return (
    <div>
      Dashboard <Link to="/products">go to products</Link>
      <DashboardStatsGrid/>
    </div>
  );
}
