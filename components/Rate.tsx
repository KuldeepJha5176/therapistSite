import React from "react";

export default function RatesComponent() {
  return (
    <div className="bg-slate-400 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-slate-800 mb-12">
          Rates and Insurance
        </h2>

        <div className="space-y-8 text-slate-700 text-lg">
          <div>
            <p className="mb-2 font-medium">Session Fees:</p>
            <p className="mb-2">$200 / individual session</p>
            <p>$240 / couples session</p>
          </div>

          <div>
            <p className="mb-4">Psychodiagnostic Evaluation - $225</p>
          </div>

          <div>
            <p className="mb-4">
              I accept both private pay and insurance. I am in-network with BCBS
              and Aetna.
            </p>
          </div>

          <div>
            <p>
              For out-of-network plans, I&#39;ve partnered with Mentaya using{" "}
              <a
                href="#"
                className="text-slate-800 underline hover:text-slate-600 transition-colors"
              >
                this tool
              </a>{" "}
              to help you check your eligibility for reimbursement for my
              services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
