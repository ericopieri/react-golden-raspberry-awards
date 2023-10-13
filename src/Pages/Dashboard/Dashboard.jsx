import DashboardCard from "../../components/DashboardCard/DashboardCard";
import MultipleWinnersYearsTable from "../../components/DashboardTables/MultipleWinnersYearsTable.jsx";
import Top3StudiosMoreWinnersTable from "../../components/DashboardTables/Top3StudiosMoreWinnersTable";
import MaxMinWinnerProducerInterval from "../../components/DashboardTables/MaxMinWinnerProducerInterval";
import WinnersPerYear from "../../components/DashboardTables/WinnersPerYear";

function Dashboard() {
    return (
        <section className="dashboard-content">
            <h1 className="title-dashboard">Dashboard</h1>
            <div className="dashboard-container">
                <DashboardCard title="List years with multiple winners">
                    <MultipleWinnersYearsTable />
                </DashboardCard>
                <DashboardCard title={"Top 3 Studios winners"}>
                    <Top3StudiosMoreWinnersTable />
                </DashboardCard>
                <DashboardCard title={"Producers with longest and shortest interval between wins"}>
                    <MaxMinWinnerProducerInterval />
                </DashboardCard>
                <DashboardCard title={"List movie by year"}>
                    <WinnersPerYear />
                </DashboardCard>
            </div>
        </section>
    );
}

export default Dashboard;