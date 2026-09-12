import { trackAnalyticsEvent } from "@/lib/analytics";

export function FirstApartmentKitCard() {
  return (
    <section
      aria-labelledby="first-apartment-kit-heading"
      className="bg-white rounded-3xl border border-earth-900/10 p-7 md:p-10 mb-10 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center"
    >
      <div>
        <span className="uppercase text-xs font-bold tracking-widest text-moss">
          Free move-in kit. No signup.
        </span>
        <h2 id="first-apartment-kit-heading" className="font-serif text-3xl md:text-4xl mt-3">
          First Apartment, Less Waste
        </h2>
        <p className="text-earth-900/70 mt-4 leading-relaxed">
          Set up a home that works for you without treating a giant shopping list as a requirement.
          Decide what to buy now, what can wait, and what you already have, share, or borrow.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-earth-900/70">
          <li>Budget totals that flag unpriced items instead of calling them free</li>
          <li>Measurement checks and a flexible move-in checklist</li>
          <li>Print your plan, export a backup, or use the four-page printable kit</li>
        </ul>
      </div>
      <div className="bg-moss/5 rounded-2xl p-6">
        <p className="font-medium">A home, not a shopping haul.</p>
        <div className="mt-5 flex flex-col gap-3">
          <a
            href="/tools/first-apartment-kit.html"
            onClick={() =>
              trackAnalyticsEvent("resource_open", {
                resource_name: "first_apartment_kit",
                resource_format: "html",
              })
            }
            className="bg-earth-900 text-white px-6 py-3 rounded-full text-center font-medium hover:bg-earth-900/90 transition-colors"
          >
            Open the free apartment planner
          </a>
          <a
            href="/downloads/first-apartment-less-waste-v1.pdf"
            download
            onClick={() =>
              trackAnalyticsEvent("resource_download", {
                resource_name: "first_apartment_kit",
                resource_format: "pdf",
              })
            }
            className="border border-earth-900/20 px-6 py-3 rounded-full text-center font-medium hover:bg-earth-900/5 transition-colors"
          >
            Download the four-page kit
          </a>
        </div>
        <p className="text-sm text-earth-900/70 mt-4">
          No account, payment, or email required. The planner does not send your entries to ETLH.
          Saving on your browser is optional and does not sync across devices.
        </p>
      </div>
    </section>
  );
}
