import { donationProcess } from "@/constants";
import React from "react";

function DonationProcess() {
  return (
    <section className="py-10">
      <div className="container">
        <h2>Donation Process</h2>

        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
          {donationProcess.map((step) => (
            <li key={step.id}>
              <div className="w-10 h-10 bg-red-200 text-xl text-red-500 font-bold grid place-items-center rounded-[40%] mb-4">
                {step.id}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DonationProcess;
