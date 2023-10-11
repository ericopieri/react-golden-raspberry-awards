import Card from "../Card/Card";

function DashboardCard({ title, children}) {
    return (
        <Card>
            <div className="title-card">
                <h2>{ title }</h2>
            </div>
            <div className="dashboard-card-content">
                { children }
            </div>
        </Card>
    );
}

export default DashboardCard;