"use client";
import { useQuery } from "@tanstack/react-query";
import DataTable from "../tables/DataTable";
import { getData } from "@/fetchers";

function DonorsList() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["donors"],
    queryFn: () => getData("/users"),
  });

  const cols = [
    { id: 1, header: "Donor" },
    { id: 2, header: "Blood group" },
    { id: 3, header: "Address" },
    { id: 4, header: "Phone" },
    { id: 5, header: <span className="sr-only">Action</span> },
  ];
  return (
    <section>
      <h1 className="mb-5">
        Donors are real life <span className="text-red-500">Heros!</span>
      </h1>
      <DataTable cols={cols} data={data?.users} />
    </section>
  );
}

export default DonorsList;
