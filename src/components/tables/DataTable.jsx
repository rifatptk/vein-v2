import Image from "next/image";
import Link from "next/link";
import Loader from "../loaders/Loader";

function DataTable({ cols, data = [], isLoading }) {
  if (isLoading) return <Loader />;
  return (
    <>
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">Donors</h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          240 donors
        </span>
      </div>

      <div className="border overflow-x-auto border-gray-200 md:rounded-lg mt-5">
        <table className="divide-y w-full divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {cols.map((col) => (
                <th
                  key={col.id}
                  scope="col"
                  className="py-3.5 text-sm text-center text-gray-500 whitespace-nowrap"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data.map((user) => (
              <tr key={user.id}>
                <td className="px-4 text-sm font-medium whitespace-nowrap">
                  <div className="flex items-center gap-2 ">
                    <Image
                      src={user.image}
                      alt={user.firstName}
                      width={100}
                      height={100}
                      priority={true}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                    <span className="font-semibold  text-sm">
                      {user.firstName + " " + user.lastName}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <h4 className="bg-red-200 w-fit mx-auto font-bold px-4 py-2 text-red-500 ring ring-red-300 text-center rounded-full">
                    {user.bloodGroup}
                  </h4>
                </td>

                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <div>
                    {`${user.address.address}, ${user.address.city}, ${user.address.state}`}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <div>{user.phone}</div>
                </td>
                <td className="px-4 py-4 text-sm">
                  <Link
                    href={`/donors/${user.id}`}
                    className="bg-red-500 hover:bg-red-400 text-white font-semibold px-5 py-2 rounded"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataTable;
