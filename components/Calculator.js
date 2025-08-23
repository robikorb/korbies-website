import { useState, useEffect } from 'react';

/**
 * Clarity Calculator
 *
 * Provides a simple comparison tool to help visitors assess which
 * support tier might fit their needs. Users can adjust the number of
 * employees, devices and complexity level to see an estimated tier
 * suggestion and potential efficiency gain. The logic here is
 * deliberately simplistic and can be swapped for real pricing or
 * scoring functions later.
 */
export default function Calculator() {
  const [employees, setEmployees] = useState(25);
  const [devices, setDevices] = useState(35);
  const [complexity, setComplexity] = useState(3);
  const [tier, setTier] = useState('Standard');
  const [efficiency, setEfficiency] = useState(60);

  useEffect(() => {
    // Basic heuristic to determine tier
    const score = employees * 0.5 + devices * 0.3 + complexity * 10;
    if (score < 50) {
      setTier('Starter');
    } else if (score < 100) {
      setTier('Standard');
    } else {
      setTier('Enterprise');
    }
    // Efficiency as a percentage capped between 20% and 95%
    let eff = Math.min(95, Math.max(20, Math.round((complexity / 5) * 80 + 20)));
    setEfficiency(eff);
  }, [employees, devices, complexity]);

  return (
    <section id="calculator" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text">Clarity Calculator</h2>
          <p className="mt-2 text-muted max-w-2xl mx-auto">
            Compare the cost of in‑house IT vs. Korbies Tech's support tiers. Estimate your savings and discover the right plan for your business—without seeing any pricing upfront.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left panel: inputs and results */}
          <div className="flex-1 bg-card border border-border rounded-xl shadow-soft p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="employees" className="block text-sm font-medium mb-1">Employees</label>
                <input
                  id="employees"
                  type="number"
                  min="1"
                  value={employees}
                  onChange={e => setEmployees(parseInt(e.target.value) || 1)}
                  className="w-full rounded-md border border-border bg-dark2 text-text p-2"
                />
              </div>
              <div>
                <label htmlFor="devices" className="block text-sm font-medium mb-1">Devices (approx.)</label>
                <input
                  id="devices"
                  type="number"
                  min="1"
                  value={devices}
                  onChange={e => setDevices(parseInt(e.target.value) || 1)}
                  className="w-full rounded-md border border-border bg-dark2 text-text p-2"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="complexity" className="block text-sm font-medium mb-1">Complexity</label>
                <input
                  id="complexity"
                  type="range"
                  min="1"
                  max="5"
                  value={complexity}
                  onChange={e => setComplexity(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted">
                  <span>Basic</span>
                  <span>Advanced</span>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="my-6 h-px bg-border"></div>
            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div className="bg-dark2 border border-border rounded-lg p-4">
                <div className="text-muted text-sm">Suggested Tier</div>
                <div className="text-2xl font-semibold text-text">{tier}</div>
              </div>
              <div className="bg-dark2 border border-border rounded-lg p-4">
                <div className="text-muted text-sm mb-2">Potential Efficiency Gain</div>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1 h-3 bg-border rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ width: `${efficiency}%` }}
                    ></div>
                  </div>
                    <span className="text-sm text-text">{efficiency}%</span>
                </div>
              </div>
              <div className="col-span-full text-muted text-xs mt-2">
                <span role="img" aria-label="info">ℹ️</span> This preview avoids prices. Get a tailored proposal during your free consultation.
              </div>
            </div>
          </div>
          {/* Right panel: call to action */}
          <div className="w-full lg:w-1/3 bg-card border border-border rounded-xl shadow-soft p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-text mb-2">Ready for integration</h3>
              <p className="text-muted">
                Drop your preferred pricing logic or API here later. The UI and validation are wired—no refactor required.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-5 py-3 rounded-md shadow-soft hover:brightness-110"
            >
              <span role="img" aria-label="calendar">📅</span> Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}