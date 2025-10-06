import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { CompanyCreateUpdate } from "../../types/company";
import { Link } from "react-router-dom";
import { useCompany } from "../../hooks/useCompany";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  legalName: Yup.string().required("Legal name is required"),
  databaseName: Yup.string().required("Database name is required"),
  status: Yup.mixed<"active" | "inactive">()
    .oneOf(["active", "inactive"])
    .required("Status is required"),
});

export default function CreateCompanyPage() {
  const { startCreateNewCompany } = useCompany();

  const initialValues: CompanyCreateUpdate = {
    name: "",
    legalName: "",
    databaseName: "",
    status: "inactive",
  };

  const handleSubmit = async (
    values: CompanyCreateUpdate,
    {
      setSubmitting,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      // Call your hook here
      console.log(values);
      await startCreateNewCompany(values);
    } catch (error) {
      console.error(error);
    } finally {
      // Allow future submissions
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Add Company</h2>
        <Link
          to="/company"
          className="px-4 py-2 border border-black rounded-md text-sm font-medium text-black hover:bg-black hover:text-white transition"
        >
          ← Back
        </Link>
      </div>

      {/* Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <Field
                id="name"
                name="name"
                placeholder="e.g. My Company"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-black focus:border-black outline-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Database Name */}
            <div>
              <label
                htmlFor="databaseName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Database Name
              </label>
              <Field
                id="databaseName"
                name="databaseName"
                placeholder="e.g. company_db"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-black focus:border-black outline-none"
              />
              <ErrorMessage
                name="databaseName"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Legal Name */}
            <div>
              <label
                htmlFor="legalName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Legal Name
              </label>
              <Field
                id="legalName"
                name="legalName"
                placeholder="e.g. My Company Inc."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-black focus:border-black outline-none"
              />
              <ErrorMessage
                name="legalName"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status
              </label>
              <Field
                as="select"
                id="status"
                name="status"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-black focus:border-black outline-none"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Field>
              <ErrorMessage
                name="status"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                type="reset"
                className="px-4 py-2 border border-gray-400 rounded-md text-sm hover:bg-gray-100 transition"
              >
                Clear
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 border border-black rounded-md text-sm font-medium text-white bg-black hover:bg-gray-900 transition disabled:opacity-50"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
