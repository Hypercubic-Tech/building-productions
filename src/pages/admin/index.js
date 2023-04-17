import { useEffect, useState } from "react";
import AdminDashboard from "@/components/admin/AdminDashboard";

const index = () => {
    const [ allowed, setAllowed ] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('role') === 'SUPER_ADMIN') {
            setAllowed(true);
        }
    }, []);
    
    return <>{allowed ? <AdminDashboard /> : <>Not found</>}</>;
};

export default index;