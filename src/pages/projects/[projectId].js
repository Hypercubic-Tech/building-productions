import Project from "@/components/projects/Project";
import axiosInstance from "@/api/axios";

export const getStaticPaths = async () => {
    //reqvest to get projects data
    const res = await axiosInstance.get("/api/admin/projects/get_projects");

    let paths = [];
    if (res?.data?.length) {
        paths = res?.data?.map((item) => {
            return {
                params: { projectId: item?._id },
            };
        });
    }
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async ({ params }) => {
    const projectId = params?.projectId || undefined;
    const res = await axiosInstance.post("/api/admin/projects/get_users_project", { projectId });

    return {
        props: {
            pr: res?.data?.project[0] || {}
        }
    };
};

const index = ({ pr }) => {
    return <Project pr={pr} />;
};

export default index;