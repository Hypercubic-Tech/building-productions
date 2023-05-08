import Project from "@/components/projects/Project";
import axiosPrivate from "@/api/axiosPrivate";
import axios from "axios";

export const getStaticPaths = async () => {
  //reqvest to get projects data
  const res = await axios.get("http://localhost:1337/api/projects", {});

  let paths = [];
  if (res?.data?.data?.length) {
    paths = res?.data?.data?.map((item) => {
        return {
          params: { projectId: item.id },
        };
    });
  }
  console.log(paths)
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
      pr: res?.data?.data
    },
  };
};

const index = ({ pr }) => {
  return <Project pr={pr} />;
};

export default index;
