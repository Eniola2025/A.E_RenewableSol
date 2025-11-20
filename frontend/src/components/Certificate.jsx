export default function Certificate() {
  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <div className="bg-white border border-gray-300 rounded-lg p-10 shadow-md">
        <header className="flex justify-between items-center mb-6">
          <div className="flex gap-4 items-center">
            <div className="w-18 h-18 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              AE
            </div>
            <div>
              <h1 className="text-xl font-semibold">A.EnergySol</h1>
              <p className="text-sm text-gray-600">Electrical & Solar Solutions — RC: 123456 — info@aenergysol.com</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Certificate No.</div>
            <div className="font-bold mt-1">CER-2025-001</div>
            <div className="text-sm text-gray-500 mt-2">Date Issued</div>
            <div className="font-semibold mt-1">October 27, 2025</div>
          </div>
        </header>

        <div className="text-center my-8">
          <h2 className="text-3xl font-bold text-emerald-700 tracking-wide">Certificate of Earthing Installation & Test</h2>
          <p className="text-gray-600 mt-2">
            This is to certify that the earthing works described below have been completed and tested in accordance with accepted practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-teal-50 p-4 border border-emerald-100 rounded-lg">
            <strong className="text-sm text-gray-600 block mb-2">Client / Site</strong>
            <span className="font-bold">Client Name / Company</span><br />
            <small className="text-gray-600">Site Address: Street, City, State</small>
          </div>
          <div className="bg-teal-50 p-4 border border-emerald-100 rounded-lg">
            <strong className="text-sm text-gray-600 block mb-2">Installer</strong>
            <span className="font-bold">A.E. Installer</span><br />
            <small className="text-gray-600">Contact: +234 80X XXX XXXX</small>
          </div>
          <div className="bg-teal-50 p-4 border border-emerald-100 rounded-lg">
            <strong className="text-sm text-gray-600 block mb-2">Scope of Works</strong>
            <span>Supply, installation and testing of earthing/grounding system inclusive of rods, conductors, backfill and bonding.</span>
          </div>
          <div className="bg-teal-50 p-4 border border-emerald-100 rounded-lg">
            <strong className="text-sm text-gray-600 block mb-2">Test Method</strong>
            <span>3-point fall-of-potential (or clamp test where applicable)</span>
          </div>
        </div>

        <div className="mt-6 p-6 border-2 border-dashed border-emerald-200 rounded-lg bg-white">
          <div className="flex justify-between items-center mb-2">
            <div className="text-gray-600">Measured Earth Resistance</div>
            <div className="font-bold text-lg">3.2 Ω</div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="text-gray-600">Target / Requirement</div>
            <div className="font-bold text-lg">&lt; 5 Ω</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-gray-600">Test Equipment</div>
            <div className="font-bold text-lg">Fluke 1625 / Megger / Earth Tester</div>
          </div>
        </div>

        <div className="mt-6 bg-green-50 border border-emerald-200 rounded-lg p-4">
          <strong>Remarks</strong>
          <p className="mt-2 text-emerald-900">
            Earthing system performance within acceptable limits. Additional rods or chemical backfill may be required in the future if soil conditions change. Certificate valid for works completed on date of issue.
          </p>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <div className="font-bold">Verified by:</div>
            <div className="mt-2">Name: <strong>Engr. A. Installer</strong></div>
            <div>Position: <span className="text-gray-600">Site Engineer</span></div>
            <div className="mt-2 text-gray-600">Company Stamp / Seal</div>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <div className="border-b-2 border-gray-400 w-56 h-12 mb-2"></div>
              <div className="text-sm">Signature</div>
            </div>
            <div className="text-center">
              <div className="border-b-2 border-gray-400 w-56 h-12 mb-2"></div>
              <div className="text-sm">Date</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
          >
            Print / Save as PDF
          </button>
        </div>
      </div>
    </div>
  );
}
