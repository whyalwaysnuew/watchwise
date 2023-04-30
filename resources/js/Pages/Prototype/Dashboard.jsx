import { Head } from "@inertiajs/react";

import Authenticated from "@/Layouts/Auth/Index";

const Dashboard = () => {
    return (
        <>
            <Head title="Dashboard" />
            <Authenticated />
        </>
    );
};

export default Dashboard;
