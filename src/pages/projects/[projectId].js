import Project from "@/components/projects/Project";
import axiosPrivate from "@/api/axios";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return <Project pr={projectId} />;
};

export default index;
