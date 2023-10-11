import { useEffect } from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

import Axios from "axios";

function Dashboard({ }) {
    return (
        <section className="dashboard-content">
            <h1>Dashboard</h1>
            <div className="dashboard-container">
                <DashboardCard title={"a"}>a</DashboardCard>
                <DashboardCard title={"b"}>a</DashboardCard>
                <DashboardCard title={"c"}>a</DashboardCard>
                <DashboardCard title={"d"}>a</DashboardCard>
            </div>
        </section>
    );
}

export default Dashboard;