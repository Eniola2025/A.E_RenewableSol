export default function Earthing() {
  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <div className="bg-white border border-gray-300 rounded-xl p-8 shadow-md">
        <header className="flex items-center justify-between mb-6 pb-4 border-b">
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              AE
            </div>
            <div>
              <h1 className="text-lg font-semibold">A.EnergySol</h1>
              <p className="text-sm text-gray-600">Electrical & Solar Solutions — 081X XXX XXXX — info@aenergysol.com</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Quotation #</div>
            <div className="font-semibold">QTN-2025-001</div>
            <div className="text-xs text-gray-500 mt-2">Date</div>
            <div className="font-semibold">October 27, 2025</div>
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <div className="text-sm text-gray-500">Bill To</div>
            <strong>Client Name / Company</strong>
            <div className="text-sm text-gray-500">Address line 1, City, State</div>
            <div className="text-sm text-gray-500">Phone: +234 80X XXX XXXX</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Prepared By</div>
            <strong>A.E. Installer</strong>
            <div className="text-sm text-gray-500">Site Visit: Included</div>
          </div>
        </section>

        <section className="mt-6">
          <div className="text-sm text-gray-500">Scope of Works</div>
          <p className="mt-2 text-sm">
            Supply and installation of a proper earthing (grounding) system for building/installation to ensure safety and protection against lightning and fault currents. Works include supply of materials, excavation, installation of earth electrode(s), backfill compound, bonding, testing and certification.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2 text-sm text-gray-600 w-12">#</th>
                  <th className="text-left py-3 px-2 text-sm text-gray-600">Description</th>
                  <th className="text-left py-3 px-2 text-sm text-gray-600 w-20">Qty</th>
                  <th className="text-right py-3 px-2 text-sm text-gray-600 w-32">Unit Price (NGN)</th>
                  <th className="text-right py-3 px-2 text-sm text-gray-600 w-32">Total (NGN)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, desc: 'Battery', qty: '1', price: 300000, total: 300000 },
                  { id: 2, desc: '350W Panel', qty: '4', price: 78000, total: 312000 },
                  { id: 4, desc: 'Panel & inverter Accessories', qty: '---', price: 80000, total: 80000 },
                  { id: 7, desc: 'Cable', qty: '---', price: 50000, total: 50000 }
                ].map(item => (
                  <tr key={item.id} className="border-b border-dashed">
                    <td className="py-3 px-2">{item.id}</td>
                    <td className="py-3 px-2">{item.desc}</td>
                    <td className="py-3 px-2">{item.qty}</td>
                    <td className="py-3 px-2 text-right">{item.price.toLocaleString()}</td>
                    <td className="py-3 px-2 text-right">{item.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 ml-auto max-w-sm">
            <table className="w-full">
              <tbody>
                <tr>
                  <th className="text-left py-2">Subtotal</th>
                  <td className="text-right py-2">750,000</td>
                </tr>
                <tr>
                  <th className="text-left py-2">VAT (7.5%)</th>
                  <td className="text-right py-2">18,675</td>
                </tr>
                <tr className="border-t-2 text-emerald-700 font-bold text-lg">
                  <th className="text-left py-2">Grand Total (NGN)</th>
                  <td className="text-right py-2">768,675</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-blue-50 border border-emerald-100 rounded-lg p-4">
            <strong>Notes & Terms</strong>
            <ul className="mt-2 ml-6 text-sm text-emerald-900 space-y-1">
              <li>Prices are valid for 30 days from quotation date.</li>
              <li>Work to commence upon acceptance and deposit of 50% unless otherwise agreed.</li>
              <li>Any additional works discovered on site will be quoted separately.</li>
              <li>Earthing resistance target: &lt; 5 Ω (will vary with soil conditions). Additional rods/backfill may be required to reach target.</li>
              <li>Testing will be performed with a 3-point (or clamp) earth resistance tester and a certificate will be issued on completion.</li>
            </ul>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <div>Prepared by:</div>
              <strong>A.E. Installer</strong>
              <div>Signature: ____________________</div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <div>Client acceptance:</div>
              <div className="border-b border-dashed w-80 h-10 mb-2"></div>
              <div>Name / Signature / Date</div>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
          >
            Print / Save as PDF
          </button>
        </section>
      </div>
    </div>
  );
}
