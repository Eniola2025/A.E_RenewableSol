export default function Completion() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-12 border-8 border-green-700 rounded-3xl shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700 mb-2">Certificate of Solar System Completion</h1>
          <p className="text-sm text-gray-600">
            <strong>Certificate No:</strong> _______ &nbsp;&nbsp; <strong>Date:</strong> ____ / ____ / ______
          </p>
        </div>

        <div className="mt-8 leading-relaxed">
          <p className="mb-6">
            This is to certify that a complete solar energy system, including earthing installation and performance
            testing, has been successfully completed and commissioned as per industry standards.
          </p>

          <div className="space-y-4">
            <div>
              <span className="font-semibold">Client Name:</span> _______________________________
            </div>
            <div>
              <span className="font-semibold">Installation Address:</span> _______________________________
            </div>
            <div>
              <span className="font-semibold">System Capacity:</span> _______________________________
            </div>
            <div>
              <span className="font-semibold">Inverter Model:</span> _______________________________
            </div>
            <div>
              <span className="font-semibold">Battery Bank:</span> _______________________________
            </div>
            <div>
              <span className="font-semibold">PV Modules:</span> _______________________________
            </div>
            <div>
              <span className="font-semibold">Earthing Resistance:</span> ____________________ Ohms
            </div>
            <div>
              <span className="font-semibold">Inspection Date:</span> ____ / ____ / ______
            </div>
            <div>
              <span className="font-semibold">Remarks:</span> ____________________________________________
            </div>
          </div>

          <p className="mt-6">
            All safety, protection, and performance tests have been carried out and confirmed satisfactory. The
            system is ready for operation.
          </p>

          <div className="flex justify-between mt-12">
            <div className="text-center">
              <div className="border-t-2 border-gray-800 w-48 mb-2"></div>
              <p className="font-semibold">Installer / Engineer</p>
            </div>
            <div className="text-center">
              <div className="border-t-2 border-gray-800 w-48 mb-2"></div>
              <p className="font-semibold">Client / Owner</p>
            </div>
          </div>

          <div className="text-center mt-10 text-sm text-gray-600">
            <p>&copy; 2025 A.EnergySol | Certified Renewable Energy Solutions</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => window.print()}
        className="block mx-auto mt-10 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
      >
        Print / Save as PDF
      </button>
    </div>
  );
}
