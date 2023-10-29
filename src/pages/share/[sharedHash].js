import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "../../components/ui/LoadingPage";
import Project from "../../components/projects/Project";

const SharedProjectPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [project, setProject] = useState(null);

    const pathname = window.location.pathname;
    const lastSlashIndex = pathname.lastIndexOf('/');
    const hashedId = pathname.substring(lastSlashIndex + 1);

    useEffect(() => {
        const fetchProjectData = async () => {
            console.log(hashedId, 'id');

            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/shared-projects?hash_eq=${hashedId}&populate=categories`
                );
                const sharedProject = response.data[0];

                setProject(sharedProject);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        if (hashedId) {
            fetchProjectData();
        }
    }, [hashedId]);

    console.log(project, 'prkj')
    if (isLoading) {
        return <LoadingPage />;
    }

    if (!project) {
        return <p>Project not found.</p>;
    }

    return (
        <div>
            hi there
        </div>
    );
};

export default SharedProjectPage;