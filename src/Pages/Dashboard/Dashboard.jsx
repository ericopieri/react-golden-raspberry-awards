import { useEffect } from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import MultipleWinnersYearsTable from "../../components/Dashboard/MultipleWinnersYearsTable.jsx";

import Axios from "axios";

function Dashboard({ }) {
    return (
        <section className="dashboard-content">
            <h1>Dashboard</h1>
            <div className="dashboard-container">
                <DashboardCard title={"a"}>
                    <MultipleWinnersYearsTable></MultipleWinnersYearsTable>
                </DashboardCard>
                <DashboardCard title={"b"}>a</DashboardCard>
                <DashboardCard title={"c"}>a</DashboardCard>
                <DashboardCard title={"d"}>a</DashboardCard>
            </div>
        </section>
    );
}

export default Dashboard;