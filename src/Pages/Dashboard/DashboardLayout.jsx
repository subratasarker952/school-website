import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <h1>this is dashboard layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;