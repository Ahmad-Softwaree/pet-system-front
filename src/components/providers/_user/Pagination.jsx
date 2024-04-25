import { useGetEmployees } from "@/react-query/query/employee.query";
import { useGetManagers } from "@/react-query/query/manager.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Pagination = ({ children, page }) => {
  const { ref, inView } = useInView();
  const {
    isFetchingNextPage,
    data,
    hasNextPage,
    isLoading,
    fetchNextPage,
    refetch,
  } =
    page === "manager"
      ? useGetManagers()
      : page === "employee"
      ? useGetEmployees()
      : null;

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView]);

  return children({
    isFetchingNextPage,
    data,
    hasNextPage,
    isLoading,
    ref,
    refetch,
  });
};

export default Pagination;