import Table from "../utils/Table/Table";
import axios from "axios";

import { useState, useEffect } from "react";

function MaxMinWinnerProducerInterval() {
    const [maxMinWinnerProducerInterval, setMaxMinWinnerProducerInterval] = useState({
        max: [],
        min: []
    });

    const tableColumns = ["Producer", "Interval", "Previous Year", "Following Year"];

    const fetchMaxMinWinnerProducerInteval = async () => {
        const { data } = await axios.get("https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers");

        setMaxMinWinnerProducerInterval(data);
    };

    useEffect(() => {
        fetchMaxMinWinnerProducerInteval();
    }, []);

    return (
        <>
            <div className="maxmin-container">
                <p className="maxmin-title">Maximum</p>
                <Table columns={tableColumns} tableData={maxMinWinnerProducerInterval.max} />
                <p className="maxmin-title">Minimum</p>
                <Table columns={tableColumns} tableData={maxMinWinnerProducerInterval.min} />
            </div>
        </>
    );
}

export default MaxMinWinnerProducerInterval;