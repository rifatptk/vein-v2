"use client";

import { getData } from "@/fetchers";
import { useQuery } from "@tanstack/react-query";

function DonorDetail({ params }) {
  const { donorId } = params;

  const { isLoading, data, isError } = useQuery({
    queryKey: ["donor", donorId],
    queryFn: () => getData(`/users/${donorId}`),
  });

  console.log(data);

  return <main className="container pt-24">Donor {donorId}</main>;
}

export default DonorDetail;
