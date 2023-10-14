import Card from "../utils/Card";

/**
 * Extensão do Card, usado para os painéis do tipo widget que estão no dashboard.
 * 
 * @param {String} title Título em destaque para o painel.
 * @param {HTMLElement} children Qualquer conteúdo texto ou HTML que vai ser alocado dentro do Card.
 * @returns void
 */
function DashboardCard({ title, children}) {
    return (
        <Card>
            <div className="title-card">
                <h2 title={title}>{ title }</h2>
            </div>
            <div className="dashboard-card-content">
                { children }
            </div>
        </Card>
    );
}

export default DashboardCard;
