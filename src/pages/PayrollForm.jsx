import Layout from "../components/Layout";

function PayrollForm() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-6">

        <h2 className="text-3xl font-semibold mb-2">
          Run Payroll Cycle
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Enter payroll details to calculate and finalize employee payout
        </p>

        <div className="bg-white p-8 rounded-xl shadow-md">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Employee ID"
            />

            <input
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Days Worked"
            />

            <input
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 md:col-span-2"
              placeholder="Payroll Month"
            />
          </div>

          <div className="flex justify-end">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition">
              Process Salary
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default PayrollForm;
