import DashboardCard from "../../components/DashboardCard/DashboardCard";
import MultipleWinnersYearsTable from "../../components/DashboardWidgets/MultipleWinnersYearsTable.jsx";
import Top3StudiosMoreWinnersTable from "../../components/DashboardWidgets/Top3StudiosMoreWinnersTable";
import MaxMinWinnerProducerInterval from "../../components/DashboardWidgets/MaxMinWinnerProducerInterval";
import WinnersPerYear from "../../components/DashboardWidgets/WinnersPerYear";

/**
 * Page que será exibido no conteúdo princiapal da página na rota raiz. Agrupador de painéis do tipo widget.
 *
 * @returns void
 */
function Dashboard() {
	return (
		<section className="dashboard-content">
			<h1 className="title-content">Dashboard</h1>
			<div className="dashboard-container">
				<DashboardCard title="List years with multiple winners">
					<MultipleWinnersYearsTable />
				</DashboardCard>
				<DashboardCard title={"Top 3 Studios winners"}>
					<Top3StudiosMoreWinnersTable />
				</DashboardCard>
				<DashboardCard
					title={
						"Producers with longest and shortest interval between wins"
					}
				>
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
