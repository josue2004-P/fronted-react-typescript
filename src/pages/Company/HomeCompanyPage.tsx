import { useEffect } from "react";
import { useCompany } from "../../hooks/useCompany";
import { Link } from "react-router-dom";

export default function HomeCompanyPage() {
  const { companies, startLoadCompanies } = useCompany();

  useEffect(() => {
    startLoadCompanies();
  }, []);

  return (
    <div className=" ">
      {/* Header con título y botón */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Companies</h2>
        <Link
        to={"create"}
          className="px-4 py-2 border border-black rounded-md text-sm font-medium text-black hover:bg-black hover:text-white transition"
          aria-label="Agregar empresa"
        >
          + Agregar Empresa
        </Link>
      </div>

      {/* Contenedor con scroll vertical */}
      <div className=" border border-gray-200 rounded-lg">
        <div className="">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-white sticky top-0 z-10">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                >
                  DATABASE
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                >
                  Legal Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                >
                  STATUS
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                >
                  Resgistrion Date
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-700"
                >
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {companies.map((c, idx) => (
                <tr
                  key={c._id}
                  className={`${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {c._id.toString().slice(-4).padStart(4, "0")}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {c.name}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                    {c.databaseName}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 ">
                    {c.legalName}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        c.status === "active"
                          ? "bg-black text-white"
                          : c.status === "inactive"
                          ? "bg-gray-200 text-gray-900"
                          : "bg-gray-900 text-white/90"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 ">
                    {c.registrationDate}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm">
                    <div className="inline-flex gap-2">
                      <Link
                        to={`update/${c._id}`}
                        className="px-3 py-1 border border-black text-sm rounded-md hover:bg-black hover:text-white transition"
                        aria-label={`Ver ${c.name}`}
                      >
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pie con conteo minimalista */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <div>{companies.length} resultados</div>
        <div className="hidden sm:flex items-center gap-3">
          <button className="px-3 py-1 border border-black rounded-md text-sm hover:bg-black hover:text-white transition">
            Anterior
          </button>
          <button className="px-3 py-1 border border-black rounded-md text-sm hover:bg-black hover:text-white transition">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
