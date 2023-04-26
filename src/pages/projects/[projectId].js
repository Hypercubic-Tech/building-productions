import Project from "@/components/projects/Project";
import axiosPrivate from "@/api/axios";

export const getStaticPaths = async () => {
    //reqvest to get projects data
    const res = await axiosPrivate.get("/api/admin/projects/get_projects");

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
    const res = await axiosPrivate.post("/api/admin/projects/get_users_project", { projectId });

  return {
    props: {
      pr: res?.data,
    },
  };
};

const index = ({ pr }) => {
  return <Project pr={pr} />;
};

export default index;
