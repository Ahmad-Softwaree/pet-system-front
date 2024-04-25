import Pagination from "@/components/providers/_user/Pagination";
import { Loader, NoData } from "@/components/shared";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ManagersGrid from "@/containers/_user/ManagerGrid";

const Managers = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center  p-5 h-full gap-5 py-30">
      <h1 className="text-white-500 text-sub-heading1-semibold font-bold">
        Managers
      </h1>
      <Pagination page={`manager`}>
        {({ isFetchingNextPage, data, hasNextPage, isLoading, ref }) => {
          return (
            <>
              {isLoading ? (
                <Loader size="xl" screen={true} />
              ) : data?.pages?.some((arr) => arr.length > 0) ? (
                <>
                  <Table>
                    <TableCaption>Managers</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Id</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Salary</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.pages.map((row, index) => {
                        return (
                          <ManagersGrid key={index} page={index} row={row} />
                        );
                      })}
                    </TableBody>
                  </Table>
                  {!isFetchingNextPage && hasNextPage && (
                    <button ref={ref}>
                      <Loader />
                    </button>
                  )}
                </>
              ) : (
                <NoData />
              )}
            </>
          );
        }}
      </Pagination>
    </div>
  );
};

export default Managers;
