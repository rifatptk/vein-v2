"use client";
import { useQuery } from "@tanstack/react-query";
import DataTable from "../tables/DataTable";
import { getData } from "@/fetchers";
import { donorsListCols } from "@/constants";

function DonorsList() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["donors"],
    queryFn: () => getData("/users"),
  });

  return (
    <section className="container pt-24">
      <h1 className="mb-5">
        Donors are real life <span className="text-red-500">Heros!</span>
      </h1>
      <DataTable
        cols={donorsListCols}
        data={data?.users}
        isLoading={isLoading}
      />
    </section>
  );
}

export default DonorsList;
